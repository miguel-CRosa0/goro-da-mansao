import express from 'express';
import Database from 'better-sqlite3';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const db = new Database(path.join(__dirname, '..', 'products.db'));
const JWT_SECRET = 'goro-secret-key-2024';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Database
db.exec(`
  CREATE TABLE IF NOT EXISTS users (

    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL,
    email TEXT,
    profile_image TEXT
  );


  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    description TEXT,
    price REAL NOT NULL,
    category TEXT,
    image_url TEXT,
    tag TEXT
  );
`);

// Migration: Ensure columns exist
const tableInfo = db.prepare('PRAGMA table_info(users)').all();
const columns = tableInfo.map(c => c.name);
if (!columns.includes('email')) {
  try { db.prepare('ALTER TABLE users ADD COLUMN email TEXT').run(); } catch(e) {}
}
if (!columns.includes('profile_image')) {
  try { db.prepare('ALTER TABLE users ADD COLUMN profile_image TEXT').run(); } catch(e) {}
}

// Seed Data (if empty)
const row = db.prepare('SELECT count(*) as count FROM products').get();
if (row.count === 0) {
  const insert = db.prepare('INSERT INTO products (name, description, price, category, image_url, tag) VALUES (?, ?, ?, ?, ?, ?)');
  
  const initialProducts = [
    {
      name: 'GORÓ CLASSIC',
      description: 'O sabor original que redefiniu a experiência energética. Pureza e precisão digital.',
      price: 18.90,
      category: 'SEASON 01',
      image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeqA7PQyb3SypHp5GlbH06uyiGNb-8tEHCnUusA5LTGZlcVObS7b2dLWXLhKyMJEkcqnPXYZxd92npHTYWLSmr6JRtf1LoKHDXxFZ_9I_arR8rCn8FAnjteYd_7SoJIC64SAiIo2cQjhELITTVJRH0nSyi2NcZLUBzP-9LRZ0LTvvnZkk6nNPpDQSfiTDD0lutiNloRhtWNXi5W5rrcFvEiS0GU46Dsekv2FQf87EZxaz56WttSNoqp0GTMmMwagRXYDImkLYzBg0',
      tag: 'NEW'
    },
    {
      name: 'STEEL VIBE',
      description: 'Edição limitada com detalhes em metal líquido. Estética bruta e performance pura.',
      price: 24.90,
      category: 'LIMITED',
      image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP6_m_nDmwxaEloeDPsFdrc03CcvMF0tcOPAcaOxE1xvNt-DJ9snxy1FAnbhsqqyUF3ERss1fgICOJHwqiA8N0H1wYmda8Rg3eDS0G_a1FewbsJep_Ztwr9RTrfYxvzA0N4b_9KdEUg3l7qQyEb9mUYUcdd-ChkamI19Xg3LCklfjv9pPyzCgFAfxgCb4fBs5anD81o8Dbe7_HprEp-hv03qIM0CWUS5J8dsTiuY748R_7aw10Wfz3-L_raHS02RTegws2AGhjn8g',
      tag: 'LIMITED'
    },
    {
      name: 'NOIR ESSENCE',
      description: 'A essência da noite. Matte black com toques sutis de energia concentrada.',
      price: 22.00,
      category: 'NIGHT RUN',
      image_url: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAbhxyM-7wnuV_V2IYIZeY4VKuPeosEBpDunhpFp6nXWJr-c0icKyoQVdx0AA2vfuIhxhPLPsn1fEurBTnTGqcAdEZSuW_UT5ftFmlzjfyATjd3UNuMBX8cEskw9YhkQfGpW1jaeowEUpFsp87EuEIPy1-E3qKO6LjLKZ80LJM1qrEoFx4OES-dl4H6C4xQzc36vgccAhJMqHO0la0c8S86HqeL655CBlBdhTJ2xbcVlk_klZhF94cPLkeGiBmGl3J2qb5YltC6uXA',
      tag: 'POPULAR'
    }
  ];

  for (const p of initialProducts) {
    insert.run(p.name, p.description, p.price, p.category, p.image_url, p.tag);
  }
}

// Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
};

// Auth API
app.post('/api/auth/register', async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const info = db.prepare('INSERT INTO users (username, password) VALUES (?, ?)').run(username, hashedPassword);
    const token = jwt.sign({ id: info.lastInsertRowid, username }, JWT_SECRET);
    res.json({ token, user: { id: info.lastInsertRowid, username, email: null, profile_image: null } });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(400).json({ error: err.message || 'Username already exists' });
  }
});


app.post('/api/auth/login', async (req, res) => {
  const { username, password } = req.body;
  const user = db.prepare('SELECT * FROM users WHERE username = ?').get(username);
  
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username }, JWT_SECRET);
  res.json({ token, user: { id: user.id, username, email: user.email, profile_image: user.profile_image } });
});

app.get('/api/auth/me', authenticateToken, (req, res) => {
  const user = db.prepare('SELECT id, username, email, profile_image FROM users WHERE id = ?').get(req.user.id);
  res.json(user);
});

app.put('/api/auth/profile', authenticateToken, async (req, res) => {
  const { username, email, password, profile_image } = req.body;
  const userId = req.user.id;

  try {
    let updateQuery = 'UPDATE users SET username = ?, email = ?, profile_image = ?';
    let params = [username, email, profile_image];

    if (password) {
      const hashedPassword = await bcrypt.hash(password, 10);
      updateQuery += ', password = ?';
      params.push(hashedPassword);
    }

    updateQuery += ' WHERE id = ?';
    params.push(userId);

    db.prepare(updateQuery).run(...params);
    
    const updatedUser = db.prepare('SELECT id, username, email, profile_image FROM users WHERE id = ?').get(userId);
    const token = jwt.sign(updatedUser, JWT_SECRET);
    
    res.json({ token, user: updatedUser });
  } catch (err) {
    res.status(400).json({ error: 'Erro ao atualizar perfil: ' + err.message });
  }
});

// Products API
app.get('/api/products', (req, res) => {
  const products = db.prepare('SELECT * FROM products').all();
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = db.prepare('SELECT * FROM products WHERE id = ?').get(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ShoppingCart, User, Menu, Moon, Sun, LogOut } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import { useCart } from '../context/CartContext'

const Layout = ({ children }) => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user, logout } = useAuth()
  const { cartCount } = useCart()
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme')
    return saved === 'dark'
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.classList.remove('light')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.classList.add('light')
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode])

  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  
  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-near-black/80 backdrop-blur-md border-b border-border-cream dark:border-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-12">
            <Link to="/" className="text-xl font-display font-medium tracking-tight text-near-black dark:text-ivory flex items-center gap-2">
              <span className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-xs font-body">GM</span>
              Goró da Mansão
            </Link>
            
            <div className="hidden md:flex items-center gap-8 text-[15px] font-medium font-body">
              <Link 
                to="/catalog" 
                className={`transition-colors hover:text-primary ${(location.pathname === '/catalog' && !location.search) ? 'text-primary font-bold' : 'text-olive-gray dark:text-warm-silver'}`}
              >
                Loja
              </Link>
              <Link 
                to="/catalog?category=SEASON 01" 
                className={`transition-colors hover:text-primary ${location.search.includes('SEASON') ? 'text-primary font-bold' : 'text-olive-gray dark:text-warm-silver'}`}
              >
                Coleções
              </Link>
              <Link 
                to="/catalog?category=LIMITED" 
                className={`transition-colors hover:text-primary ${location.search.includes('LIMITED') ? 'text-primary font-bold' : 'text-olive-gray dark:text-warm-silver'}`}
              >
                O Cofre
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/checkout" className="relative p-2 text-olive-gray dark:text-warm-silver hover:text-primary transition-colors">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 w-4 h-4 bg-primary text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 text-olive-gray dark:text-warm-silver hover:text-primary transition-colors"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <div className="h-6 w-px bg-border-cream dark:bg-dark-surface mx-2"></div>

            <div className="flex items-center gap-2">
              <Link to="/profile" className="hidden sm:block text-right mr-2 group">
                <div className="text-[12px] font-bold text-near-black dark:text-ivory uppercase tracking-wider group-hover:text-primary transition-colors">{user?.username}</div>
                <div className="text-[10px] text-primary font-medium">MEMBRO DA MANSÃO</div>
              </Link>
              <button 
                onClick={handleLogout}
                className="p-2 text-olive-gray dark:text-warm-silver hover:text-red-500 transition-colors"
                title="Sair"
              >
                <LogOut size={20} />
              </button>
            </div>

            <Link to="/catalog" className="hidden md:block btn-terracotta text-sm py-2 px-5 ml-4">
              Comprar Agora
            </Link>
            
            <button className="md:hidden p-2 text-olive-gray dark:text-warm-silver">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-ivory dark:bg-dark-surface/30 border-t border-border-cream dark:border-dark-surface py-20 mt-24 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <div className="text-2xl font-display font-medium text-near-black dark:text-ivory mb-6">Goró da Mansão</div>
            <p className="text-[15px] text-olive-gray dark:text-warm-silver leading-relaxed font-body">
              Redefinindo a experiência noturna com pureza e precisão digital. A evolução literária para aqueles que governam a Mansão.
            </p>
          </div>
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-near-black dark:text-ivory mb-6 font-body">Produtos</h4>
            <ul className="space-y-4 text-[15px] text-olive-gray dark:text-warm-silver font-body">
              <li><Link to="/catalog" className="hover:text-primary transition-colors">Ver Todos</Link></li>
              <li><Link to="/catalog?category=LIMITED" className="hover:text-primary transition-colors">Edições Limitadas</Link></li>
              <li><a href="#" className="hover:text-primary transition-colors">Assinaturas</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-near-black dark:text-ivory mb-6 font-body">Recursos</h4>
            <ul className="space-y-4 text-[15px] text-olive-gray dark:text-warm-silver font-body">
              <li><a href="#" className="hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Envio e Devoluções</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-[13px] font-bold uppercase tracking-widest text-near-black dark:text-ivory mb-6 font-body">Siga-nos</h4>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-parchment dark:bg-dark-surface border border-border-cream dark:border-dark-surface flex items-center justify-center hover:bg-white dark:hover:bg-near-black transition-colors cursor-pointer text-olive-gray dark:text-warm-silver"></div>
              <div className="w-10 h-10 rounded-xl bg-parchment dark:bg-dark-surface border border-border-cream dark:border-dark-surface flex items-center justify-center hover:bg-white dark:hover:bg-near-black transition-colors cursor-pointer text-olive-gray dark:text-warm-silver"></div>
              <div className="w-10 h-10 rounded-xl bg-parchment dark:bg-dark-surface border border-border-cream dark:border-dark-surface flex items-center justify-center hover:bg-white dark:hover:bg-near-black transition-colors cursor-pointer text-olive-gray dark:text-warm-silver"></div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-border-cream dark:border-dark-surface flex flex-col md:flex-row justify-between gap-4">
          <div className="text-[13px] text-stone-gray dark:text-stone-gray font-body">© 2024 GORÓ DA MANSÃO. TODOS OS DIREITOS RESERVADOS.</div>
          <div className="flex gap-6 text-[13px] text-stone-gray dark:text-stone-gray font-body">
            <a href="#" className="hover:text-near-black dark:hover:text-ivory transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-near-black dark:hover:text-ivory transition-colors">Termos de Serviço</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { ArrowRight, Lock, User as UserIcon } from 'lucide-react';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      return setError('As senhas não coincidem');
    }
    try {
      await register(username, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Falha no registro');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment dark:bg-near-black px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-10">
          <Link to="/" className="inline-flex items-center gap-2 text-2xl font-display font-medium text-primary mb-6">
            <span className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-sm font-body">GM</span>
            Goró da Mansão
          </Link>
          <h1 className="text-4xl font-display text-near-black dark:text-ivory mb-2">Criar conta</h1>
          <p className="text-olive-gray dark:text-warm-silver font-body">Junte-se ao círculo de elite da Mansão.</p>
        </div>

        <div className="card-claude bg-ivory dark:bg-dark-surface shadow-whisper">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-body">
                {error}
              </div>
            )}
            
            <div>
              <label className="block text-sm font-medium text-olive-gray dark:text-warm-silver mb-2 font-body">Usuário</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-gray">
                  <UserIcon size={18} />
                </span>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="input-claude pl-12 font-body"
                  placeholder="Seu usuário"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-olive-gray dark:text-warm-silver mb-2 font-body">Senha</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-gray">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-claude pl-12 font-body"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-olive-gray dark:text-warm-silver mb-2 font-body">Confirmar Senha</label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-gray">
                  <Lock size={18} />
                </span>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="input-claude pl-12 font-body"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button type="submit" className="btn-terracotta w-full flex items-center justify-center gap-2 font-body py-4">
              Criar conta
              <ArrowRight size={18} />
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-border-cream dark:border-white/10 text-center">
            <p className="text-sm text-olive-gray dark:text-warm-silver font-body">
              Já tem uma conta?{' '}
              <Link to="/login" className="text-primary font-semibold hover:underline">
                Entrar
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-8 py-4 bg-stone-950 border-b border-stone-800">
      <Link to="/" className="text-2xl font-black tracking-tighter text-stone-50 font-h1 uppercase">
        Goró da Mansão
      </Link>
      
      <div className="hidden md:flex gap-8 font-h1 uppercase tracking-widest font-bold text-sm">
        <Link to="/" className="text-primary-container border-b-2 border-primary-container pb-1 hover:text-primary transition-colors">Shop</Link>
        <Link to="/catalog" className="text-stone-50 hover:text-primary-container transition-colors">Collections</Link>
        <Link to="#" className="text-stone-50 hover:text-primary-container transition-colors">Limited</Link>
        <Link to="#" className="text-stone-50 hover:text-primary-container transition-colors">Vault</Link>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative hidden lg:block">
          <input 
            className="bg-stone-900 border-b border-stone-700 text-on-surface text-xs tracking-widest px-4 py-1 focus:ring-0 focus:border-primary-container transition-all outline-none" 
            placeholder="BUSCAR" 
            type="text"
          />
        </div>
        <Link to="/checkout" className="text-stone-50 active:scale-95 duration-100">
          <span className="material-symbols-outlined">shopping_cart</span>
        </Link>
        <button className="text-stone-50 active:scale-95 duration-100">
          <span className="material-symbols-outlined">person</span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

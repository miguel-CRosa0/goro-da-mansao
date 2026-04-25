import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-black border-t border-stone-900 mt-auto">
      <div className="text-sm font-bold text-stone-50 font-h1 uppercase tracking-[0.2em]">GORÓ DA MANSÃO</div>
      <div className="flex flex-wrap justify-center gap-8 font-h1 text-[10px] uppercase tracking-[0.2em] text-stone-500">
        <a className="hover:text-stone-50 transition-colors opacity-80 hover:opacity-100" href="#">Privacy Policy</a>
        <a className="hover:text-stone-50 transition-colors opacity-80 hover:opacity-100" href="#">Terms of Service</a>
        <a className="hover:text-stone-50 transition-colors opacity-80 hover:opacity-100" href="#">Shipping</a>
        <a className="hover:text-stone-50 transition-colors opacity-80 hover:opacity-100" href="#">Returns</a>
      </div>
      <div className="font-h1 text-[10px] uppercase tracking-[0.2em] text-stone-600">
        © 2024 GORÓ DA MANSÃO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  );
};

export default Footer;

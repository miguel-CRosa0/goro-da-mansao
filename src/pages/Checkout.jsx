import React from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Truck, Lock, ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Checkout = () => {
  const { cart, removeFromCart, updateQuantity, cartTotal } = useCart()

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 space-y-10">
          <Link to="/catalog" className="inline-flex items-center gap-2 text-[14px] font-medium text-olive-gray dark:text-warm-silver hover:text-primary transition-colors mb-6 font-body">
            <ArrowLeft size={16} />
            Voltar para Loja
          </Link>

          <section className="bg-white dark:bg-dark-surface rounded-[24px] border border-border-cream dark:border-dark-surface shadow-whisper p-10 transition-colors duration-300">
            <h2 className="text-3xl font-display font-medium text-near-black dark:text-ivory mb-10 flex items-center gap-4">
              <Truck size={28} className="text-primary opacity-80" />
              Informações de Envio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
              <div className="md:col-span-2">
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Endereço de E-mail</label>
                <input type="email" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Primeiro Nome</label>
                <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Sobrenome</label>
                <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Endereço Residencial</label>
                <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" />
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-dark-surface rounded-[24px] border border-border-cream dark:border-dark-surface shadow-whisper p-10 transition-colors duration-300">
            <h2 className="text-3xl font-display font-medium text-near-black dark:text-ivory mb-10 flex items-center gap-4">
              <CreditCard size={28} className="text-primary opacity-80" />
              Detalhes do Pagamento
            </h2>
            <div className="space-y-8 font-body">
              <div>
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Número do Cartão</label>
                <div className="relative">
                  <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" placeholder="0000 0000 0000 0000" />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 flex gap-2">
                    <div className="w-10 h-6 bg-white dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-md"></div>
                    <div className="w-10 h-6 bg-white dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Data de Expiração</label>
                  <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" placeholder="MM / YY" />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">CVC</label>
                  <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" placeholder="123" />
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-5">
          <div className="bg-white dark:bg-dark-surface rounded-[32px] border border-border-cream dark:border-dark-surface shadow-whisper p-12 sticky top-32 transition-colors duration-300">
            <h2 className="text-[13px] font-bold text-near-black dark:text-ivory mb-10 uppercase tracking-[0.2em] font-body">Resumo do Pedido</h2>
            
            <div className="space-y-8 mb-10">
              {cart.length === 0 ? (
                <div className="text-center py-10 text-stone-gray font-body">Seu carrinho está vazio.</div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="flex gap-6">
                    <div className="w-20 h-24 bg-ivory dark:bg-near-black rounded-2xl border border-border-cream dark:border-dark-surface flex items-center justify-center p-3">
                      <img src={item.image_url} alt={item.name} className="h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between font-display font-medium text-near-black dark:text-ivory text-lg mb-1">
                        <span>{item.name}</span>
                        <span className="font-body text-near-black dark:text-ivory">R$ {(item.price * (item.quantity || 1)).toFixed(2)}</span>
                      </div>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-3 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-lg px-2 py-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 text-stone-gray hover:text-primary transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="text-[13px] font-bold text-near-black dark:text-ivory w-4 text-center">{item.quantity || 1}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 text-stone-gray hover:text-primary transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-stone-gray hover:text-red-500 transition-colors p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-border-cream dark:border-dark-surface pt-8 space-y-5 font-body">
              <div className="flex justify-between text-[15px] text-olive-gray dark:text-warm-silver">
                <span>Subtotal</span>
                <span className="text-near-black dark:text-ivory font-medium">R$ {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-[15px] text-olive-gray dark:text-warm-silver">
                <span>Envio</span>
                <span className="text-primary font-medium italic">Calculado no próximo passo</span>
              </div>
              <div className="flex justify-between text-2xl font-display font-medium text-near-black dark:text-ivory pt-6 border-t border-border-cream dark:border-dark-surface">
                <span>Total</span>
                <span>R$ {cartTotal.toFixed(2)}</span>
              </div>
            </div>

            <button 
              disabled={cart.length === 0}
              className="w-full btn-terracotta justify-center py-5 mt-10 text-lg font-body disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Finalizar Compra
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-2.5 text-[11px] text-stone-gray uppercase tracking-[0.2em] font-bold font-body">
              <Lock size={14} className="opacity-60" />
              Transação Segura e Criptografada
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

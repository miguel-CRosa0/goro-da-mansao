import React from 'react'
import { Link } from 'react-router-dom'
import { CreditCard, Truck, Lock, ArrowLeft } from 'lucide-react'

const Checkout = () => {
  return (
    <div className="bg-parchment dark:bg-near-black min-h-screen pt-32 pb-32 px-6 transition-colors duration-300">
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Column: Forms */}
        <div className="lg:col-span-7 space-y-10">
          <Link to="/catalog" className="inline-flex items-center gap-2 text-[14px] font-medium text-olive-gray dark:text-warm-silver hover:text-primary transition-colors mb-6 font-body">
            <ArrowLeft size={16} />
            Back to Shop
          </Link>

          <section className="bg-white dark:bg-dark-surface rounded-[24px] border border-border-cream dark:border-dark-surface shadow-whisper p-10 transition-colors duration-300">
            <h2 className="text-3xl font-display font-medium text-near-black dark:text-ivory mb-10 flex items-center gap-4">
              <Truck size={28} className="text-primary opacity-80" />
              Shipping Information
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-body">
              <div className="md:col-span-2">
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Email Address</label>
                <input type="email" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">First Name</label>
                <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" />
              </div>
              <div>
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Last Name</label>
                <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Street Address</label>
                <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" />
              </div>
            </div>
          </section>

          <section className="bg-white dark:bg-dark-surface rounded-[24px] border border-border-cream dark:border-dark-surface shadow-whisper p-10 transition-colors duration-300">
            <h2 className="text-3xl font-display font-medium text-near-black dark:text-ivory mb-10 flex items-center gap-4">
              <CreditCard size={28} className="text-primary opacity-80" />
              Payment Details
            </h2>
            <div className="space-y-8 font-body">
              <div>
                <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Card Number</label>
                <div className="relative">
                  <input type="text" className="w-full px-5 py-3.5 bg-ivory dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-xl focus:ring-2 focus:ring-primary/10 focus:border-primary outline-none transition-all text-near-black dark:text-ivory" placeholder="0000 0000 0000 0000" />
                  <div className="absolute right-5 top-1/2 -translate-y-1/2 flex gap-2">
                    <div className="w-10 h-6 bg-parchment dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-md"></div>
                    <div className="w-10 h-6 bg-parchment dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-md"></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <label className="block text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-3">Expiry Date</label>
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
          <div className="bg-ivory dark:bg-dark-surface rounded-[32px] border border-border-cream dark:border-dark-surface shadow-whisper p-12 sticky top-32 transition-colors duration-300">
            <h2 className="text-[13px] font-bold text-near-black dark:text-ivory mb-10 uppercase tracking-[0.2em] font-body">Order Summary</h2>
            
            <div className="space-y-8 mb-10">
              {[
                { name: 'GORÓ CLASSIC', price: 18.90, qty: 1, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeqA7PQyb3SypHp5GlbH06uyiGNb-8tEHCnUusA5LTGZlcVObS7b2dLWXLhKyMJEkcqnPXYZxd92npHTYWLSmr6JRtf1LoKHDXxFZ_9I_arR8rCn8FAnjteYd_7SoJIC64SAiIo2cQjhELITTVJRH0nSyi2NcZLUBzP-9LRZ0LTvvnZkk6nNPpDQSfiTDD0lutiNloRhtWNXi5W5rrcFvEiS0GU46Dsekv2FQf87EZxaz56WttSNoqp0GTMmMwagRXYDImkLYzBg0' },
                { name: 'STEEL VIBE', price: 24.90, qty: 2, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAP6_m_nDmwxaEloeDPsFdrc03CcvMF0tcOPAcaOxE1xvNt-DJ9snxy1FAnbhsqqyUF3ERss1fgICOJHwqiA8N0H1wYmda8Rg3eDS0G_a1FewbsJep_Ztwr9RTrfYxvzA0N4b_9KdEUg3l7qQyEb9mUYUcdd-ChkamI19Xg3LCklfjv9pPyzCgFAfxgCb4fBs5anD81o8Dbe7_HprEp-hv03qIM0CWUS5J8dsTiuY748R_7aw10Wfz3-L_raHS02RTegws2AGhjn8g' }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-20 h-24 bg-parchment dark:bg-near-black rounded-2xl border border-border-cream dark:border-dark-surface flex items-center justify-center p-3">
                    <img src={item.img} alt={item.name} className="h-full object-contain" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between font-display font-medium text-near-black dark:text-ivory text-lg mb-1">
                      <span>{item.name}</span>
                      <span className="font-body text-near-black dark:text-ivory">R$ {(item.price * item.qty).toFixed(2)}</span>
                    </div>
                    <div className="text-[13px] text-stone-gray font-body">Quantity: {item.qty}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-border-cream dark:border-dark-surface pt-8 space-y-5 font-body">
              <div className="flex justify-between text-[15px] text-olive-gray dark:text-warm-silver">
                <span>Subtotal</span>
                <span className="text-near-black dark:text-ivory font-medium">R$ 68.70</span>
              </div>
              <div className="flex justify-between text-[15px] text-olive-gray dark:text-warm-silver">
                <span>Shipping</span>
                <span className="text-primary font-medium italic">Calculated at next step</span>
              </div>
              <div className="flex justify-between text-2xl font-display font-medium text-near-black dark:text-ivory pt-6 border-t border-border-cream dark:border-dark-surface">
                <span>Total</span>
                <span>R$ 68.70</span>
              </div>
            </div>

            <button className="w-full btn-terracotta justify-center py-5 mt-10 text-lg font-body">
              Complete Purchase
            </button>
            
            <div className="mt-8 flex items-center justify-center gap-2.5 text-[11px] text-stone-gray uppercase tracking-[0.2em] font-bold font-body">
              <Lock size={14} className="opacity-60" />
              Secure Encrypted Transaction
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

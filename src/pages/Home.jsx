import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Zap, Shield } from 'lucide-react'

const Home = () => {
  return (
    <div className="overflow-hidden bg-parchment dark:bg-near-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[13px] font-medium mb-10 font-body">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            New Drop / Limited Edition
          </div>
          <h1 className="mb-8 font-display leading-[1.05] text-near-black dark:text-ivory">
            Sabor Energético Original, <br />
            <span className="text-primary italic">0% Estimulantes</span>, 100% Vibe
          </h1>
          <p className="text-[19px] text-olive-gray dark:text-warm-silver max-w-2xl mb-12 leading-relaxed mx-auto lg:mx-0 font-body">
            Redefining the experience with purity and editorial precision. 
            The literary evolution for those who rule the Mansion. Pure performance, thoughtfully balanced.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
            <Link to="/catalog" className="btn-terracotta text-lg px-10 py-4 font-body">
              Get Started Now
              <ArrowRight size={20} />
            </Link>
            <Link to="/catalog?category=SEASON 01" className="btn-secondary text-lg px-10 py-4 font-body">
              View Collection
            </Link>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-primary/10 blur-[140px] rounded-full -z-10 opacity-60"></div>
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-ivory dark:bg-primary/5 blur-[100px] rounded-full -z-10 opacity-80"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4mF2V34xO8qmdxxFKYfDoaT9PLuCaxROObu-LRlSKS-RlR-tc4sG69x7GlsydHk8iwkhOWNkbhzrKFmMNRJbp7S7nrd4VM3z1rMKwaPR-XtnIzXqerGhKiFzoskd4vrZ52_iq_IUOJ8ef_mYKxaYiXtALVj7kayPvLjqQ5a5FQgeutq3AOFqNKAYW0IoaxViApIYkq4a2upBJBgBTpss8k1OhGyUwz2SGHUgW9kV_tKukFlJ2uJBd6AfbddNKiQ5-1GkZwl_oi4c" 
            alt="Goró da Mansão Product"
            className="w-full max-w-lg mx-auto drop-shadow-2xl transition-all duration-700 hover:scale-[1.02] cursor-pointer rounded-[32px]"
          />
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-ivory dark:bg-dark-surface/10 py-32 border-y border-border-cream dark:border-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-near-black dark:text-ivory mb-6">Chancelado pela Mansão</h2>
            <p className="text-[13px] text-stone-gray font-bold uppercase tracking-[0.2em] font-body">Thoughtful companions in high performance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Leo Stronda', role: 'Elite Member', text: "The only goro that maintains mental clarity without the crash of cheap stimulants. A thoughtful addition to my routine." },
              { name: 'Renato Cariani', role: 'Alpha Tier', text: "Technical precision and editorial aesthetics. It's not just a drink, it's a companion for focused performance." },
              { name: 'Toguro', role: 'Ambassador', text: "The packaging is a masterpiece of minimalist design. The content is the future of the Mansion's lifestyle." }
            ].map((testimony, i) => (
              <div key={i} className="card-claude flex flex-col justify-between hover:border-primary/20 transition-all">
                <div>
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-primary text-primary opacity-80" />)}
                  </div>
                  <p className="text-[17px] text-olive-gray dark:text-warm-silver italic mb-10 leading-relaxed font-display">"{testimony.text}"</p>
                </div>
                <div>
                  <div className="font-display font-medium text-near-black dark:text-ivory text-xl mb-1">{testimony.name}</div>
                  <div className="text-[13px] text-primary font-medium tracking-wide font-body uppercase">{testimony.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section (Editorial Style) */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-6 border-b border-border-cream dark:border-dark-surface pb-12">
          <div className="max-w-2xl">
            <h2 className="font-display text-near-black dark:text-ivory mb-6">Editorial Philosophy</h2>
            <p className="text-lg text-olive-gray dark:text-warm-silver font-body">Our process is a literary salon reimagined as a production line — warm, unhurried, and quietly intellectual.</p>
          </div>
          <div className="h-px w-32 bg-primary/30 hidden md:block"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 auto-rows-[320px]">
          <div className="md:col-span-8 md:row-span-2 bg-near-black dark:bg-dark-surface rounded-[32px] p-16 flex flex-col justify-end relative overflow-hidden group border border-transparent dark:border-dark-surface transition-all">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_krYR2pUrnMlMqP2Pmh9iyyunE-AHqSlwMNrgl_2GeW_ObNviaHJFNCpb3Ez0akpmXJR8Md_6AeXYWeoimEZbfhc3VZkwTGrQ1LCMVhb5UyGpfir7mhPAEDLGwQF4rycTOB6ZMck9UjjX3Krt-jhHMrnuToBM9qIy8tk93rH-67EL_tFML7VaYefqlYcGPc4_mc_yTKUqf-CtDQU9wI4pE7XZLZPqWGHNfdovMOSHpZINhcjQ66gerztlsT23gUdkTO7QeTM-j8w" 
              className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
              alt="Engineering"
            />
            <div className="relative z-10">
              <span className="text-primary font-bold tracking-[0.2em] text-[12px] uppercase mb-6 block font-body">CRAFTMANSHIP</span>
              <h3 className="text-parchment dark:text-ivory font-display text-4xl mb-6">Engenharia do Sabor</h3>
              <p className="text-stone-gray dark:text-warm-silver max-w-md font-body text-lg">Every batch undergoes a thoughtful purification process, ensuring flavor is as clean as the aesthetics that define us.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-ivory dark:bg-dark-surface border border-border-cream dark:border-dark-surface rounded-[32px] p-10 flex flex-col justify-between hover:border-primary/20 transition-all">
            <Shield size={44} className="text-primary opacity-80" />
            <div>
              <h4 className="text-near-black dark:text-ivory font-display text-2xl mb-3">100% Purity</h4>
              <p className="text-sm text-olive-gray dark:text-warm-silver font-body leading-relaxed">Zero synthetic additives. Only premium botanical extracts and glacial water.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-primary rounded-[32px] p-10 flex flex-col justify-between group hover:brightness-105 transition-all">
            <Zap size={44} className="text-white group-hover:scale-110 transition-transform duration-500" />
            <div>
              <h4 className="text-white font-display text-2xl mb-3 italic">Energy Vibe</h4>
              <p className="text-white/80 text-sm font-body leading-relaxed">Cognitive stimulus without the noise. The focus that your mind thoughtfully demands.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

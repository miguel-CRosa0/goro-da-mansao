import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Star, Zap, Shield, AlertTriangle, CheckCircle2, Droplets, Brain } from 'lucide-react'

const Home = () => {
  return (
    <div className="overflow-hidden transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative pt-32 pb-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[13px] font-medium mb-10 font-body">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Novo Drop / Edição Limitada
          </div>
          <h1 className="mb-8 font-display leading-[1.05] text-near-black dark:text-ivory">
            Sabor Energético Original, <br />
            <span className="text-primary italic">0% Estimulantes</span>, 100% Vibe
          </h1>
          <p className="text-[19px] text-olive-gray dark:text-warm-silver max-w-2xl mb-12 leading-relaxed mx-auto lg:mx-0 font-body">
            Redefinindo a experiência com pureza e precisão editorial. 
            A evolução literária para aqueles que governam a Mansão. Alta performance, pensada com equilíbrio.
          </p>
          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5">
            <Link to="/catalog" className="btn-terracotta text-lg px-10 py-4 font-body">
              Comece Agora
              <ArrowRight size={20} />
            </Link>
            <Link to="/catalog?category=SEASON 01" className="btn-secondary text-lg px-10 py-4 font-body">
              Ver Coleção
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

      {/* Por Que o Goró Section */}
      <section className="bg-white dark:bg-near-black py-32 px-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="text-primary font-bold tracking-[0.2em] text-[12px] uppercase mb-4 font-body">COMPARATIVO ELITE / CIÊNCIA</div>
            <h2 className="text-near-black dark:text-white font-display text-5xl mb-8">POR QUE O GORÓ?</h2>
            <p className="text-olive-gray dark:text-warm-silver text-lg max-w-3xl leading-relaxed font-body">
              Não é apenas uma bebida. É a evolução da hidratação urbana. Compare a ciência por trás do nosso lifestyle e o impacto do bio-hacking puro.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
            {/* Energy Drink Comum */}
            <div className="bg-ivory dark:bg-[#1a1a18] border border-border-cream dark:border-white/5 rounded-[32px] p-12 relative overflow-hidden transition-colors duration-300 shadow-sm">
              <div className="flex items-center gap-4 mb-12">
                <AlertTriangle className="text-[#b53333]" size={28} />
                <h3 className="text-near-black dark:text-stone-gray font-display text-3xl italic">ENERGY DRINK COMUM</h3>
              </div>
              
              <div className="space-y-10">
                <div className="border-b border-white/5 pb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold tracking-widest text-stone-gray uppercase">Efeito Rebote</span>
                    <Zap size={16} className="text-stone-gray rotate-180" />
                  </div>
                  <p className="text-sm text-olive-gray dark:text-stone-gray/60 leading-relaxed">Picos extremos seguidos de queda brusca na produtividade e humor.</p>
                </div>
                
                <div className="border-b border-border-cream dark:border-white/5 pb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold tracking-widest text-stone-gray uppercase">Nível de Açúcar</span>
                    <Droplets size={16} className="text-stone-gray" />
                  </div>
                  <p className="text-sm text-olive-gray dark:text-stone-gray/60 leading-relaxed">Altas concentrações de sacarose e componentes inflamatórios sintéticos.</p>
                </div>
                
                <div className="pb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold tracking-widest text-stone-gray uppercase">Ansiedade Térmica</span>
                    <AlertTriangle size={16} className="text-stone-gray" />
                  </div>
                  <p className="text-sm text-olive-gray dark:text-stone-gray/60 leading-relaxed">Taquicardia e nervosismo decorrentes de cafeína sintética de baixa qualidade.</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-[#b53333]/5 border border-[#b53333]/20 rounded-2xl flex gap-4 items-start">
                <AlertTriangle size={20} className="text-[#b53333] shrink-0 mt-1" />
                <div>
                  <div className="text-[11px] font-bold text-[#b53333] uppercase tracking-wider mb-1">STATUS: ALTO RISCO</div>
                  <p className="text-[12px] text-olive-gray dark:text-stone-gray/70">O consumo prolongado compromete o sistema cardiovascular e o foco cognitivo.</p>
                </div>
              </div>
            </div>

            {/* Goró da Mansão */}
            <div className="bg-white dark:bg-dark-surface border border-border-cream dark:border-primary/20 rounded-[32px] p-12 relative overflow-hidden transition-colors duration-300 shadow-sm">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] -z-0"></div>
              
              <div className="flex items-center gap-4 mb-12 relative z-10">
                <CheckCircle2 className="text-primary" size={28} />
                <h3 className="text-near-black dark:text-white font-display text-3xl">GORÓ DA MANSÃO</h3>
              </div>
              
              <div className="space-y-10 relative z-10">
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">Energia Limpa</span>
                    <Zap size={16} className="text-primary" />
                  </div>
                  <p className="text-sm text-olive-gray dark:text-warm-silver/80 leading-relaxed">Liberação gradual para 6h de foco absoluto sem tremores ou crash.</p>
                </div>
                
                <div className="border-b border-white/10 pb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">Hidratação Atômica</span>
                    <Droplets size={16} className="text-primary" />
                  </div>
                  <p className="text-sm text-olive-gray dark:text-warm-silver/80 leading-relaxed">Complexa eletrolítica premium para recuperação celular imediata pós-esforço.</p>
                </div>
                
                <div className="pb-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-xs font-bold tracking-widest text-primary uppercase">Bio-Sinergia</span>
                    <Brain size={16} className="text-primary" />
                  </div>
                  <p className="text-sm text-olive-gray dark:text-warm-silver/80 leading-relaxed">Ingredientes de origem controlada que respeitam e otimizam seu ritmo biológico.</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-primary/10 border border-primary/30 rounded-2xl flex gap-4 items-start relative z-10">
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                <div>
                  <div className="text-[11px] font-bold text-primary uppercase tracking-wider mb-1">STATUS: SAFRA PREMIUM</div>
                  <p className="text-[12px] text-warm-silver/90">Fórmula testada e aprovada para alta performance urbana. Bio-hacking por definição.</p>
                </div>
              </div>

              <Link to="/catalog" className="w-full btn-terracotta justify-center py-4 mt-10 text-sm tracking-widest uppercase relative z-10">
                Upgrade Your Ritual <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: '0%', label: 'Açúcar Refinado' },
              { val: '100%', label: 'Origem Natural' },
              { val: '24H', label: 'Clareza Mental' },
              { val: '5X', label: 'Eletrólitos' }
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl font-display text-primary mb-2">{stat.val}</div>
                <div className="text-[11px] font-bold text-stone-gray uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white dark:bg-dark-surface/10 py-32 border-y border-border-cream dark:border-dark-surface transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-display text-near-black dark:text-ivory mb-6">Chancelado pela Mansão</h2>
            <p className="text-[13px] text-stone-gray font-bold uppercase tracking-[0.2em] font-body">Companheiros atenciosos em alta performance</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { name: 'Leo Stronda', role: 'Membro Elite', text: "O único goró que mantém a clareza mental sem o crash dos estimulantes baratos. Uma adição pensada à minha rotina." },
              { name: 'Renato Cariani', role: 'Nível Alpha', text: "Precisão técnica e estética editorial. Não é apenas uma bebida, é um companheiro para performance focada." },
              { name: 'Toguro', role: 'Embaixador', text: "A embalagem é uma obra-prima de design minimalista. O conteúdo é o futuro do lifestyle da Mansão." }
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
            <h2 className="font-display text-near-black dark:text-ivory mb-6">Filosofia Editorial</h2>
            <p className="text-lg text-olive-gray dark:text-warm-silver font-body">Nosso processo é um salão literário reimaginado como uma linha de produção — caloroso, sem pressa e silenciosamente intelectual.</p>
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
              <span className="text-primary font-bold tracking-[0.2em] text-[12px] uppercase mb-6 block font-body">ARTESANATO</span>
              <h3 className="text-white dark:text-ivory font-display text-4xl mb-6">Engenharia do Sabor</h3>
              <p className="text-stone-gray dark:text-warm-silver max-w-md font-body text-lg">Cada lote passa por um processo de purificação cuidadoso, garantindo que o sabor seja tão limpo quanto a estética que nos define.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-white dark:bg-dark-surface border border-border-cream dark:border-dark-surface rounded-[32px] p-10 flex flex-col justify-between hover:border-primary/20 transition-all">
            <Shield size={44} className="text-primary opacity-80" />
            <div>
              <h4 className="text-near-black dark:text-ivory font-display text-2xl mb-3">100% Pureza</h4>
              <p className="text-sm text-olive-gray dark:text-warm-silver font-body leading-relaxed">Zero aditivos sintéticos. Apenas extratos botânicos premium e água glacial.</p>
            </div>
          </div>
          
          <div className="md:col-span-4 bg-primary rounded-[32px] p-10 flex flex-col justify-between group hover:brightness-105 transition-all">
            <Zap size={44} className="text-white group-hover:scale-110 transition-transform duration-500" />
            <div>
              <h4 className="text-white font-display text-2xl mb-3 italic">Vibe Energética</h4>
              <p className="text-white/80 text-sm font-body leading-relaxed">Estímulo cognitivo sem o ruído. O foco que sua mente exige com sabedoria.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home

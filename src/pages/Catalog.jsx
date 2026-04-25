import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Plus, Filter } from 'lucide-react'
import { useCart } from '../context/CartContext'

const Catalog = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const location = useLocation()
  const navigate = useNavigate()
  const { addToCart } = useCart()

  const queryParams = new URLSearchParams(location.search)
  const categoryFilter = queryParams.get('category')

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true)
      try {
        const response = await axios.get('http://localhost:3001/api/products')
        let data = response.data
        if (categoryFilter) {
          data = data.filter(p => p.category === categoryFilter)
        }
        setProducts(data)
      } catch (error) {
        console.error('Error fetching products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [categoryFilter])

  const handleBuyNow = (product) => {
    addToCart(product)
    // Optional: show a notification or feedback
  }

  return (
    <div className="min-h-screen pt-32 pb-32 px-6 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-end gap-10 mb-20 border-b border-border-cream dark:border-dark-surface pb-12">
          <div className="max-w-2xl">
            <h1 className="font-display text-near-black dark:text-ivory mb-6">O Cofre</h1>
            <p className="text-[19px] text-olive-gray dark:text-warm-silver font-body leading-relaxed">
              Explore nossos drops exclusivos e edições limitadas. Cada Goró é uma obra de arte digital pensada para performance física.
            </p>
          </div>
          <div className="flex gap-5 font-body">
            <button className="flex items-center gap-2 px-5 py-2.5 bg-ivory dark:bg-dark-surface border border-border-cream dark:border-dark-surface rounded-xl text-[14px] font-medium text-near-black dark:text-ivory hover:bg-white dark:hover:bg-near-black transition-all shadow-sm">
              <Filter size={18} className="text-stone-gray" />
              Filtrar
            </button>
            <div className="text-[13px] font-bold text-near-black dark:text-ivory uppercase tracking-[0.2em] border-b-2 border-primary pb-1 self-center">
              {categoryFilter || 'Todos os Drops'}
            </div>
          </div>
        </header>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[4/5] bg-ivory dark:bg-dark-surface rounded-[32px] mb-8"></div>
                <div className="h-6 bg-ivory dark:bg-dark-surface rounded w-1/2 mb-4"></div>
                <div className="h-4 bg-ivory dark:bg-dark-surface rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-20">
            {products.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="aspect-[4/5] bg-ivory dark:bg-dark-surface border border-border-cream dark:border-dark-surface rounded-[32px] overflow-hidden mb-8 flex items-center justify-center p-12 transition-all duration-700 group-hover:border-primary/30 relative shadow-sm">
                  <img 
                    src={product.image_url} 
                    alt={product.name}
                    className="h-full object-contain group-hover:scale-105 transition-transform duration-1000"
                  />
                  {product.tag && (
                    <div className="absolute top-8 left-8 px-4 py-1.5 bg-white dark:bg-near-black border border-border-cream dark:border-dark-surface rounded-full shadow-sm text-[11px] font-bold uppercase tracking-[0.15em] text-primary font-body">
                      {product.tag}
                    </div>
                  )}
                  <button 
                    onClick={(e) => { e.stopPropagation(); handleBuyNow(product); }}
                    className="absolute bottom-8 right-8 w-14 h-14 bg-primary text-white rounded-2xl flex items-center justify-center opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 shadow-xl hover:scale-110 active:scale-95"
                  >
                    <Plus size={28} />
                  </button>
                </div>
                
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <div className="text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-2 font-body">{product.category}</div>
                    <h3 className="text-2xl font-display font-medium text-near-black dark:text-ivory group-hover:text-primary transition-colors">{product.name}</h3>
                  </div>
                  <div className="text-primary font-bold text-[20px] font-body tracking-tight">
                    R$ {product.price.toFixed(2)}
                  </div>
                </div>
                <p className="text-[15px] text-olive-gray dark:text-warm-silver font-body leading-relaxed line-clamp-2">
                  {product.description}
                </p>
              </div>
            ))}
            
            {/* Unreleased Placeholder */}
            <div className="aspect-[4/5] bg-parchment dark:bg-dark-surface/5 rounded-[32px] flex flex-col items-center justify-center border-2 border-dashed border-border-cream dark:border-dark-surface group hover:border-primary/20 transition-all">
              <div className="w-20 h-20 rounded-2xl bg-ivory dark:bg-dark-surface flex items-center justify-center text-stone-gray mb-6 group-hover:scale-110 transition-transform duration-500">
                <Plus size={36} className="opacity-40" />
              </div>
              <div className="text-[11px] font-bold text-stone-gray uppercase tracking-[0.2em] mb-2 font-body">CLASSIFICADO</div>
              <div className="text-2xl font-display font-medium text-stone-gray/60 dark:text-stone-gray italic">Em Breve</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Catalog

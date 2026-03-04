'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { TrendingProduct } from './TrendingProduct'

interface Product {
  id: string
  name: string
  price: number
  category: string
  image: string
  alt: string
}

const TRENDING_PRODUCTS: Product[] = [
  {
    id: 'arch-vase',
    name: 'Arch Sculpture Vase',
    price: 120.0,
    category: 'Limited Edition Ceramic',
    image: '/arch-vase.jpg',
    alt: 'Modern arch sculpture ceramic vase',
  },
  {
    id: 'studio-wireless',
    name: 'Studio-X Wireless',
    price: 450.0,
    category: 'Matte Black Audio',
    image: '/wireless-headphones.jpg',
    alt: 'Premium wireless headphones in matte black',
  },
  {
    id: 'glass-decanter',
    name: 'Brushed Glass Decanter',
    price: 85.0,
    category: 'Culinary Essential',
    image: '/glass-decanter.jpg',
    alt: 'Brushed glass decanter with wooden handle',
  },
  {
    id: 'ceramic-bowl',
    name: 'Minimalist Ceramic Bowl',
    price: 65.0,
    category: 'Artisan Pottery',
    image: '/arch-vase.jpg',
    alt: 'Handcrafted ceramic bowl',
  },
]

export function TrendingNow() {
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: 'left' | 'right') => {
    const container = document.getElementById('trending-scroll')
    if (container) {
      const scrollAmount = 400
      const newPosition =
        direction === 'left'
          ? Math.max(0, scrollPosition - scrollAmount)
          : scrollPosition + scrollAmount

      container.scrollTo({
        left: newPosition,
        behavior: 'smooth',
      })
      setScrollPosition(newPosition)
    }
  }

  return (
    <section className="py-20 px-4 md:px-6">
      <style>{`
        #trending-scroll::-webkit-scrollbar {
          display: none;
        }
        #trending-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2 tracking-wide">
              Trending Now
            </h2>
            <p className="text-muted-foreground text-lg">
              The most coveted pieces of the season.
            </p>
          </div>

          {/* Navigation arrows */}
          <div className="flex gap-4">
            <button
              onClick={() => scroll('left')}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6 text-foreground" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="p-2 hover:bg-muted rounded-full transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6 text-foreground" />
            </button>
          </div>
        </div>

        {/* Products carousel */}
        <div
          id="trending-scroll"
          className="flex gap-6 overflow-x-auto"
          style={{ scrollBehavior: 'smooth' }}
        >
          {TRENDING_PRODUCTS.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-80">
              <TrendingProduct
                id={product.id}
                name={product.name}
                price={product.price}
                category={product.category}
                image={product.image}
                alt={product.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

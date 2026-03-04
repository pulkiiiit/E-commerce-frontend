'use client'

import { Header } from '@/components/Header'
import { ProductDisplayCard } from '@/components/ProductDisplayCard'
import { useState } from 'react'

interface Product {
  id: string
  name: string
  price: number
  image: string
  alt: string
  subcategory: string
}

interface Subcategory {
  id: string
  name: string
}

interface CategoryPageTemplateProps {
  title: string
  description: string
  products: Product[]
  subcategories: Subcategory[]
}

export function CategoryPageTemplate({
  title,
  description,
  products,
  subcategories,
}: CategoryPageTemplateProps) {
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState('newest')

  const filteredProducts = selectedSubcategory
    ? products.filter(
        p =>
          p.subcategory ===
          subcategories.find(s => s.id === selectedSubcategory)?.name
      )
    : products

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <div className="pt-32 pb-12 px-6 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4 tracking-wide">
            {title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">{description}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-12 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="sticky top-24 space-y-8">
                {/* Subcategories */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
                    Categories
                  </h3>
                  <div className="space-y-3">
                    <button
                      onClick={() => setSelectedSubcategory(null)}
                      className={`block text-left w-full p-3 rounded-lg transition-all ${
                        selectedSubcategory === null
                          ? 'bg-primary text-primary-foreground'
                          : 'text-foreground hover:bg-muted'
                      }`}
                    >
                      All Products
                    </button>
                    {subcategories.map(subcategory => (
                      <button
                        key={subcategory.id}
                        onClick={() => setSelectedSubcategory(subcategory.id)}
                        className={`block text-left w-full p-3 rounded-lg transition-all ${
                          selectedSubcategory === subcategory.id
                            ? 'bg-primary text-primary-foreground'
                            : 'text-foreground hover:bg-muted'
                        }`}
                      >
                        {subcategory.name}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Sort */}
                <div>
                  <h3 className="text-sm font-semibold text-foreground uppercase tracking-widest mb-4">
                    Sort By
                  </h3>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="w-full p-3 border border-border rounded-lg text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                  >
                    <option value="newest">Newest</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="popular">Most Popular</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="flex-1">
              <div className="mb-6 flex justify-between items-center">
                <p className="text-muted-foreground">
                  Showing {filteredProducts.length} products
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductDisplayCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    image={product.image}
                    alt={product.alt}
                    subcategory={product.subcategory}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

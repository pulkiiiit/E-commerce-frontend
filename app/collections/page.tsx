'use client'

import { Header } from '@/components/Header'
import { CategoryCard } from '@/components/CategoryCard'

interface Category {
  id: string
  name: string
  image: string
  alt: string
  productCount: number
  subcategories: {
    id: string
    name: string
    productCount: number
  }[]
}

const CATEGORIES: Category[] = [
  {
    id: 'home-decor',
    name: 'Home Decor',
    image: '/category-home-decor.jpg',
    alt: 'Home Decor Collection',
    productCount: 48,
    subcategories: [
      { id: 'vases', name: 'Vases & Vessels', productCount: 18 },
      { id: 'sculptures', name: 'Sculptures', productCount: 12 },
      { id: 'decorative-objects', name: 'Decorative Objects', productCount: 18 },
    ],
  },
  {
    id: 'textiles',
    name: 'Textiles',
    image: '/category-textiles.jpg',
    alt: 'Premium Textiles Collection',
    productCount: 36,
    subcategories: [
      { id: 'blankets', name: 'Blankets & Throws', productCount: 12 },
      { id: 'cushions', name: 'Cushions', productCount: 15 },
      { id: 'rugs', name: 'Rugs', productCount: 9 },
    ],
  },
  {
    id: 'furniture',
    name: 'Furniture',
    image: '/category-furniture.jpg',
    alt: 'Modern Furniture Collection',
    productCount: 24,
    subcategories: [
      { id: 'seating', name: 'Seating', productCount: 10 },
      { id: 'tables', name: 'Tables', productCount: 8 },
      { id: 'storage', name: 'Storage', productCount: 6 },
    ],
  },
  {
    id: 'audio',
    name: 'Audio & Tech',
    image: '/category-audio.jpg',
    alt: 'Audio & Technology Collection',
    productCount: 20,
    subcategories: [
      { id: 'headphones', name: 'Headphones', productCount: 8 },
      { id: 'speakers', name: 'Speakers', productCount: 7 },
      { id: 'accessories', name: 'Tech Accessories', productCount: 5 },
    ],
  },
  {
    id: 'tableware',
    name: 'Tableware',
    image: '/category-tableware.jpg',
    alt: 'Handcrafted Tableware Collection',
    productCount: 42,
    subcategories: [
      { id: 'dinnerware', name: 'Dinnerware', productCount: 15 },
      { id: 'glassware', name: 'Glassware', productCount: 16 },
      { id: 'serving', name: 'Serving Pieces', productCount: 11 },
    ],
  },
  {
    id: 'lighting',
    name: 'Lighting',
    image: '/category-lighting.jpg',
    alt: 'Designer Lighting Collection',
    productCount: 28,
    subcategories: [
      { id: 'floor-lamps', name: 'Floor Lamps', productCount: 10 },
      { id: 'table-lamps', name: 'Table Lamps', productCount: 12 },
      { id: 'pendant', name: 'Pendant Lights', productCount: 6 },
    ],
  },
]

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <div className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Collections
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our curated collections of thoughtfully designed pieces that celebrate minimalist living and timeless elegance.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CATEGORIES.map((category) => (
              <CategoryCard
                key={category.id}
                id={category.id}
                name={category.name}
                image={category.image}
                alt={category.alt}
                productCount={category.productCount}
              />
            ))}
          </div>

          {/* Subcategories Section */}
          <div className="mt-24 space-y-16">
            {CATEGORIES.map((category) => (
              <div key={category.id} className="border-t border-gray-200 pt-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">
                  {category.name} Subcategories
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.subcategories.map((subcategory) => (
                    <a
                      key={subcategory.id}
                      href={`/collections/${category.id}/${subcategory.id}`}
                      className="p-6 border border-gray-200 rounded-lg hover:border-gray-400 hover:bg-gray-50 transition-all group"
                    >
                      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-2 text-lg">
                        {subcategory.name}
                      </h3>
                      <p className="text-sm text-gray-500">{subcategory.productCount} items</p>
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

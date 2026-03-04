'use client'

import { CategoryPageTemplate } from '@/components/CategoryPageTemplate'

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

const PRODUCTS: Product[] = [
  // Seating
  { id: 'se1', name: 'Minimalist Gray Sofa', price: 1200, image: '/product-sofa-1.jpg', alt: 'Gray sofa', subcategory: 'Seating' },
  { id: 'se2', name: 'Modern Linen Chair', price: 680, image: '/product-sofa-1.jpg', alt: 'Linen chair', subcategory: 'Seating' },
  { id: 'se3', name: 'Contemporary Lounge Chair', price: 890, image: '/product-sofa-1.jpg', alt: 'Lounge chair', subcategory: 'Seating' },
  { id: 'se4', name: 'Scandinavian Armchair', price: 750, image: '/product-sofa-1.jpg', alt: 'Armchair', subcategory: 'Seating' },
  { id: 'se5', name: 'Minimalist Bench', price: 450, image: '/product-sofa-1.jpg', alt: 'Bench', subcategory: 'Seating' },

  // Tables
  { id: 't1', name: 'Natural Wood Dining Table', price: 980, image: '/product-table-1.jpg', alt: 'Dining table', subcategory: 'Tables' },
  { id: 't2', name: 'Minimalist Coffee Table', price: 520, image: '/product-table-1.jpg', alt: 'Coffee table', subcategory: 'Tables' },
  { id: 't3', name: 'Modern Side Table', price: 380, image: '/product-table-1.jpg', alt: 'Side table', subcategory: 'Tables' },
  { id: 't4', name: 'Elegant Marble Table', price: 1100, image: '/product-table-1.jpg', alt: 'Marble table', subcategory: 'Tables' },

  // Storage
  { id: 'st1', name: 'Minimalist Shelving Unit', price: 650, image: '/product-table-1.jpg', alt: 'Shelving', subcategory: 'Storage' },
  { id: 'st2', name: 'Contemporary Storage Cabinet', price: 890, image: '/product-table-1.jpg', alt: 'Cabinet', subcategory: 'Storage' },
  { id: 'st3', name: 'Natural Wood Bookshelf', price: 780, image: '/product-table-1.jpg', alt: 'Bookshelf', subcategory: 'Storage' },
]

const SUBCATEGORIES: Subcategory[] = [
  { id: 'seating', name: 'Seating' },
  { id: 'tables', name: 'Tables' },
  { id: 'storage', name: 'Storage' },
]

export default function FurniturePage() {
  return (
    <CategoryPageTemplate
      title="Furniture"
      description="Explore our collection of contemporary furniture pieces designed with minimalist aesthetics and exceptional craftsmanship."
      products={PRODUCTS}
      subcategories={SUBCATEGORIES}
    />
  )
}

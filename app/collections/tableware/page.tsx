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
  // Dinnerware
  { id: 'd1', name: 'Handcrafted Ceramic Plate', price: 45, image: '/product-dinnerware-1.jpg', alt: 'Ceramic plate', subcategory: 'Dinnerware' },
  { id: 'd2', name: 'Minimalist Dinner Set', price: 180, image: '/product-dinnerware-1.jpg', alt: 'Dinner set', subcategory: 'Dinnerware' },
  { id: 'd3', name: 'Modern Ceramic Bowl', price: 38, image: '/product-dinnerware-1.jpg', alt: 'Ceramic bowl', subcategory: 'Dinnerware' },
  { id: 'd4', name: 'Artisan Porcelain Plate', price: 52, image: '/product-dinnerware-1.jpg', alt: 'Porcelain plate', subcategory: 'Dinnerware' },
  { id: 'd5', name: 'Contemporary Dining Collection', price: 240, image: '/product-dinnerware-1.jpg', alt: 'Dining collection', subcategory: 'Dinnerware' },

  // Glassware
  { id: 'g1', name: 'Crystal Water Glass', price: 28, image: '/product-glassware-1.jpg', alt: 'Water glass', subcategory: 'Glassware' },
  { id: 'g2', name: 'Minimalist Wine Glass Set', price: 85, image: '/product-glassware-1.jpg', alt: 'Wine glasses', subcategory: 'Glassware' },
  { id: 'g3', name: 'Modern Drinking Glass', price: 32, image: '/product-glassware-1.jpg', alt: 'Drinking glass', subcategory: 'Glassware' },
  { id: 'g4', name: 'Premium Stemware Collection', price: 120, image: '/product-glassware-1.jpg', alt: 'Stemware', subcategory: 'Glassware' },
  { id: 'g5', name: 'Contemporary Glass Set', price: 95, image: '/product-glassware-1.jpg', alt: 'Glass set', subcategory: 'Glassware' },
  { id: 'g6', name: 'Artisan Beverage Glass', price: 42, image: '/product-glassware-1.jpg', alt: 'Beverage glass', subcategory: 'Glassware' },

  // Serving Pieces
  { id: 's1', name: 'Ceramic Serving Bowl', price: 65, image: '/product-dinnerware-1.jpg', alt: 'Serving bowl', subcategory: 'Serving Pieces' },
  { id: 's2', name: 'Minimalist Serving Platter', price: 78, image: '/product-dinnerware-1.jpg', alt: 'Serving platter', subcategory: 'Serving Pieces' },
  { id: 's3', name: 'Handcrafted Serving Dish', price: 72, image: '/product-dinnerware-1.jpg', alt: 'Serving dish', subcategory: 'Serving Pieces' },
]

const SUBCATEGORIES: Subcategory[] = [
  { id: 'dinnerware', name: 'Dinnerware' },
  { id: 'glassware', name: 'Glassware' },
  { id: 'serving', name: 'Serving Pieces' },
]

export default function TablewarePage() {
  return (
    <CategoryPageTemplate
      title="Tableware"
      description="Elevate your dining experience with our collection of handcrafted tableware and artisan-designed serving pieces."
      products={PRODUCTS}
      subcategories={SUBCATEGORIES}
    />
  )
}

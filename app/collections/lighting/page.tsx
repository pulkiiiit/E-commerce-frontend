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
  // Floor Lamps
  { id: 'f1', name: 'Minimalist Floor Lamp', price: 245, image: '/product-lamp-1.jpg', alt: 'Floor lamp', subcategory: 'Floor Lamps' },
  { id: 'f2', name: 'Contemporary Arc Lamp', price: 380, image: '/product-lamp-1.jpg', alt: 'Arc lamp', subcategory: 'Floor Lamps' },
  { id: 'f3', name: 'Modern Standing Light', price: 320, image: '/product-lamp-1.jpg', alt: 'Standing light', subcategory: 'Floor Lamps' },
  { id: 'f4', name: 'Designer Floor Lighting', price: 450, image: '/product-lamp-1.jpg', alt: 'Designer lamp', subcategory: 'Floor Lamps' },
  { id: 'f5', name: 'Minimalist Reading Lamp', price: 290, image: '/product-lamp-1.jpg', alt: 'Reading lamp', subcategory: 'Floor Lamps' },
  { id: 'f6', name: 'Modern Tripod Lamp', price: 340, image: '/product-lamp-1.jpg', alt: 'Tripod lamp', subcategory: 'Floor Lamps' },

  // Table Lamps
  { id: 't1', name: 'Minimalist Desk Lamp', price: 165, image: '/product-lamp-1.jpg', alt: 'Desk lamp', subcategory: 'Table Lamps' },
  { id: 't2', name: 'Modern Bedside Light', price: 140, image: '/product-lamp-1.jpg', alt: 'Bedside lamp', subcategory: 'Table Lamps' },
  { id: 't3', name: 'Contemporary Table Lamp', price: 195, image: '/product-lamp-1.jpg', alt: 'Table lamp', subcategory: 'Table Lamps' },
  { id: 't4', name: 'Designer Accent Lamp', price: 220, image: '/product-lamp-1.jpg', alt: 'Accent lamp', subcategory: 'Table Lamps' },
  { id: 't5', name: 'Luxury Task Lighting', price: 250, image: '/product-lamp-1.jpg', alt: 'Task light', subcategory: 'Table Lamps' },
  { id: 't6', name: 'Minimalist Ceramic Lamp', price: 180, image: '/product-lamp-1.jpg', alt: 'Ceramic lamp', subcategory: 'Table Lamps' },

  // Pendant Lights
  { id: 'p1', name: 'Modern Pendant Fixture', price: 185, image: '/product-lamp-1.jpg', alt: 'Pendant light', subcategory: 'Pendant Lights' },
  { id: 'p2', name: 'Minimalist Hanging Light', price: 210, image: '/product-lamp-1.jpg', alt: 'Hanging light', subcategory: 'Pendant Lights' },
  { id: 'p3', name: 'Contemporary Pendant Set', price: 320, image: '/product-lamp-1.jpg', alt: 'Pendant set', subcategory: 'Pendant Lights' },
  { id: 'p4', name: 'Designer Ceiling Pendant', price: 280, image: '/product-lamp-1.jpg', alt: 'Ceiling pendant', subcategory: 'Pendant Lights' },
  { id: 'p5', name: 'Minimalist Glass Pendant', price: 150, image: '/product-lamp-1.jpg', alt: 'Glass pendant', subcategory: 'Pendant Lights' },
  { id: 'p6', name: 'Modern Clustered Lights', price: 380, image: '/product-lamp-1.jpg', alt: 'Clustered lights', subcategory: 'Pendant Lights' },
]

const SUBCATEGORIES: Subcategory[] = [
  { id: 'floor-lamps', name: 'Floor Lamps' },
  { id: 'table-lamps', name: 'Table Lamps' },
  { id: 'pendant', name: 'Pendant Lights' },
]

export default function LightingPage() {
  return (
    <CategoryPageTemplate
      title="Lighting"
      description="Discover our curated collection of designer lighting fixtures that combine minimalist aesthetics with exceptional functionality."
      products={PRODUCTS}
      subcategories={SUBCATEGORIES}
    />
  )
}

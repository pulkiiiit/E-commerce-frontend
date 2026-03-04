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
  // Vases & Vessels
  { id: 'v1', name: 'Minimalist White Vase', price: 89, image: '/product-vase-1.jpg', alt: 'White ceramic vase', subcategory: 'Vases & Vessels' },
  { id: 'v2', name: 'Tall Ceramic Vessel', price: 120, image: '/product-vase-2.jpg', alt: 'Tall ceramic vase', subcategory: 'Vases & Vessels' },
  { id: 'v3', name: 'Sculptural Organic Vase', price: 145, image: '/product-vase-3.jpg', alt: 'Gray organic vase', subcategory: 'Vases & Vessels' },
  { id: 'v4', name: 'Textured Stone Vessel', price: 95, image: '/product-vase-1.jpg', alt: 'Stone textured vase', subcategory: 'Vases & Vessels' },
  { id: 'v5', name: 'Modern Cylindrical Vase', price: 110, image: '/product-vase-2.jpg', alt: 'Cylinder vase', subcategory: 'Vases & Vessels' },
  { id: 'v6', name: 'Cone Shaped Ceramic', price: 130, image: '/product-vase-3.jpg', alt: 'Cone vase', subcategory: 'Vases & Vessels' },

  // Sculptures
  { id: 's1', name: 'Abstract Form Sculpture', price: 250, image: '/product-sculpture-1.jpg', alt: 'Abstract sculpture', subcategory: 'Sculptures' },
  { id: 's2', name: 'Geometric Stone Piece', price: 320, image: '/product-sculpture-1.jpg', alt: 'Geometric sculpture', subcategory: 'Sculptures' },
  { id: 's3', name: 'Modern Art Object', price: 280, image: '/product-sculpture-1.jpg', alt: 'Modern sculpture', subcategory: 'Sculptures' },
  { id: 's4', name: 'Minimalist White Form', price: 240, image: '/product-sculpture-1.jpg', alt: 'White sculpture', subcategory: 'Sculptures' },

  // Decorative Objects
  { id: 'd1', name: 'Natural Stone Ornament', price: 65, image: '/product-vase-1.jpg', alt: 'Stone ornament', subcategory: 'Decorative Objects' },
  { id: 'd2', name: 'Ceramic Home Object', price: 78, image: '/product-vase-2.jpg', alt: 'Ceramic object', subcategory: 'Decorative Objects' },
  { id: 'd3', name: 'Minimalist Display Piece', price: 85, image: '/product-vase-3.jpg', alt: 'Display piece', subcategory: 'Decorative Objects' },
  { id: 'd4', name: 'Sculptural Home Accent', price: 95, image: '/product-sculpture-1.jpg', alt: 'Accent piece', subcategory: 'Decorative Objects' },
]

const SUBCATEGORIES: Subcategory[] = [
  { id: 'vases', name: 'Vases & Vessels' },
  { id: 'sculptures', name: 'Sculptures' },
  { id: 'decorative-objects', name: 'Decorative Objects' },
]

export default function HomeDecorPage() {
  return (
    <CategoryPageTemplate
      title="Home Decor"
      description="Curated collection of minimalist decorative pieces designed to elevate your living spaces with timeless elegance."
      products={PRODUCTS}
      subcategories={SUBCATEGORIES}
    />
  )
}

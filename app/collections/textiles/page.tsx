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
  // Blankets & Throws
  { id: 'b1', name: 'Premium Linen Blanket', price: 189, image: '/product-blanket-1.jpg', alt: 'Linen blanket', subcategory: 'Blankets & Throws' },
  { id: 'b2', name: 'Organic Cotton Throw', price: 165, image: '/product-blanket-1.jpg', alt: 'Cotton throw', subcategory: 'Blankets & Throws' },
  { id: 'b3', name: 'Minimalist Wool Blanket', price: 210, image: '/product-blanket-1.jpg', alt: 'Wool blanket', subcategory: 'Blankets & Throws' },
  { id: 'b4', name: 'Natural Fiber Throw', price: 145, image: '/product-blanket-1.jpg', alt: 'Natural throw', subcategory: 'Blankets & Throws' },

  // Cushions
  { id: 'c1', name: 'Minimalist Linen Cushion', price: 78, image: '/product-cushion-1.jpg', alt: 'Linen cushion', subcategory: 'Cushions' },
  { id: 'c2', name: 'Textured Cream Pillow', price: 95, image: '/product-cushion-1.jpg', alt: 'Cream cushion', subcategory: 'Cushions' },
  { id: 'c3', name: 'Modern Cotton Cushion', price: 85, image: '/product-cushion-1.jpg', alt: 'Cotton cushion', subcategory: 'Cushions' },
  { id: 'c4', name: 'Neutral Tone Pillow', price: 72, image: '/product-cushion-1.jpg', alt: 'Neutral cushion', subcategory: 'Cushions' },
  { id: 'c5', name: 'Handwoven Cushion', price: 110, image: '/product-cushion-1.jpg', alt: 'Handwoven cushion', subcategory: 'Cushions' },

  // Rugs
  { id: 'r1', name: 'Minimalist Area Rug', price: 450, image: '/product-blanket-1.jpg', alt: 'Area rug', subcategory: 'Rugs' },
  { id: 'r2', name: 'Natural Fiber Rug', price: 520, image: '/product-blanket-1.jpg', alt: 'Fiber rug', subcategory: 'Rugs' },
  { id: 'r3', name: 'Modern Neutral Rug', price: 380, image: '/product-blanket-1.jpg', alt: 'Neutral rug', subcategory: 'Rugs' },
]

const SUBCATEGORIES: Subcategory[] = [
  { id: 'blankets', name: 'Blankets & Throws' },
  { id: 'cushions', name: 'Cushions' },
  { id: 'rugs', name: 'Rugs' },
]

export default function TextilesPage() {
  return (
    <CategoryPageTemplate
      title="Textiles"
      description="Discover our curated selection of premium textiles featuring natural fibers and minimalist designs that bring warmth and comfort to any space."
      products={PRODUCTS}
      subcategories={SUBCATEGORIES}
    />
  )
}

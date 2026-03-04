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
  // Headphones
  { id: 'h1', name: 'Premium Wireless Headphones', price: 349, image: '/product-headphones-1.jpg', alt: 'Wireless headphones', subcategory: 'Headphones' },
  { id: 'h2', name: 'Studio Monitor Headphones', price: 450, image: '/product-headphones-1.jpg', alt: 'Studio headphones', subcategory: 'Headphones' },
  { id: 'h3', name: 'Minimalist Over-Ear Headphones', price: 380, image: '/product-headphones-1.jpg', alt: 'Over-ear headphones', subcategory: 'Headphones' },
  { id: 'h4', name: 'Noise Canceling Headphones', price: 420, image: '/product-headphones-1.jpg', alt: 'Noise canceling', subcategory: 'Headphones' },
  { id: 'h5', name: 'Professional Audio Headphones', price: 500, image: '/product-headphones-1.jpg', alt: 'Professional headphones', subcategory: 'Headphones' },

  // Speakers
  { id: 'sp1', name: 'Portable Bluetooth Speaker', price: 189, image: '/product-speaker-1.jpg', alt: 'Portable speaker', subcategory: 'Speakers' },
  { id: 'sp2', name: 'Premium Room Speaker', price: 380, image: '/product-speaker-1.jpg', alt: 'Room speaker', subcategory: 'Speakers' },
  { id: 'sp3', name: 'Hi-Fi Desktop Speaker', price: 450, image: '/product-speaker-1.jpg', alt: 'Desktop speaker', subcategory: 'Speakers' },
  { id: 'sp4', name: 'Smart Audio System', price: 520, image: '/product-speaker-1.jpg', alt: 'Smart speaker', subcategory: 'Speakers' },

  // Tech Accessories
  { id: 'ta1', name: 'Premium Charging Cable', price: 35, image: '/product-headphones-1.jpg', alt: 'Charging cable', subcategory: 'Tech Accessories' },
  { id: 'ta2', name: 'Wireless Charging Pad', price: 65, image: '/product-speaker-1.jpg', alt: 'Charging pad', subcategory: 'Tech Accessories' },
  { id: 'ta3', name: 'Minimalist Phone Stand', price: 45, image: '/product-headphones-1.jpg', alt: 'Phone stand', subcategory: 'Tech Accessories' },
]

const SUBCATEGORIES: Subcategory[] = [
  { id: 'headphones', name: 'Headphones' },
  { id: 'speakers', name: 'Speakers' },
  { id: 'accessories', name: 'Tech Accessories' },
]

export default function AudioPage() {
  return (
    <CategoryPageTemplate
      title="Audio & Tech"
      description="Discover premium audio equipment and technology accessories designed for the modern minimalist lifestyle."
      products={PRODUCTS}
      subcategories={SUBCATEGORIES}
    />
  )
}

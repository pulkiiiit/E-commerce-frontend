'use client'

import Image from 'next/image'
import Link from 'next/link'

interface CategoryCardProps {
  id: string
  name: string
  image: string
  alt: string
  productCount: number
}

export function CategoryCard({ id, name, image, alt, productCount }: CategoryCardProps) {
  return (
    <Link href={`/collections/${id}`}>
      <div className="relative h-80 rounded-2xl overflow-hidden group cursor-pointer">
        {/* Background Image */}
        <Image
          src={image}
          alt={alt}
          fill
          loading="eager"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-2xl font-serif font-bold text-white mb-2 tracking-wide">{name}</h3>
          <p className="text-white/80 text-sm">{productCount} products</p>
        </div>
      </div>
    </Link>
  )
}

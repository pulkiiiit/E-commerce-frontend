'use client'

import Image from 'next/image'

interface ProductDisplayCardProps {
  name: string
  price: number
  image: string
  alt: string
  subcategory: string
}

export function ProductDisplayCard({
  name,
  price,
  image,
  alt,
  subcategory,
}: ProductDisplayCardProps) {
  return (
    <div className="group">
      {/* Product Image */}
      <div className="relative h-80 mb-4 rounded-lg overflow-hidden bg-muted">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          {subcategory}
        </p>
        <h3 className="text-lg font-serif font-semibold text-foreground group-hover:text-accent transition-colors tracking-wide">
          {name}
        </h3>
        <p className="text-lg font-semibold text-foreground">
          ${price.toFixed(2)}
        </p>
        <button className="mt-4 w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium text-sm hover:bg-accent hover:text-background transition-colors tracking-wide">
          Add to Cart
        </button>
      </div>
    </div>
  )
}

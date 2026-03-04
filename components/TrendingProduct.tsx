import Image from 'next/image'

interface TrendingProductProps {
  id: string
  name: string
  price: number
  category: string
  image: string
  alt: string
}

export function TrendingProduct({
  name,
  price,
  category,
  image,
  alt,
}: TrendingProductProps) {
  return (
    <div className="flex-shrink-0 w-80">
      <div className="relative h-96 rounded-2xl overflow-hidden bg-muted mb-4">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-xl font-serif font-semibold text-foreground tracking-wide">{name}</h3>
        <p className="text-sm text-muted-foreground">{category}</p>
        <p className="text-lg font-bold text-foreground">${price.toFixed(2)}</p>
      </div>
    </div>
  )
}

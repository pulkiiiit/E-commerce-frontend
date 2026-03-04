'use client'

export interface Subcategory {
  id: string
  name: string
  productCount: number
}

interface SubcategoryCardProps {
  subcategory: Subcategory
  categoryId: string
}

export function SubcategoryCard({ subcategory, categoryId }: SubcategoryCardProps) {
  return (
    <a
      href={`/collections/${categoryId}/${subcategory.id}`}
      className="p-4 border border-border rounded-lg hover:border-accent transition-colors group"
    >
      <h4 className="font-serif font-semibold text-foreground group-hover:text-accent transition-colors mb-2 tracking-wide">
        {subcategory.name}
      </h4>
      <p className="text-sm text-muted-foreground">{subcategory.productCount} items</p>
    </a>
  )
}

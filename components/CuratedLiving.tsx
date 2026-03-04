'use client';

import { ProductCard } from './ProductCard';

interface Product {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'office',
    title: 'The Office',
    subtitle: 'Workspace Harmony',
    image: '/office.jpg',
    alt: 'Minimalist home office setup with laptop and desk lamp',
  },
  {
    id: 'softwear',
    title: 'Soft Wear',
    subtitle: 'Premium Textiles',
    image: '/softwear.jpg',
    alt: 'Premium luxury textiles and fabrics',
  },
  {
    id: 'ceramics',
    title: 'Ceramics',
    subtitle: 'Handcrafted Home',
    image: '/ceramics.jpg',
    alt: 'Handcrafted ceramic tableware and dishware',
  },
];

export function CuratedLiving() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-12">
          <div className="md:w-2/3">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 tracking-wide">
              Curated Living
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl">
              Explore our selection of thoughtfully designed pieces, categorized to seamlessly
              integrate with your unique lifestyle and interior aesthetic.
            </p>
          </div>

          {/* Explore All Link */}
          <div className="mt-8 md:mt-0">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-blue-500 font-semibold text-sm uppercase tracking-wide hover:text-blue-600 transition-colors"
            >
              Explore All
              <span className="ml-1">→</span>
            </a>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PRODUCTS.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

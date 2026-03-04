'use client';

import { LatestAdditionCard } from './LatestAdditionCard';

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  image: string;
  alt: string;
}

const PRODUCTS: Product[] = [
  {
    id: 'tapered-vase',
    title: 'Tapered Stone Vase',
    category: 'Home Decor',
    price: '$55.00',
    image: '/tapered-vase.jpg',
    alt: 'Minimalist tapered stone vase',
  },
  {
    id: 'noiseless-headphones',
    title: 'Noiseless Headphones',
    category: 'Audio Technology',
    price: '$340.00',
    image: '/noiseless-headphones.jpg',
    alt: 'Premium noiseless headphones',
  },
  {
    id: 'leather-journal',
    title: 'Grained Leather Journal',
    category: 'Stationery',
    price: '$48.00',
    image: '/leather-journal.jpg',
    alt: 'Premium grained leather journal',
  },
  {
    id: 'crystal-decanter',
    title: 'Crystal Bedside Decanter',
    category: 'Tableware',
    price: '$92.00',
    image: '/crystal-decanter.jpg',
    alt: 'Crystal bedside water decanter',
  },
];

export function LatestAdditions() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 tracking-wide">
            Latest Additions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Evolving the collection with new perspectives on utility.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <LatestAdditionCard
              key={product.id}
              title={product.title}
              category={product.category}
              price={product.price}
              image={product.image}
              alt={product.alt}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

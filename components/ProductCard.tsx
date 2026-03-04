'use client';

import Image from 'next/image';

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}

export function ProductCard({ title, subtitle, image, alt }: ProductCardProps) {
  return (
    <div className="relative h-96 rounded-2xl overflow-hidden group cursor-pointer">
      {/* Background Image */}
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
      />

      {/* Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-white text-2xl font-serif font-bold mb-1 tracking-wide">{title}</h3>
        <p className="text-white/80 text-sm tracking-wide uppercase">{subtitle}</p>
      </div>
    </div>
  );
}

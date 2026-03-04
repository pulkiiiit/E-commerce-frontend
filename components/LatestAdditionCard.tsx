import Image from 'next/image';

interface LatestAdditionCardProps {
  title: string;
  category: string;
  price: string;
  image: string;
  alt: string;
}

export function LatestAdditionCard({
  title,
  category,
  price,
  image,
  alt,
}: LatestAdditionCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Product Image */}
      <div className="relative h-80 rounded-2xl overflow-hidden mb-4 bg-muted">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Product Info */}
      <div>
        <h3 className="text-lg font-serif font-semibold text-foreground mb-1 tracking-wide">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground uppercase tracking-wide mb-3">
          {category}
        </p>
        <p className="text-lg font-semibold text-foreground">
          {price}
        </p>
      </div>
    </div>
  );
}

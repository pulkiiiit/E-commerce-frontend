import Image from 'next/image';

interface BannerProps {
  title: string;
  subtitle?: string;
  image: string;
  alt: string;
  ctaText?: string;
  ctaLink?: string;
}

export function Banner({
  title,
  subtitle,
  image,
  alt,
  ctaText,
  ctaLink,
}: BannerProps) {
  return (
    <div className="relative w-screen left-1/2 -translate-x-1/2 h-96 md:h-[500px] my-12 overflow-hidden" style={{ maxWidth: '100vw' }}>
      {/* Background Image */}
      <Image
        src={image}
        alt={alt}
        fill
        className="object-cover"
        priority
      />

      {/* Dark Overlay for text contrast */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight tracking-wide">
          {title}
        </h2>

        {subtitle && (
          <p className="text-lg text-white/90 mb-8 max-w-2xl">
            {subtitle}
          </p>
        )}

        {ctaText && (
          <button className="mt-4 bg-white text-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-accent hover:text-background transition-colors tracking-wide">
            {ctaText}
          </button>
        )}
      </div>
    </div>
  );
}

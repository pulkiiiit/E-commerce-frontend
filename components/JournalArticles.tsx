'use client';

import Image from 'next/image';

interface Article {
  id: string;
  category: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const ARTICLES: Article[] = [
  {
    id: 'workspace',
    category: 'INTERIORS',
    title: 'Finding Stillness in the Modern Workspace',
    description: 'How a minimalist environment can foster deep focus and creative clarity in a world of constant...',
    image: '/article-workspace.jpg',
    alt: 'Minimalist workspace with desk lamp and laptop',
  },
  {
    id: 'rituals',
    category: 'LIFESTYLE',
    title: 'Morning Rituals for Intentional Days',
    description: 'The transformative power of slow mornings and the essential tools that help us ground ourselves...',
    image: '/article-textiles.jpg',
    alt: 'Morning rituals and natural textiles',
  },
  {
    id: 'textures',
    category: 'DESIGN',
    title: 'The Longevity of Natural Textures',
    description: 'Exploring why organic materials like clay, linen, and stone continue to define timeless luxury in ...',
    image: '/article-ceramics.jpg',
    alt: 'Natural ceramic textures and materials',
  },
];

export function JournalArticles() {
  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4 tracking-wide">
          The Journal
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Reflections on the quiet beauty of essential living, slow rituals, and the intentional spaces we inhabit.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {ARTICLES.map((article) => (
          <article
            key={article.id}
            className="group cursor-pointer"
          >
            <div className="relative h-64 md:h-72 rounded-2xl overflow-hidden mb-6">
              <Image
                src={article.image}
                alt={article.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="space-y-3">
              <p className="text-xs font-semibold tracking-widest text-accent">
                {article.category}
              </p>
              <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground group-hover:text-accent transition-colors tracking-wide">
                {article.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {article.description}
              </p>
              <button className="text-xs font-semibold tracking-widest text-foreground hover:text-accent transition-colors pt-4">
                READ MORE
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

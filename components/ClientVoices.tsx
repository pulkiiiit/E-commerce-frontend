'use client'

import { Star } from 'lucide-react'

interface Testimonial {
  id: string
  name: string
  title: string
  location: string
  quote: string
  rating: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'sarah-jenkins',
    name: 'Sarah Jenkins',
    title: 'Interior Designer',
    location: 'London',
    quote: 'The quality is unparalleled. I\'ve completely transformed my workspace with Luxe pieces, and the clarity it brings to my day is incredible.',
    rating: 5,
  },
  {
    id: 'marcus-chen',
    name: 'Marcus Chen',
    title: 'Architect',
    location: 'Tokyo',
    quote: 'Minimalism isn\'t about having nothing, it\'s about having the right things. This brand understands that perfectly. Beautiful craft.',
    rating: 5,
  },
  {
    id: 'elena-rossi',
    name: 'Elena Rossi',
    title: 'Creative Director',
    location: 'Milan',
    quote: 'Sustainability and aesthetics rarely meet so seamlessly. The linen pieces are my absolute favorite. Soft, durable, and honest.',
    rating: 5,
  },
]

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Star Rating */}
      <div className="flex gap-1 mb-6 justify-center">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={24} className="fill-accent text-accent" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground italic mb-8 max-w-sm leading-relaxed text-base">
        "{testimonial.quote}"
      </p>

      {/* Client Info */}
      <div>
        <p className="font-serif font-semibold text-foreground tracking-wide text-sm uppercase">
          {testimonial.name}
        </p>
        <p className="text-muted-foreground text-xs tracking-wide mt-1">
          {testimonial.title}, {testimonial.location}
        </p>
      </div>
    </div>
  )
}

export function ClientVoices() {
  return (
    <section className="w-full py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-6 tracking-wide">
            Client Voices
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover how our pieces are redefining living spaces around the world.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

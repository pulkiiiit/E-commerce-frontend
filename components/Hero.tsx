'use client'

import Image from 'next/image'

export function Hero() {
  return (
    <main className="pt-20">
      <div className="relative w-screen left-1/2 -translate-x-1/2 h-[600px] overflow-hidden" style={{ maxWidth: '100vw' }}>
        {/* Background Image */}
        <Image
          src="/couch.jpg"
          alt="Modern furniture collection"
          fill
          className="object-cover"
          priority
        />

        {/* Plant on the right */}
        <div className="absolute right-0 bottom-0 w-1/4 h-2/3">
          <Image
            src="/plant.jpg"
            alt="Potted plant"
            fill
            className="object-cover object-left"
            priority
          />
        </div>

        {/* Gradient Overlay for contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-700/70 via-amber-600/60 to-transparent"></div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center max-w-2xl px-6 mx-auto">
          <div className="mb-6 tracking-widest text-sm text-white font-semibold">
            SS24 COLLECTION
          </div>

          <h1 className="text-6xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight tracking-wide">
            The Art of Essentialism
          </h1>

          <p className="text-lg text-white mb-12 max-w-lg mx-auto leading-relaxed">
            Meticulously crafted objects designed to bring harmony and purpose to your daily rituals.
          </p>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button className="bg-white text-foreground px-8 py-3 rounded-full font-semibold text-sm hover:bg-accent hover:text-background transition-colors tracking-wide">
              SHOP COLLECTION
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-sm hover:bg-accent hover:text-background hover:border-accent transition-colors tracking-wide">
              OUR STORY
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}

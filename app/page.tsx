'use client'

import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { CuratedLiving } from '@/components/CuratedLiving'
import { TrendingNow } from '@/components/TrendingNow'
import { Banner } from '@/components/Banner'
import { ClientVoices } from '@/components/ClientVoices'
import { LatestAdditions } from '@/components/LatestAdditions'
import { Instructions } from '@/components/Instructions'
import { JournalNewsletter } from '@/components/JournalNewsletter'
import { JournalArticles } from '@/components/JournalArticles'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <Hero />

      <CuratedLiving />
      <TrendingNow />
      <Banner
        title="Crafted for the Modern Home"
        subtitle="Experience the perfect balance of form and function with our thoughtfully designed collection that transforms everyday spaces into extraordinary moments."
        image="/banner.jpg"
        alt="Minimalist interior design with natural light"
        ctaText="DISCOVER MORE"
        ctaLink="#"
      />
      <ClientVoices />
      <LatestAdditions />
      <Instructions />
      <JournalNewsletter />
      <JournalArticles />
      <Footer />
    </div>
  )
}

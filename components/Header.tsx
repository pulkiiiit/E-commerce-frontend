'use client'

import Image from 'next/image'
import { ShoppingCart, User, Search } from 'lucide-react'

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-background z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Plouteón"
            width={48}
            height={48}
            className="h-12 w-auto"
          />
          <span className="text-2xl font-serif font-semibold tracking-wide text-foreground">Plouteón</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide">
            HOME
          </a>
          <a href="/collections" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide">
            COLLECTIONS
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide">
            NEW ARRIVALS
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide">
            BEST SELLERS
          </a>
          <a href="#" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide">
            JOURNAL
          </a>
          <a href="/dashboard" className="text-sm font-medium text-foreground hover:text-accent transition-colors tracking-wide">
            DASHBOARD
          </a>
        </nav>

        {/* Right Side Icons */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-muted rounded-full px-4 py-2 gap-2">
            <Search size={18} className="text-muted-foreground" />
            <input
              type="text"
              placeholder="Search products"
              className="bg-transparent outline-none text-sm text-foreground placeholder-muted-foreground w-40"
            />
          </div>
          <button className="text-foreground hover:text-accent transition-colors">
            <User size={20} />
          </button>
          <button className="relative text-foreground hover:text-accent transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-accent text-background text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
              0
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}

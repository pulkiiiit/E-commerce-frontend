'use client';

import Image from 'next/image';
import { Facebook, Share2, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Plouteón"
                width={48}
                height={48}
                className="h-12 w-auto"
              />
              <span className="text-xl font-serif font-bold tracking-wide text-foreground">Plouteón</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              The destination for modern minimalist essentials. We create and curate products that inspire a simpler, more meaningful life through pure design and ethical craftsmanship.
            </p>
            <div className="flex items-center gap-4">
              <button className="text-muted hover:text-accent transition-colors">
                <Facebook size={20} />
              </button>
              <button className="text-muted hover:text-accent transition-colors">
                <Share2 size={20} />
              </button>
              <button className="text-muted hover:text-accent transition-colors">
                <Mail size={20} />
              </button>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground mb-6">
              SHOP
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  All Collections
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Newest Releases
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Home Aesthetics
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Lifestyle Wear
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Tech & Audio
                </a>
              </li>
            </ul>
          </div>

          {/* Our Story */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground mb-6">
              OUR STORY
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  About the Brand
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Journal & Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Sustainability
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Collaborations
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Store Locator
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground mb-6">
              SUPPORT
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Care Instructions
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Shipping Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  Gift Cards
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Visit Us */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest text-foreground mb-6">
              VISIT US
            </h4>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground leading-relaxed">
                <p className="font-semibold text-foreground">Concept Store</p>
                <p>142 Minimalist Way</p>
                <p>San Francisco, CA 94103</p>
              </div>
              <a href="#" className="inline-block text-sm font-semibold text-accent hover:text-accent transition-colors">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border bg-muted">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-widest">
            © 2024 PLOUTEÓN. ALL RIGHTS RESERVED.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              TERMS OF SERVICE
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              PRIVACY POLICY
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-accent transition-colors">
              COOKIES
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

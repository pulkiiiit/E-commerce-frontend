'use client';

import { Leaf, Award, Truck, Shield } from 'lucide-react';

interface InstructionItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const INSTRUCTIONS: InstructionItem[] = [
  {
    id: 'sustainable',
    icon: <Leaf size={32} className="text-accent" />,
    title: 'SUSTAINABLY SOURCED',
    description: 'Consciously chosen materials that respect our planet and its resources.',
  },
  {
    id: 'quality',
    icon: <Award size={32} className="text-accent" />,
    title: 'PREMIUM QUALITY',
    description: 'Exquisite craftsmanship ensuring every piece lasts for generations to come.',
  },
  {
    id: 'shipping',
    icon: <Truck size={32} className="text-accent" />,
    title: 'FAST SHIPPING',
    description: 'Complimentary express delivery on all orders to your doorstep, worldwide.',
  },
  {
    id: 'secure',
    icon: <Shield size={32} className="text-accent" />,
    title: 'SECURE CHECKOUT',
    description: 'Industry-leading encryption protecting your data and peace of mind.',
  },
];

export function Instructions() {
  return (
    <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {INSTRUCTIONS.map((item) => (
          <div key={item.id} className="flex flex-col items-center text-center">
            <div className="mb-6 flex items-center justify-center">
              {item.icon}
            </div>
            <h3 className="text-sm font-semibold tracking-widest text-foreground mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

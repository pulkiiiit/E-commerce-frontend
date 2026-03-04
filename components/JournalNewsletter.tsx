'use client';

import { useState } from 'react';

export function JournalNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter signup
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="max-w-2xl mx-auto bg-primary rounded-3xl p-12 md:p-16 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-foreground mb-6 tracking-wide">
          Stay Mindful
        </h2>
        
        <p className="text-muted mb-12 leading-relaxed">
          Join our inner circle for early access to new releases, designer interviews, and curated minimalist living guides.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 justify-center mb-6">
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-6 py-3 rounded-full bg-secondary border border-secondary text-primary-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors w-full md:w-80"
          />
          <button
            type="submit"
            className="px-8 py-3 rounded-full bg-primary-foreground text-primary font-semibold text-sm hover:bg-accent hover:text-background transition-colors whitespace-nowrap tracking-wide"
          >
            JOIN
          </button>
        </form>

        {submitted && (
          <p className="text-accent text-sm mb-4">
            Thank you for subscribing!
          </p>
        )}

        <p className="text-xs text-gray-500 tracking-widest">
          BY JOINING, YOU AGREE TO OUR PRIVACY POLICY
        </p>
      </div>
    </section>
  );
}

'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500 text-black font-bold text-lg">
                🎬
              </div>
              <span className="text-2xl font-bold text-white">ShofTV</span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-gray-300 hover:text-white transition">
                INFINITE
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                THEATERS
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                PRICING
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <button className="hidden md:block px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
                JOIN NOW
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden text-yellow-500"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <nav className="mt-4 flex flex-col gap-4 md:hidden border-t border-yellow-500/20 pt-4">
              <a href="#" className="text-gray-300 hover:text-white transition">
                INFINITE
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                THEATERS
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                PRICING
              </a>
              <button className="w-full px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
                JOIN NOW
              </button>
            </nav>
          )}
        </div>
      </header>

      {/* WeUnder Banner */}
      <div className="bg-yellow-500 text-black py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-3">
          <span className="text-sm sm:text-base font-bold">
            WE&apos;RE RAISING ON WEFUNDER! Movie Lovers, Creators, Investors - Own a piece of the entertainment revolution. Round closes Tues 3/3/2026 at 11:59p ET.
          </span>
          <button className="ml-auto hidden sm:block rounded-full bg-black px-4 py-1 text-xs font-bold text-yellow-500 hover:bg-gray-900 transition">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 py-20">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-transparent" />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <div className="mb-6 inline-block rounded-full border border-yellow-500/30 bg-yellow-500/10 px-4 py-2">
            <span className="text-yellow-400 text-sm font-semibold">THE FUTURE OF CINEMA</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 text-balance">
            Infinite <span className="text-white">Movies.</span>
            <br />
            <span className="text-white">One Subscription.</span>
          </h1>

          <p className="text-lg sm:text-xl text-gray-300 mb-12 text-balance">
            Watch a new movie every day at any theater near you. No blackout dates, no hidden fees. Just pure cinematic immersion.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg rounded-full hover:bg-yellow-400 transition transform hover:scale-105">
              START FREE TRIAL
            </button>
            <button className="px-8 py-4 border-2 border-yellow-500 text-yellow-500 font-bold text-lg rounded-full hover:bg-yellow-500/10 transition">
              FIND THEATERS
            </button>
          </div>
        </div>
      </section>

      {/* Studio Partners */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-12">Official Studio Partners</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center">
            {['Warner Bros.', 'Universal', 'Paramount', 'Sony'].map((studio) => (
              <div
                key={studio}
                className="h-12 bg-gray-800 rounded flex items-center justify-center text-gray-400 font-semibold"
              >
                {studio}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Why Choose ShofTV</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'All New Releases',
                description: 'Every blockbuster hits our platform day and date with theatrical release',
                icon: '🎞️',
              },
              {
                title: 'Premium Experience',
                description: 'IMAX, 4K, Dolby Atmos - experience cinema the way it was meant to be seen',
                icon: '🎬',
              },
              {
                title: 'No Blackout Dates',
                description: 'Watch whenever you want, wherever you want - total freedom',
                icon: '📅',
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-yellow-500/5 border border-yellow-500/20 p-8 hover:bg-yellow-500/10 transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">Simple Pricing</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter', price: '$9.99', features: ['1 Concurrent Stream', 'Full Library Access', 'Theater Locations'] },
              { name: 'Premium', price: '$19.99', features: ['4 Concurrent Streams', 'Full Library Access', 'Theater Locations', '4K Quality'], highlighted: true },
              { name: 'Sports+', price: '$24.99', features: ['Unlimited Streams', 'Full Library', 'Live Sports', 'Theater Access'] },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`rounded-xl p-8 border transition ${
                  plan.highlighted
                    ? 'bg-yellow-500/10 border-yellow-500'
                    : 'bg-gray-900/50 border-gray-700 hover:border-yellow-500/50'
                }`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-gray-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-300">
                      <span className="text-yellow-500">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-bold transition ${
                  plan.highlighted
                    ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                    : 'border border-yellow-500 text-yellow-500 hover:bg-yellow-500/10'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/20 bg-black py-12 px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500 text-black font-bold">
                  🎬
                </div>
                <span className="text-lg font-bold">ShofTV</span>
              </div>
              <p className="text-gray-400 text-sm">Your ultimate destination for curated cinema.</p>
            </div>
            {[
              { title: 'Product', links: ['Features', 'Pricing', 'Security'] },
              { title: 'Company', links: ['About', 'Blog', 'Careers'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Contact'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-bold mb-4">{col.title}</h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 ShofTV. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

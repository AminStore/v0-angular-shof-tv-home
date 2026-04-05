'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 border-b border-yellow-500/20 bg-black/80 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-yellow-500 text-black font-bold text-lg">
              🎬
            </div>
            <span className="text-2xl font-bold text-white">ShofTV</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className={`transition ${isActive('/') ? 'text-yellow-500 font-bold' : 'text-gray-300 hover:text-white'}`}>
              HOME
            </Link>
            <Link href="/about" className={`transition ${isActive('/about') ? 'text-yellow-500 font-bold' : 'text-gray-300 hover:text-white'}`}>
              ABOUT US
            </Link>
            <Link href="/contact" className={`transition ${isActive('/contact') ? 'text-yellow-500 font-bold' : 'text-gray-300 hover:text-white'}`}>
              CONTACT US
            </Link>
            <Link href="/help" className={`transition ${isActive('/help') ? 'text-yellow-500 font-bold' : 'text-gray-300 hover:text-white'}`}>
              HELP
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link href="/sign-in" className="hidden md:block px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
              SIGN IN
            </Link>
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
            <Link href="/" className="text-gray-300 hover:text-white transition">
              HOME
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">
              ABOUT US
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-white transition">
              CONTACT US
            </Link>
            <Link href="/help" className="text-gray-300 hover:text-white transition">
              HELP
            </Link>
            <Link href="/sign-in" className="w-full px-6 py-2 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition text-center">
              SIGN IN
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}

'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import Link from 'next/link';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Sign in successful!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black flex flex-col">
      <Navbar />

      <div className="flex-1 flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8">Sign In</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
              />
            </div>

            <button type="submit" className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition mt-6">
              Sign In
            </button>
          </form>

          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-yellow-500 hover:text-yellow-400 transition text-sm">
              Forgot password?
            </Link>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-400">Don&apos;t have an account?</p>
            <button className="text-yellow-500 hover:text-yellow-400 transition font-bold mt-2">
              Create Account
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Concessions() {
  const [selectedCategory, setSelectedCategory] = useState('popcorn');
  const [cart, setCart] = useState([
    { name: 'Large Popcorn', price: 8, qty: 1 },
    { name: 'Large Soda', price: 5, qty: 1 },
  ]);

  const products = {
    popcorn: [
      { name: 'Large Popcorn', price: 8, desc: 'Classic buttery goodness, big enough to share.' },
      { name: 'Medium Popcorn', price: 6, desc: 'Perfectly portioned for one hungry moviegoer.' },
      { name: 'Small Popcorn', price: 4.5, desc: 'A quick snack to satisfy the craving.' },
      { name: 'Caramel Corn', price: 7.5, desc: 'Sweet and crunchy caramel-coated delight.' },
    ],
    drinks: [
      { name: 'Large Soda', price: 5, desc: 'Refreshing carbonated beverage, ice cold.' },
      { name: 'Large Water', price: 3, desc: 'Pure, crisp hydration for the movie.' },
      { name: 'Large Slushie', price: 4, desc: 'Frozen fruity goodness in every sip.' },
      { name: 'Coffee', price: 4.5, desc: 'Fresh brewed hot coffee for your cinema.' },
    ],
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

      {/* Hero */}
      <section className="py-16 px-4 bg-yellow-500/5">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Pre-order Concessions</h1>
          <p className="text-xl text-gray-300">Skip the line and enjoy your movie. Have it ready when you arrive.</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Categories and Products */}
          <div className="md:col-span-2">
            {/* Category Tabs */}
            <div className="flex gap-4 mb-8 border-b border-gray-800">
              {['popcorn', 'drinks'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`py-4 px-6 font-bold border-b-2 transition ${
                    selectedCategory === cat
                      ? 'border-yellow-500 text-yellow-500'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  {cat === 'popcorn' ? '🍿 Popcorn' : '🥤 Drinks'}
                </button>
              ))}
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {products[selectedCategory as keyof typeof products].map((product, i) => (
                <div key={i} className="rounded-lg overflow-hidden bg-gray-900 hover:bg-yellow-500/5 transition">
                  <div className="h-48 bg-gray-800 flex items-center justify-center text-5xl">
                    {selectedCategory === 'popcorn' ? '🍿' : '🥤'}
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-2">{product.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{product.desc}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-yellow-500 font-bold text-lg">${product.price.toFixed(2)}</span>
                      <button className="px-4 py-2 bg-yellow-500 text-black font-bold rounded hover:bg-yellow-400 transition">
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Sidebar */}
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 h-fit">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              🛍️ Your Order
            </h2>

            <div className="space-y-4 mb-6">
              {cart.map((item, i) => (
                <div key={i} className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <div>
                    <p className="font-semibold">{item.name}</p>
                    <p className="text-xs text-gray-400">Qty: {item.qty}</p>
                  </div>
                  <span className="font-bold text-yellow-500">${(item.price * item.qty).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="space-y-2 mb-6 pt-4 border-t border-gray-700">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400 text-sm">
                <span>Tax</span>
                <span>${(cartTotal * 0.08).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xl font-bold text-yellow-500 pt-2 border-t border-gray-700">
                <span>Total</span>
                <span>${(cartTotal * 1.08).toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg hover:bg-yellow-400 transition">
              Checkout Concessions
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

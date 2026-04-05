'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function GiftCards() {
  const [amount, setAmount] = useState(50);
  const [cardType, setCardType] = useState('digital');
  const [recipientName, setRecipientName] = useState('');
  const [recipientEmail, setRecipientEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

      {/* Hero */}
      <section className="py-16 px-4 bg-yellow-500/5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-4">Give the Gift of <span className="text-yellow-500">Movies</span></h1>
          <p className="text-xl text-gray-300">ShofTV Gift Cards for the ultimate cinematic subscription experience. Choose digital delivery for instant access or physical for a premium unboxing.</p>
        </div>
      </section>

      {/* Gift Card Builder */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Amount Selection */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Select Gift Card Amount</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[25, 50, 100, 250].map((val) => (
                <button
                  key={val}
                  onClick={() => setAmount(val)}
                  className={`py-4 rounded-lg font-bold text-lg transition ${
                    amount === val
                      ? 'bg-yellow-500 text-black border-2 border-yellow-500'
                      : 'bg-gray-900 text-white border-2 border-gray-700 hover:border-yellow-500'
                  }`}
                >
                  ${val}
                </button>
              ))}
            </div>
          </div>

          {/* Card Type */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Choose Card Type</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { id: 'digital', title: 'Digital Card', desc: 'Delivered instantly via email' },
                { id: 'physical', title: 'Physical Card', desc: 'Mailed in premium packaging' },
              ].map((type) => (
                <button
                  key={type.id}
                  onClick={() => setCardType(type.id)}
                  className={`p-6 rounded-lg border-2 transition text-left ${
                    cardType === type.id
                      ? 'bg-yellow-500/10 border-yellow-500'
                      : 'bg-black border-gray-700 hover:border-yellow-500'
                  }`}
                >
                  <h3 className="font-bold text-lg mb-2">{type.title}</h3>
                  <p className="text-gray-400">{type.desc}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Personalization */}
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Personalize Your Gift</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-semibold mb-2">Recipient&apos;s Name</label>
                <input
                  type="text"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Recipient&apos;s Email</label>
                <input
                  type="email"
                  value={recipientEmail}
                  onChange={(e) => setRecipientEmail(e.target.value)}
                  placeholder="john@example.com"
                  className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Personal Message (Optional)</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Hope you enjoy the movies!"
                  rows={4}
                  className="w-full bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6 text-lg">
              <div className="flex justify-between">
                <span>Gift Card Amount:</span>
                <span className="font-bold">${amount}.00</span>
              </div>
              <div className="flex justify-between">
                <span>Card Type:</span>
                <span className="font-bold capitalize">{cardType} Delivery</span>
              </div>
              <div className="border-t border-yellow-500/20 pt-3 flex justify-between text-xl font-bold">
                <span>Total:</span>
                <span className="text-yellow-500">${amount}.00</span>
              </div>
            </div>

            <button className="w-full bg-yellow-500 text-black font-bold py-4 rounded-lg hover:bg-yellow-400 transition text-lg">
              Purchase Gift Card
            </button>

            <p className="text-xs text-gray-400 text-center mt-4">
              By purchasing, you agree to the ShofTV Gift Card Terms and Conditions. Gift cards are non-refundable.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

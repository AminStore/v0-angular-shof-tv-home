'use client';

import { useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { ChevronDown, MessageSquare } from 'lucide-react';

export default function Help() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const faqs = [
    { q: 'How do I cancel my subscription?', a: 'You can cancel anytime from your account settings. No questions asked.' },
    { q: 'Can I watch offline on my mobile device?', a: 'Yes! Download movies with Premium tier and watch anywhere.' },
    { q: 'How do I use my theater tickets?', a: 'Your tickets are digital. Just show them at the theater entrance.' },
    { q: 'Why am I having playback issues?', a: 'Check your internet connection or contact our support team.' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

      {/* Hero with Search */}
      <section className="py-16 px-4 bg-yellow-500/5">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-black mb-8">How can we help you?</h1>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Search for answers, articles, or topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 bg-black border border-yellow-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
            />
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Help Categories</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: '💳', title: 'Subscription & Billing', desc: 'Manage plans, update payment methods, and view invoices.' },
              { icon: '🎬', title: 'Theaters', desc: 'Find locations, book tickets, and theater amenities.' },
              { icon: '🔧', title: 'App Support', desc: 'Troubleshooting, device compatibility, and offline viewing.' },
              { icon: '⚙️', title: 'Account Settings', desc: 'Profile updates, password resets, and family sharing.' },
            ].map((cat, i) => (
              <div key={i} className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-6 hover:bg-yellow-500/10 transition cursor-pointer">
                <div className="text-4xl mb-4">{cat.icon}</div>
                <h3 className="font-bold text-lg mb-2">{cat.title}</h3>
                <p className="text-sm text-gray-400">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-yellow-500/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-yellow-500/20 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 bg-black hover:bg-yellow-500/5 transition"
                >
                  <span className="font-bold text-left">{faq.q}</span>
                  <ChevronDown className={`transform transition ${expandedFaq === i ? 'rotate-180' : ''}`} size={20} />
                </button>
                {expandedFaq === i && (
                  <div className="p-6 border-t border-yellow-500/20 text-gray-300 bg-yellow-500/2.5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-gray-300 mb-8">Our support team is available 24/7 to assist you.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 border border-yellow-500 text-yellow-500 font-bold rounded-lg hover:bg-yellow-500/10 transition flex items-center justify-center gap-2">
              <MessageSquare size={20} /> Live Chat
            </button>
            <button className="px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

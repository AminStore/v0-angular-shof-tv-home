import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: 9.99,
      features: ['1 Concurrent Stream', 'Full Library Access', 'Theater Locations', 'Email Support'],
    },
    {
      name: 'Premium',
      price: 19.99,
      features: ['4 Concurrent Streams', 'Full Library Access', '4K Quality', 'Theater Locations', 'Priority Support', 'Offline Download'],
      highlighted: true,
    },
    {
      name: 'Sports+',
      price: 24.99,
      features: ['Unlimited Streams', 'Full Library Access', 'Live Sports', '4K Quality', 'Theater Access', '24/7 VIP Support'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

      {/* Hero */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-black mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl text-gray-300">Choose the plan that&apos;s right for you. No hidden fees, cancel anytime.</p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`rounded-xl p-8 transition ${
                plan.highlighted
                  ? 'bg-yellow-500/10 border-2 border-yellow-500 transform md:scale-105'
                  : 'bg-yellow-500/5 border border-yellow-500/20 hover:border-yellow-500'
              }`}
            >
              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-8">
                <span className="text-5xl font-black">${plan.price}</span>
                <span className="text-gray-400">/month</span>
              </div>

              <ul className="space-y-4 mb-8 text-left">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-3">
                    <span className="text-yellow-500 font-bold text-lg">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 rounded-lg font-bold transition ${
                plan.highlighted
                  ? 'bg-yellow-500 text-black hover:bg-yellow-400'
                  : 'border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500/10'
              }`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 px-4 bg-yellow-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Compare Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-yellow-500/20">
                  <th className="text-left py-4 px-4 font-bold">Feature</th>
                  <th className="text-center py-4 px-4 font-bold">Starter</th>
                  <th className="text-center py-4 px-4 font-bold text-yellow-500">Premium</th>
                  <th className="text-center py-4 px-4 font-bold">Sports+</th>
                </tr>
              </thead>
              <tbody>
                {['Streaming Quality', 'Concurrent Streams', '4K Available', 'Offline Download', 'Live Sports', 'Theater Access'].map((feature, i) => (
                  <tr key={i} className="border-b border-yellow-500/10">
                    <td className="py-4 px-4">{feature}</td>
                    <td className="text-center py-4 px-4">{i % 2 === 0 ? '✓' : '-'}</td>
                    <td className="text-center py-4 px-4 text-yellow-500">✓</td>
                    <td className="text-center py-4 px-4">✓</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Pricing FAQs</h2>
          <div className="space-y-6">
            {[
              { q: 'Can I change my plan anytime?', a: 'Yes! Upgrade or downgrade your plan any time. Changes take effect on your next billing cycle.' },
              { q: 'Is there a free trial?', a: 'Yes, all new users get a 14-day free trial. No credit card required to start.' },
              { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and Apple Pay.' },
              { q: 'Can I cancel anytime?', a: 'Absolutely. Cancel whenever you want, no questions asked. No long-term contracts.' },
            ].map((faq, i) => (
              <div key={i} className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-6">
                <h3 className="font-bold text-lg mb-3">{faq.q}</h3>
                <p className="text-gray-300">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

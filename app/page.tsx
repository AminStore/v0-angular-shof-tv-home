import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

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

      <Footer />
    </div>
  );
}

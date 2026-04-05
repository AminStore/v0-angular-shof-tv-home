import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-black mb-6">The Future of Cinema</h1>
        <p className="text-xl text-gray-300">Unleashing the magic of the silver screen directly to your living room. Experience stories that move you.</p>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 bg-yellow-500/5">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="text-5xl">👁️</div>
          </div>
          <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
          <p className="text-lg text-gray-300 text-center mb-8">
            To revolutionize the way you experience cinema by providing unparalleled access to the greatest films ever made, meticulously curated and delivered right at your fingertips.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Our Journey</h2>
          <div className="space-y-8">
            {[
              { year: '2018', title: 'The Inception', desc: 'A group of filmmakers realized that finding classic and indie films was too hard. The idea for ShofTV was born in a small garage.' },
              { year: '2020', title: 'First Beta Launch', desc: 'Launched to a closed group of 1,000 users. The feedback was overwhelmingly positive, validating our mission to curate the best.' },
              { year: '2022', title: 'Going Global', desc: 'Expanded our streaming rights internationally, bringing diverse cinema to over 50 countries worldwide.' },
              { year: '2024', title: 'The Future is Here', desc: 'Introducing 4K streaming of classic films and exclusive partnerships with independent studios.' },
            ].map((item, i) => (
              <div key={i} className="flex gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-yellow-500 mb-2" />
                  <div className={`w-1 ${i === 3 ? 'h-0' : 'h-24'} bg-yellow-500/30`} />
                </div>
                <div className="pb-8">
                  <div className="text-yellow-500 font-bold text-lg mb-2">{item.year}</div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-yellow-500/5">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Meet the Visionaries</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { name: 'Alex Vance', role: 'Founder & CEO' },
              { name: 'Sarah Jenkins', role: 'Chief Technology Officer' },
              { name: 'David Chen', role: 'Head of Curation' },
              { name: 'Maya Patel', role: 'Lead Designer' },
            ].map((member, i) => (
              <div key={i} className="text-center">
                <div className="w-full aspect-square bg-gray-800 rounded-lg mb-4 flex items-center justify-center text-4xl">👤</div>
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

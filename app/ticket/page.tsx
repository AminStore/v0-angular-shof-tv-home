import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';

export default function Ticket() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

      {/* Success Message */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <div className="text-6xl mb-6 animate-pulse">✅</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">Success!</h1>
          <p className="text-xl text-gray-300 mb-12">Your tickets for Dune: Part Two have been booked successfully.<br/>Present this digital ticket at the theater.</p>
        </div>
      </section>

      {/* Ticket Card */}
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="border-2 border-yellow-500 rounded-2xl overflow-hidden bg-gradient-to-r from-gray-900 via-black to-gray-900">
            {/* Movie Image */}
            <div className="h-48 bg-gray-800 relative">
              <div className="absolute top-6 left-6 bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                ADMIT 1
              </div>
            </div>

            {/* Ticket Details */}
            <div className="p-8 space-y-6">
              <div>
                <h2 className="text-3xl font-black">Dune: Part Two</h2>
                <p className="text-gray-400">IMAX 70mm Experience</p>
              </div>

              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-gray-500 text-sm uppercase font-semibold">Theater</p>
                  <p className="text-lg font-bold">AMC Lincoln Square 13</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase font-semibold">Date & Time</p>
                  <p className="text-lg font-bold text-yellow-500">Oct 24 • 7:30 PM</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-8 border-t border-gray-700 pt-6">
                <div>
                  <p className="text-gray-500 text-sm uppercase font-semibold">Seat Info</p>
                  <p className="text-lg font-bold">Row H, Seat 12</p>
                </div>
                <div>
                  <p className="text-gray-500 text-sm uppercase font-semibold">Order #</p>
                  <p className="text-lg font-bold">#STV-99281A</p>
                </div>
              </div>

              {/* QR Code */}
              <div className="flex flex-col items-end">
                <p className="text-gray-500 text-xs uppercase font-semibold mb-3">SCAN AT ENTRANCE</p>
                <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-gray-400 text-sm font-mono">SCAN ME</div>
                    <div className="text-2xl mt-2">📱</div>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mt-2 text-right">Screenshots will not be accepted.<br/>Present live ticket.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition">
              Download PDF
            </button>
            <button className="px-8 py-3 border-2 border-gray-600 text-white font-bold rounded-lg hover:border-yellow-500 transition">
              Back to Home
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

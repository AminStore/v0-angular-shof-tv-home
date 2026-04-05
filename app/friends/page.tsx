import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Heart, MessageCircle } from 'lucide-react';

export default function Friends() {
  const friends = [
    { name: 'Marcus Chen', status: 'Watching Dune: Part Two', online: true },
    { name: 'Sarah Jenkins', status: 'Online', online: true },
    { name: 'David Kim', status: 'Last seen 2h ago', online: false },
    { name: 'Elena Rodriguez', status: 'Last seen yesterday', online: false },
  ];

  const activity = [
    { user: 'Marcus Chen', action: 'watched', movie: 'Oppenheimer', rating: 5, time: '2h ago' },
    { user: 'Sarah Jenkins', action: 'added to Watchlist', movie: 'The Matrix', time: '5h ago' },
    { user: 'David Kim', action: 'watched', movie: 'Blade Runner 2049', rating: 4, time: '1d ago' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-black to-black">
      <Navbar />

      {/* Header */}
      <section className="py-16 px-4 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <h1 className="text-5xl md:text-6xl font-black mb-2">Friends</h1>
            <p className="text-gray-300">See who&apos;s online and what they&apos;re watching</p>
          </div>
          <input
            type="text"
            placeholder="Find Friends"
            className="w-full md:w-64 bg-black border border-yellow-500/30 rounded-lg px-4 py-2 text-white placeholder-gray-500"
          />
          <button className="bg-yellow-500 text-black font-bold px-6 py-2 rounded-lg hover:bg-yellow-400 transition whitespace-nowrap">
            Add Friend
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Friends List */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-bold mb-6">Friends</h2>
            <div className="space-y-4">
              {friends.map((friend, i) => (
                <div key={i} className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-4 hover:bg-yellow-500/10 transition cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-full bg-gray-700 flex items-center justify-center text-xl">👤</div>
                      {friend.online && <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-black" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-bold">{friend.name}</p>
                      <p className="text-sm text-gray-400 truncate">{friend.status}</p>
                    </div>
                  </div>
                  <button className="mt-3 w-full px-3 py-2 bg-black border border-yellow-500/30 rounded text-sm font-semibold hover:border-yellow-500 transition">
                    Profile
                  </button>
                </div>
              ))}
              <button className="w-full py-3 border-2 border-dashed border-yellow-500/30 rounded-lg text-gray-400 hover:text-yellow-500 hover:border-yellow-500 transition">
                View All Friends
              </button>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Recent Activity</h2>
            <div className="space-y-6">
              {activity.map((item, i) => (
                <div key={i} className="bg-yellow-500/5 border border-yellow-500/20 rounded-lg p-6 hover:bg-yellow-500/10 transition">
                  <div className="flex gap-4">
                    <div className="w-20 h-28 bg-gray-800 rounded flex items-center justify-center text-3xl flex-shrink-0">
                      🎬
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-400 text-sm mb-2">
                        <span className="font-bold text-white">{item.user}</span> {item.action}{' '}
                        <span className="text-yellow-500 font-bold">{item.movie}</span>
                      </p>
                      {item.rating && (
                        <div className="flex gap-1 mb-3">
                          {[...Array(item.rating)].map((_, i) => (
                            <span key={i} className="text-yellow-500">⭐</span>
                          ))}
                          {[...Array(5 - item.rating)].map((_, i) => (
                            <span key={i} className="text-gray-600">⭐</span>
                          ))}
                        </div>
                      )}
                      <p className="text-xs text-gray-500">{item.time}</p>
                      <div className="flex gap-2 mt-4">
                        <button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-yellow-500 transition">
                          <Heart size={16} /> 12
                        </button>
                        <button className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-gray-300 hover:text-yellow-500 transition">
                          <MessageCircle size={16} /> 3 Comments
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <button className="w-full py-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg text-gray-300 hover:text-yellow-500 hover:bg-yellow-500/10 transition font-semibold">
                Load More Activity
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

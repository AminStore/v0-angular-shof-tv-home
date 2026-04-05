import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-yellow-500/20 bg-black py-12 px-4">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-500 text-black font-bold">
                🎬
              </div>
              <span className="text-lg font-bold">ShofTV</span>
            </div>
            <p className="text-gray-400 text-sm">Your ultimate destination for curated cinema. Experience the future of streaming.</p>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Product</h4>
            <ul className="space-y-2">
              <li><Link href="/pricing" className="text-gray-400 hover:text-yellow-500 transition text-sm">Pricing</Link></li>
              <li><Link href="/gift-cards" className="text-gray-400 hover:text-yellow-500 transition text-sm">Gift Cards</Link></li>
              <li><Link href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">Features</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-yellow-500 transition text-sm">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-yellow-500 transition text-sm">Contact</Link></li>
              <li><Link href="/help" className="text-gray-400 hover:text-yellow-500 transition text-sm">Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">Terms of Service</a></li>
              <li><Link href="#" className="text-gray-400 hover:text-yellow-500 transition text-sm">Cookie Preferences</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 ShofTV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

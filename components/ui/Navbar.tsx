import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-black to-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          <span className="text-green-400">market</span>Hub
        </Link>

        {/* Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium">

          <Link
            href="/"
            className="hover:text-green-400 transition duration-200"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-green-400 transition duration-200"
          >
            Products
          </Link>

          <Link
            href="/stores"
            className="hover:text-green-400 transition duration-200"
          >
            Stores
          </Link>

          <Link
            href="/about"
            className="hover:text-green-400 transition duration-200"
          >
            About
          </Link>

          {/* CTA Button */}
          <button className="bg-green-500 px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Sell on marketHub
          </button>
        </div>
      </div>
    </nav>
  )
}
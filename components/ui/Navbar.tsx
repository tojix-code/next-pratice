import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="bg-black text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-green-400">
          marketHub
        </h1>

        {/* Navigation Links */}
        <div className="flex gap-6 text-sm font-medium">
          <Link href="/" className="hover:text-green-400 transition">
            Home
          </Link>

          <Link href="/products" className="hover:text-green-400 transition">
            Products
          </Link>

          <Link href="/stores" className="hover:text-green-400 transition">
            Stores
          </Link>

          <Link href="/about" className="hover:text-green-400 transition">
            About
          </Link>
        </div>

      </div>
    </nav>
  )
}
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-12">

      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">
            <span className="text-green-400">market</span>Hub
          </h2>
          <p className="text-sm mt-3 text-gray-400">
            A multi-vendor e-commerce platform where multiple sellers
            can sell products and customers can shop from one place.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">Products</li>
            <li className="hover:text-green-400 cursor-pointer">Stores</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">
            Contact Us
          </h3>

          <p className="text-sm">📧 support@markethub.com</p>
          <p className="text-sm">📞 +91 9876543210</p>

          <div className="flex gap-3 mt-4">
            <span className="bg-gray-700 px-3 py-1 rounded hover:bg-green-500 cursor-pointer">
              Facebook
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded hover:bg-green-500 cursor-pointer">
              Instagram
            </span>
            <span className="bg-gray-700 px-3 py-1 rounded hover:bg-green-500 cursor-pointer">
              Twitter
            </span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 text-center py-4 text-sm text-gray-400">
        © {new Date().getFullYear()} marketHub. All rights reserved.
      </div>

    </footer>
  )
}
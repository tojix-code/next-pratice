export default function StoresPage() {
  const stores = [
    { id: 1, name: "Tech Store", location: "Bangalore" },
    { id: 2, name: "Fashion Hub", location: "Mumbai" },
    { id: 3, name: "Gadget World", location: "Hyderabad" },
    { id: 4, name: "Home Essentials", location: "Delhi" }
  ]

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Stores</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <div
            key={store.id}
            className="border rounded-lg p-5 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold">{store.name}</h2>
            <p className="text-gray-500 mt-2">{store.location}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
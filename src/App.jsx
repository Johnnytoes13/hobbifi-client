import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">HobbiFi</h1>
        <ul className="flex gap-6 text-lg">
          <li><a href="#" className="hover:text-blue-600">Marketplace</a></li>
          <li><a href="#" className="hover:text-blue-600">Vault</a></li>
          <li><a href="#" className="hover:text-blue-600">Charts</a></li>
          <li><a href="#" className="hover:text-blue-600">Login</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold mb-4">Welcome to HobbiFi</h2>
        <p className="text-lg max-w-2xl mx-auto mb-6">
          A modern platform for buying, selling, and tracking sports cards. Reduced fees. Collector tools. Trusted community.
        </p>
        <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
          Browse Marketplace
        </button>
      </section>

      {/* Placeholder Sections */}
      <section className="bg-white p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">📦 Vault</h3>
          <p>Organize, store, and track your personal card collection.</p>
        </div>
        <div className="p-6 border rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">📊 Charts</h3>
          <p>Analyze card value trends over time using candlestick data.</p>
        </div>
        <div className="p-6 border rounded-xl shadow">
          <h3 className="text-xl font-bold mb-2">💬 Ratings</h3>
          <p>Seller and buyer scores using integrated eBay + HobbiFi reviews.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 mt-10 pb-6">
        &copy; {new Date().getFullYear()} HobbiFi. All rights reserved.
      </footer>
    </div>
  );
}

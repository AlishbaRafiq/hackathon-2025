"use client";

import { useState } from "react";
import Link from "next/link";
import FilterBar from "./components/FilterBar";
import Pagination from "./components/Pagination";
import FeatureSection from "./components/FeatureSection";
const products = [
  { id: "sofa-1", name: "Asgaard Sofa", price: 250000, img: "/images/sofa1.jpg" },
  { id: "table-1", name: "Granite Dining Table", price: 25000, img: "/images/table1.jpg" },
  { id: "table-2", name: "Outdoor Bar Table", price: 25000, img: "/images/table2.jpg" },
  { id: "console-1", name: "Plain Console", price: 258200, img: "/images/console.jpg" },
  { id: "sofa-2", name: "Asgaard Sofa", price: 250000, img: "/images/sofa2.jpg" },
  { id: "sideboard-1", name: "Reclaimed Teak Sideboard", price: 20000, img: "/images/sideboard.jpg" },
  { id: "sofa-3", name: "Maya Sofa Three Seater", price: 115000, img: "/images/sofa3.jpg" },
  { id: "chair-1", name: "Bella Chair and Table", price: 100000, img: "/images/chair1.jpg" },
  { id: "coffee-1", name: "Kent Coffee Table", price: 225000, img: "/images/coffee1.jpg" },
  { id: "sidetable-1", name: "Granite Square Side Table", price: 258800, img: "/images/sidetable.jpg" },
  { id: "sofa-4", name: "Outdoor Sofa Set", price: 244000, img: "/images/sofa4.jpg" },
  { id: "coffee-2", name: "Round Coffee Table", price: 251000, img: "/images/coffee2.jpg" },
  { id: "table-3", name: "Outdoor Dining Set", price: 25000, img: "/images/table3.jpg" },
  { id: "sofa-5", name: "Asgaard Sofa", price: 25000, img: "/images/sofa5.jpg" },
  { id: "table-4", name: "Outdoor Dining Set", price: 25000, img: "/images/table4.jpg" },
  { id: "table-5", name: "Outdoor Dining Set", price: 25000, img: "/images/table5.jpg" }
];

export default function ShopPage() {
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [currentPage, setCurrentPage] = useState(1);
  const [resultsPerPage, setResultsPerPage] = useState(12);
  const [sortOrder, setSortOrder] = useState("default");

  // Sorting logic
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOrder === "low-to-high") return a.price - b.price;
    if (sortOrder === "high-to-low") return b.price - a.price;
    return 0;
  });

  // Pagination logic
  const indexOfLastProduct = currentPage * resultsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - resultsPerPage;
  const currentProducts = sortedProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <main className="container mx-auto p-6">
      {/* Filter Bar */}
      <FilterBar
        totalResults={filteredProducts.length}
        resultsPerPage={resultsPerPage}
        setResultsPerPage={setResultsPerPage}
        setSortOrder={setSortOrder}
      />

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {currentProducts.map((product) => (
          <Link key={product.id} href={`/shop/${product.id}`}>
            <div className="border p-4 rounded-lg cursor-pointer hover:shadow-md transition">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover rounded-md" />
              <h2 className="mt-4 text-lg font-semibold">{product.name}</h2>
              <p className="text-gray-600">Rs. {product.price.toLocaleString()}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-16">
        <Pagination
          totalProducts={filteredProducts.length}
          productsPerPage={resultsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>

      {/* Feature Section */}
      <div className="mt-16">
        <FeatureSection />
      </div>
    </main>
  );
}

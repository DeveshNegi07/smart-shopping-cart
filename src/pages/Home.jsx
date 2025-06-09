import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { FiSearch } from "react-icons/fi";
import products from "../data/products";

const Home = () => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleSearch = (e) => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between mb-6 items-start md:items-center gap-4">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
              Our Products
            </h3>
            <p className="text-gray-500 text-sm md:text-base">
              Discover amazing products at great prices
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-500">
              <FiSearch className="w-5 h-5" />
            </span>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-0 focus:ring-2 focus:ring-blue-500"
              onChange={handleSearch}
            />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-items-center">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty state */}
        {filteredProducts.length === 0 && (
          <p className="text-center text-gray-500 mt-8">
            No products found matching your search.
          </p>
        )}
      </div>
    </>
  );
};

export default Home;

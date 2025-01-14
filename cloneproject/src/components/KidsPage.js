import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { source } from "../data/NavData"; // Assume source is imported from NavData.js
import ProductCard from "./ProductCard"; // A reusable ProductCard component

const KidsPage = () => {
  const navigate = useNavigate();

  // Use only the 2nd index of the source array
  const productCategory = source[2];

  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    discount: [],
    color: [],
    priceRange: [],
  });

  const [sortOption, setSortOption] = useState("brand"); // Default sort option: brand
  const [isSidebarOpen, setSidebarOpen] = useState(false); // Sidebar toggle state

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const updatedFilters = prevFilters[category].includes(value)
        ? prevFilters[category].filter((item) => item !== value)
        : [...prevFilters[category], value];
      return { ...prevFilters, [category]: updatedFilters };
    });
  };

  const getFilteredProducts = () => {
    if (!productCategory || !productCategory.category_products) return [];

    let filteredProducts = [...productCategory.category_products];

    // Apply filters to products
    if (selectedFilters.gender.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.gender.includes(product.gender.toUpperCase())
      );
    }

    if (selectedFilters.discount.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.discount.some(
          (discount) =>
            product.discountPercent >= parseInt(discount.split("%")[0])
        )
      );
    }

    if (selectedFilters.color.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.color.some((color) =>
          product.color
            .map((c) => c.toLowerCase())
            .includes(color.toLowerCase())
        )
      );
    }

    if (selectedFilters.priceRange.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.priceRange.some((range) => {
          const [minPrice, maxPrice] = range
            .replace("Rs.", "")
            .split(" to ")
            .map((price) => parseInt(price, 10));
          return product.price >= minPrice && product.price <= maxPrice;
        })
      );
    }

    // Sort products based on the selected option
    switch (sortOption) {
      case "brand":
        filteredProducts.sort((a, b) => a.brandName.localeCompare(b.brandName));
        break;
      case "priceLowToHigh":
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case "priceHighToLow":
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();

  const renderFilters = (category, options) => {
    return options.map((option) => (
      <li key={option}>
        <label>
          <input
            type="checkbox"
            className="mr-2"
            checked={selectedFilters[category].includes(option)}
            onChange={() => handleFilterChange(category, option)}
          />
          {option}
        </label>
      </li>
    ));
  };

  const renderSelectedFilters = () => {
    const selectedItems = Object.keys(selectedFilters).flatMap((category) =>
      selectedFilters[category].map((item) => ({
        category,
        item,
      }))
    );

    return selectedItems.map(({ category, item }) => (
      <span
        key={`${category}-${item}`}
        className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mr-2 mb-2 inline-block"
      >
        {item}
      </span>
    ));
  };

  if (!productCategory) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center text-red-500 font-bold text-xl">
          Product Category Not Found
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col mt-20">
      {/* Fixed Header */}
      <header className="flex justify-between items-center bg-gray-100 px-6 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-600">Clothing</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-800 font-semibold">
            {productCategory.productType}
          </span>
        </div>
        <button
          className="md:hidden p-2 bg-purple-500 text-white rounded"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4h18M3 12h18M3 20h18"
            />
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside
          className={`w-64 bg-gray-100 p-6 overflow-y-auto shadow-lg ${
            isSidebarOpen ? "block" : "hidden md:block"
          }`}
        >
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3">Selected Filters:</h3>
            <div>{renderSelectedFilters()}</div>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Gender</h3>
            <ul>{renderFilters("gender", ["BOYS", "GIRLS"])}</ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Discount</h3>
            <ul>
              {renderFilters("discount", [
                "10% and above",
                "20% and above",
                "30% and above",
                "40% and above",
                "50% and above",
                "60% and above",
              ])}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Color</h3>
            <ul>
              {renderFilters("color", [
                "White",
                "Blue",
                "Yellow",
                "Red",
                "Green",
                "Pink",
              ])}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Price Range</h3>
            <ul>
              {renderFilters("priceRange", [
                "Rs. 100 to Rs. 1000",
                "Rs. 1000 to Rs. 2000",
                "Rs. 2000 to Rs. 3000",
                "Rs. 3000 to Rs. 4000",
              ])}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Sort By</h3>
            <select
              className="px-3 py-2 border rounded-md"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="brand">Brand Name</option>
              <option value="priceLowToHigh">Price: Low to High</option>
              <option value="priceHighToLow">Price: High to Low</option>
            </select>
          </div>
        </aside>

        {/* Product List */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/Product-Page/${product.id}`)}
                className="cursor-pointer"
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default KidsPage;

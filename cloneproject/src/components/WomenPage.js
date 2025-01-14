import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { source } from "../data/NavData";
import ProductCard from "./ProductCard";
import { debounce } from "lodash";

const WomenPage = () => {
  const navigate = useNavigate();
  const productCategory = source[1];

  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    discount: [],
    color: [],
    priceRange: [],
  });

  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false); // Sidebar visibility toggle

  const handleSearch = debounce((query) => {
    setSearchQuery(query);
  }, 500);

  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const currentCategory = prevFilters[category];
      const updatedFilters = currentCategory.includes(value)
        ? currentCategory.filter((item) => item !== value)
        : [...currentCategory, value];

      return { ...prevFilters, [category]: updatedFilters };
    });
  };

  const getFilteredProducts = () => {
    if (!productCategory || !productCategory.category_products) return [];
    let filteredProducts = [...productCategory.category_products];

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
          product.color.map((c) => c.toLowerCase()).includes(color.toLowerCase())
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

    if (searchQuery) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();

  const renderFilters = (category, options) => {
    return options.map((option, index) => (
      <li key={`${category}-${option}-${index}`}>
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

  return (
    <div className="h-screen flex flex-col mt-20">
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
        {/* Show Filter Button Only on Small Screens */}
        <button
          className="bg-purple-500 text-white px-4 py-2 rounded-md shadow hover:bg-purple-600 block md:hidden"
          onClick={() => setShowFilters((prev) => !prev)}
        >
          {showFilters ? "Hide Filters" : "Show Filters"}
        </button>
      </header>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar: Hidden on Small Screens */}
        <aside
          className={`${
            showFilters ? "block" : "hidden"
          } md:block w-64 bg-gray-100 p-6 overflow-y-auto shadow-lg`}
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Gender</h3>
            <ul>{renderFilters("gender", ["MEN", "WOMEN", "BOYS", "GIRLS"])}</ul>
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
        </aside>

        {/* Main Product List */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product-Page/${product.id}`)}
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

export default WomenPage;

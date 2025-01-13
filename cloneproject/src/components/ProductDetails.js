import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Products } from "../data/producttype";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate(); // React Router's navigation hook

  // Find the current product category based on the id from route params
  const productCategory = Products.find((product) => product.id === id);

  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    discount: [],
    color: [],
    priceRange: [],
  });

  // Handle checkbox change for filters
  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const currentCategory = prevFilters[category];
      const updatedFilters = currentCategory.includes(value)
        ? currentCategory.filter((item) => item !== value)
        : [...currentCategory, value];

      return { ...prevFilters, [category]: updatedFilters };
    });
  };

  // Function to filter products dynamically based on selected filters
  const getFilteredProducts = () => {
    if (!productCategory) return [];

    let filteredProducts = [...productCategory.category_products];

    // Filter by gender
    if (selectedFilters.gender.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.gender.includes(product.gender.toUpperCase())
      );
    }

    // Filter by discount
    if (selectedFilters.discount.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.discount.some(
          (discount) =>
            product.discountPercent >= parseInt(discount.split("%")[0])
        )
      );
    }

    // Filter by color
    if (selectedFilters.color.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.color.some((color) =>
          product.color.map((c) => c.toLowerCase()).includes(color.toLowerCase())
        )
      );
    }

    // Filter by price range
    if (selectedFilters.priceRange.length) {
      filteredProducts = filteredProducts.filter((product) =>
        selectedFilters.priceRange.some((range) => {
          const [minPrice, maxPrice] = range
            .match(/\d+/g) // Extract numeric values from the range string
            .map((price) => parseInt(price, 10)); // Convert to integers
          return product.price >= minPrice && product.price <= maxPrice;
        })
      );
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
    const categories = Object.keys(selectedFilters);
    const selectedItems = categories.flatMap((category) =>
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
    <div>
      {/* Header */}
      <header className="flex justify-between items-center mt-14 bg-gray-100 px-6 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-600">Clothing</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-800 font-semibold">
            {productCategory.productType}
          </span>
        </div>
        <div>
          <div className="font-semibold text-black">{renderSelectedFilters()}</div>
        </div>
      </header>

      <div className="flex h-screen mt-4 bg-white">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-6 overflow-y-auto shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3">Selected Filters:</h3>
          </div>

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
                "Rs. 1000 to Rs. 5000",
                "Rs. 5000 to Rs.12000",
                "Rs. 12000 to Rs. 20000",
                "Rs. 20000 to Rs. 35000",
                "Rs. 35000 to Rs. 50000",
              ])}
            </ul>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/product-page/${product.id}`)}

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

export default ProductDetails;

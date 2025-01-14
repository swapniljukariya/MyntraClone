import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Products } from "../data/producttype";
import ProductCard from "./ProductCard";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const productCategory = Products.find((product) => product.id === id);

  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    discount: [],
    color: [],
    priceRange: [],
  });

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
    if (!productCategory) return [];

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
            .match(/\d+/g)
            .map((price) => parseInt(price, 10));
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
      <header className="flex flex-wrap justify-between items-center p-4 bg-gray-100 shadow-md mt-14">
        <div className="flex items-center space-x-2 text-sm">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-600">Clothing</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-800 font-semibold">
            {productCategory.productType}
          </span>
        </div>
        <button
          onClick={() => setSidebarOpen(!isSidebarOpen)}
          className="md:hidden px-4 py-2 bg-purple-500 text-white rounded"
        >
          Filters
        </button>
        <div>{renderSelectedFilters()}</div>
      </header>

      <div className="flex flex-col md:flex-row">
        <aside
          className={`${
            isSidebarOpen ? "block" : "hidden"
          } md:block w-full md:w-64 bg-gray-100 p-6 overflow-y-auto shadow-lg`}
        >
          <h3 className="text-lg font-semibold mb-3">Filters</h3>
          <div className="mb-6">
            <h4 className="font-semibold">Gender</h4>
            <ul>{renderFilters("gender", ["MEN", "WOMEN", "BOYS", "GIRLS"])}</ul>
          </div>
          <div className="mb-6">
            <h4 className="font-semibold">Discount</h4>
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
            <h4 className="font-semibold">Color</h4>
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
          <div>
            <h4 className="font-semibold">Price Range</h4>
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

        <main className="flex-1 p-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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

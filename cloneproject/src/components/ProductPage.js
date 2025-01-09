import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { source } from "../data/NavData";
import ProductCard from "./ProductCard";

const ProductPage = () => {
  const { category } = useParams(); // Extract the category from the URL
  const navigate = useNavigate();

  // Find the matching product category
  const productCategory = source.find(
    (cat) => cat.name.toLowerCase() === category.toLowerCase()
  );

  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    discount: [],
    color: [],
    priceRange: [],
  });

  const handleFilterChange = (filterCategory, value) => {
    setSelectedFilters((prevFilters) => {
      const currentCategory = prevFilters[filterCategory];
      const updatedFilters = currentCategory.includes(value)
        ? currentCategory.filter((item) => item !== value)
        : [...currentCategory, value];
      return { ...prevFilters, [filterCategory]: updatedFilters };
    });
  };

  const getFilteredProducts = () => {
    if (!productCategory || !productCategory.category_products) return [];
    let filteredProducts = [...productCategory.category_products];

    // Add filtering logic here (e.g., gender, discount, color, price range)

    return filteredProducts;
  };

  const filteredProducts = getFilteredProducts();

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
    <div className="h-screen flex flex-col mt-14">
      {/* Header */}
      <header className="flex justify-between items-center bg-gray-100 px-6 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-800 font-semibold">
            {productCategory.productType}
          </span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for products, brands..."
            className="px-4 py-2 border rounded-md w-96"
          />
        </div>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-6 overflow-y-auto shadow-lg">
          {/* Render filters here */}
        </aside>

        {/* Product List */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => navigate(`/productPage/${product.id}`)}
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

export default ProductPage;

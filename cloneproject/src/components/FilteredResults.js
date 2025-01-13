import React, { useState, useContext, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import { Products } from "../data/producttype";
import ProductCard from "./ProductCard";

const FilteredResults = () => {
  const { query, updateQuery } = useContext(SearchContext);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    gender: [],
    discount: [],
    color: [],
    priceRange: [],
  });

  // Handle filter checkbox changes
  const handleFilterChange = (category, value) => {
    setSelectedFilters((prevFilters) => {
      const currentCategory = prevFilters[category];
      const updatedFilters = currentCategory.includes(value)
        ? currentCategory.filter((item) => item !== value)
        : [...currentCategory, value];

      return { ...prevFilters, [category]: updatedFilters };
    });
  };

  const filterItems = () => {
    let filtered = Products.flatMap((product) =>
      product.category_products.filter((item) =>
        item.productName?.toLowerCase().includes(query.toLowerCase())
      )
    );
  
    // Apply selected filters
    if (selectedFilters.gender.length) {
      filtered = filtered.filter((item) =>
        selectedFilters.gender.includes(item.gender?.toUpperCase())
      );
    }
  
    if (selectedFilters.discount.length) {
      filtered = filtered.filter((item) =>
        selectedFilters.discount.some(
          (discount) =>
            item.discountPercent >= parseInt(discount.split("%")[0])
        )
      );
    }
  
    if (selectedFilters.color.length) {
      filtered = filtered.filter((item) =>
        selectedFilters.color.some((color) =>
          item.color?.map((c) => c.toLowerCase()).includes(color.toLowerCase())
        )
      );
    }
  
    if (selectedFilters.priceRange.length) {
      filtered = filtered.filter((item) =>
        selectedFilters.priceRange.some((range) => {
          const [minPrice, maxPrice] = range
            .replace("Rs.", "")
            .split(" to ")
            .map((price) => parseInt(price, 10));
          return item.price >= minPrice && item.price <= maxPrice;
        })
      );
    }
  
    setFilteredItems(filtered);
  };
  

  useEffect(() => {
    filterItems();
  }, [query, selectedFilters]);

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

  return (
    <div>
      {/* Header */}
      <header className="flex justify-between items-center mt-14 bg-gray-100 px-6 py-4 shadow-md">
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">Home</span>
          <span className="text-gray-500">/</span>
          <span className="text-gray-600">Products</span>
        </div>
        <div>
          <input
            type="text"
            placeholder="Search for products"
            className="px-4 py-2 border rounded-md w-96"
            value={query}
            onChange={(e) => updateQuery(e.target.value)}
          />
        </div>
      </header>

      <div className="flex h-screen mt-4 bg-white">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 p-6 overflow-y-auto shadow-lg">
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-3">Filters</h3>

            <h3 className="text-lg font-semibold mb-3">Gender</h3>
            <ul>{renderFilters("gender", ["MEN", "WOMEN", "BOYS", "GIRLS"])}</ul>

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

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.length > 0 ? (
              filteredItems.map((product) => (
                <div key={product.id} className="cursor-pointer">
                  <ProductCard product={product} />
                </div>
              ))
            ) : (
              <p>No products found.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default FilteredResults;

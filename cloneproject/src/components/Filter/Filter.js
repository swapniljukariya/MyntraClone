import React from 'react';

const Filter = ({ filters, onFilterChange }) => {
  return (
    <div className="w-64 p-4 border-r border-gray-200">
      <h2 className="text-xl font-bold mb-4">Filters</h2>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Discount Range</h3>
        {filters.discountRanges.map((range) => (
          <label key={range.value} className="block text-sm mb-2">
            <input
              type="checkbox"
              value={range.value}
              onChange={(e) => onFilterChange('discount', e.target.value)}
              className="mr-2"
            />
            {range.label}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Color</h3>
        {filters.colors.map((color) => (
          <label key={color.value} className="block text-sm mb-2">
            <input
              type="checkbox"
              value={color.value}
              onChange={(e) => onFilterChange('color', e.target.value)}
              className="mr-2"
            />
            {color.label}
          </label>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Price</h3>
        {filters.priceRanges.map((range) => (
          <label key={range.value} className="block text-sm mb-2">
            <input
              type="checkbox"
              value={range.value}
              onChange={(e) => onFilterChange('price', e.target.value)}
              className="mr-2"
            />
            {range.label}
          </label>
        ))}
      </div>
    </div>
  );
}
export default  Filter;
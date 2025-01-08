import React, { createContext, useContext, useState } from "react";

const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filters, setFilters] = useState({
    gender: [],
    discountRange: null,
    colors: [],
    priceRange: null,
  });

  const updateFilter = (type, value) => {
    setFilters((prev) => {
      if (type === "gender" || type === "colors") {
        const updatedValues = prev[type].includes(value)
          ? prev[type].filter((v) => v !== value)
          : [...prev[type], value];
        return { ...prev, [type]: updatedValues };
      }
      return { ...prev, [type]: value };
    });
  };

  return (
    <FilterContext.Provider value={{ filters, updateFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilters = () => useContext(FilterContext);

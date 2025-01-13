import React, { createContext, useState } from "react";

// Create context
export const SearchContext = createContext();

// Provider component
export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState(""); // State to hold search query
  const [results, setResults] = useState([]); // State to hold search results

  // Function to update the query
  const updateQuery = (newQuery) => {
    setQuery(newQuery);
  };

  // Function to update the results
  const updateResults = (newResults) => {
    setResults(newResults);
  };

  return (
    <SearchContext.Provider value={{ query, results, updateQuery, updateResults }}>
      {children}
    </SearchContext.Provider>
  );
};

import React, { createContext, useContext, useState } from "react";

// Create Context
const BagContext = createContext();

// Create a custom hook to use the Bag Context
export const useBag = () => {
  return useContext(BagContext);
};

// BagProvider Component
export const BagProvider = ({ children }) => {
  const [bag, setBag] = useState([]);

  // Add an item to the bag
  const addToBag = (product) => {
    setBag((prev) => {
      // Prevent duplicates
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  // Remove an item from the bag
  const removeFromBag = (productId) => {
    setBag((prev) => prev.filter((item) => item.id !== productId));
  };

  // Check if an item is in the bag
  const isInBag = (productId) => {
    return bag.some((item) => item.id === productId);
  };

  // Provide the bag state and actions to children
  return (
    <BagContext.Provider
      value={{
        bag,
        addToBag,
        removeFromBag,
        isInBag,
      }}
    >
      {children}
    </BagContext.Provider>
  );
};

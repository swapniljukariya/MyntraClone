import React, { createContext, useContext, useState } from "react";

// Create Context
const WishlistContext = createContext();

// Create a custom hook to use the Wishlist Context
export const useWishlist = () => {
  return useContext(WishlistContext);
};

// WishlistProvider Component
export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Add an item to the wishlist
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      // Prevent duplicates
      if (prev.find((item) => item.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  // Remove an item from the wishlist
  const removeFromWishlist = (productId) => {
    setWishlist((prev) => prev.filter((item) => item.id !== productId));
  };

  // Check if an item is in the wishlist
  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  // Provide the wishlist state and actions to children
  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

import React from "react";
import { useWishlist } from "../context/WishlistContext"; // Import Wishlist Context
import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard"; // Reuse the ProductCard component

const WishListPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Access wishlist and removal function
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6">My Wishlist</h1>

        {/* If wishlist is empty */}
        {wishlist.length === 0 ? (
          <div className="text-center bg-white p-10 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Your wishlist is empty!</h2>
            <button
              className="bg-purple-500 text-white px-4 py-2 rounded-md hover:bg-purple-600 transition"
              onClick={() => navigate("/")}
            >
              Go to Shopping
            </button>
          </div>
        ) : (
          // Wishlist products grid
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div key={product.id} className="relative">
                {/* Reuse ProductCard */}
                <ProductCard product={product} />

                {/* Remove Button */}
                <button
                  onClick={() => removeFromWishlist(product.id)}
                  className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full shadow hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishListPage;

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import for navigation
import { useWishlist } from "../context/WishlistContext"; // Import Wishlist Context

const ProductCard = ({ product }) => {
  const [hovered, setHovered] = useState(false); // For hover state
  const [currentImage, setCurrentImage] = useState(0); // For image slider

  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist(); // Access wishlist functions
  const navigate = useNavigate(); // Hook for navigation

  // Check if the product is already in the wishlist
  const inWishlist = isInWishlist(product.id);

  // Image slider logic
  useEffect(() => {
    if (hovered) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % product.images.length);
      }, 2000); // Change image every 2 seconds
      return () => clearInterval(interval); // Cleanup
    }
  }, [hovered, product.images.length]);

  return (
    <div
      className={`relative bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 ${
        hovered ? "scale-105 shadow-lg" : ""
      }`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      
    >
      {/* Image Section */}
      <div className="relative h-[300px] overflow-hidden">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`${product.productName} image ${index + 1}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {hovered && (
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end justify-center p-4">
            {/* Wishlist Button */}
            <button
              className={`px-3 py-1 rounded-full shadow transition ${
                inWishlist
                  ? "bg-red-500 text-white hover:bg-red-600"
                  : "bg-white text-red-500 hover:bg-red-500 hover:text-white"
              }`}
              aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"} // Accessibility
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering parent click
                if (inWishlist) {
                  removeFromWishlist(product.id); // Remove if in wishlist
                } else {
                  addToWishlist(product); // Add to wishlist
                }
              }}
            >
              {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
              <i
                className={`fas fa-heart ${
                  inWishlist ? "text-white" : "text-red-500"
                }`}
              ></i>
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">
          {product.productName}
        </h3>
        <p className="text-sm text-gray-500 truncate">{product.brandName}</p>
        <div className="mt-3">
          <p className="text-xl font-bold text-gray-800">
            Rs. {product.price}
            <span className="text-gray-500 line-through text-sm ml-2">
              Rs. {product.originalPrice}
            </span>
          </p>
          <p className="text-green-600 text-sm font-semibold">
            {product.discountPercent}% OFF
          </p>
        </div>
      </div>

      {/* Image Dots */}
      {hovered && (
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {product.images.map((_, index) => (
            <span
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentImage
                  ? "bg-purple-600 scale-125"
                  : "bg-gray-300"
              } transition-all`}
            ></span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductCard;

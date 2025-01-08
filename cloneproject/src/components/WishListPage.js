import React from "react";
import { useWishlist } from "../context/WishlistContext"; // Import Wishlist Context

const WishlistPage = () => {
  const { wishlist, removeFromWishlist } = useWishlist(); // Access wishlist and its functions

  return (
    <div className="p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">
        My Wishlist ({wishlist.length} {wishlist.length === 1 ? "item" : "items"})
      </h2>

      {wishlist.length === 0 ? (
        <p className="text-gray-500 text-lg">Your wishlist is empty!</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 lg:grid-cols-4 gap-8">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="relative bg-white rounded-lg border border-gray-300 shadow-md p-4 w-full"
            >
              {/* Remove Button (X) */}
              <button
                className="absolute top-3 right-3 bg-gray-100 text-gray-500 p-2 rounded-full hover:bg-gray-200 hover:text-red-500 transition"
                onClick={() => removeFromWishlist(product.id)}
              >
                <i className="fas fa-times"></i>
              </button>

              {/* Product Image */}
              <div className="h-[450px] w-full overflow-hidden rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.productName}
                  className="w-full h-[400] object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="mt-4">
                <h3 className="text-md font-semibold text-gray-800 truncate">
                  {product.productName}
                </h3>
                <p className="text-sm text-gray-500">{product.brandName}</p>

                <div className="mt-3">
                  <p className="text-lg font-bold text-gray-800">
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

              {/* Move to Bag Button */}
              <button
                className="mt-6 w-full text-pink-500  py-2 rounded-md font-medium hover:bg-red-600 transition"
                onClick={() => console.log(`Moved ${product.productName} to bag`)}
              >
                Move to Bag
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

import React, { useState } from "react";
import { useWishlist } from "../context/WishlistContext";
import { useBag } from "../context/BagContext"; // Import BagContext

const WishlistPage = () => {
  const { wishlist = [], removeFromWishlist } = useWishlist(); // Default to empty array
  const { addToBag } = useBag(); // Add to Bag context
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupVisible, setPopupVisible] = useState(false);

  const handleMoveToBag = (product) => {
    setSelectedProduct(product);
    setPopupVisible(true);
  };

  const closePopup = () => {
    if (selectedProduct) {
      addToBag({ ...selectedProduct, quantity: 1 }); // Add the selected product to the bag
      removeFromWishlist(selectedProduct.id); // Remove from wishlist after moving to the bag
    }
    setSelectedProduct(null);
    setPopupVisible(false);
  };

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
              <button
                className="absolute top-3 right-3 bg-gray-100 text-gray-500 p-2 rounded-full hover:bg-gray-200 hover:text-red-500 transition"
                onClick={() => removeFromWishlist(product.id)}
              >
                <i className="fas fa-times"></i>
              </button>

              <div className="h-[450px] w-full overflow-hidden rounded-lg">
                <img
                  src={product.images[0]}
                  alt={product.productName}
                  className="w-full h-[400] object-cover"
                />
              </div>

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

              <button
                className="mt-6 w-full text-pink-500 border border-pink-500 py-2 rounded-md font-medium hover:bg-pink-500 hover:text-white transition"
                onClick={() => handleMoveToBag(product)}
              >
                Move to Bag
              </button>
            </div>
          ))}
        </div>
      )}

      {isPopupVisible && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-md">
            <div className="flex justify-between items-center mb-4">
              <button
                className="text-gray-500 hover:text-red-500"
                onClick={() => setPopupVisible(false)}
              >
                X
              </button>
            </div>
            <div className="flex gap-5 bottom-3 border-b-2 p-6">
              <img
                src={selectedProduct.images[0]}
                className="h-36 w-36"
                alt={selectedProduct.productName}
              />
              <h3 className="text-lg font-bold">{selectedProduct.productName}</h3>
            </div>

            <div className="flex gap-16 p-8">
              <button className="rounded-xl border p-3 border-black">30</button>
              <button className="rounded-xl border p-3 border-black">32</button>
              <button className="rounded-xl border p-3 border-black">34</button>
              <button className="rounded-xl border p-3 border-black">36</button>
            </div>

            <button
              className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
              onClick={closePopup}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;

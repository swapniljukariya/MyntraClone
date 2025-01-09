import React, { useState } from "react";
import { useBag } from "../context/BagContext"; // Assuming you have BagContext configured

const BagPage = () => {
  const { bag, removeFromBag, updateQuantity } = useBag(); // Bag actions
  const [selectedCoupon, setSelectedCoupon] = useState(null);

  const handleQuantityChange = (productId, quantity) => {
    updateQuantity(productId, quantity); // Update quantity in global state
  };

  const handleRemoveItem = (productId) => {
    removeFromBag(productId); // Remove product from the bag
  };

  const handleApplyCoupon = () => {
    alert("Coupon applied successfully!");
  };

  // Calculate total price and discount
  const totalMRP = bag.reduce((total, product) => total + product.originalPrice * product.quantity, 0);
  const totalDiscount = bag.reduce((total, product) => total + (product.originalPrice - product.price) * product.quantity, 0);
  const finalPrice = totalMRP - totalDiscount;

  return (
    <div className="p-6 mt-10">
      <h2 className="text-2xl font-bold mb-6">Bag ({bag.length} items)</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section: Bag Items */}
        <div className="col-span-2 bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold mb-4">Items in your Bag</h3>
          {bag.length === 0 ? (
            <p className="text-gray-500">Your bag is empty!</p>
          ) : (
            bag.map((product) => (
              <div key={product.id} className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="flex items-center gap-4">
                  <img
                    src={product.images[0]}
                    alt={product.productName}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <h4 className="font-bold text-gray-800">{product.productName}</h4>
                    <p className="text-sm text-gray-500">Size: {product.size}</p>
                    <p className="text-sm text-gray-500">Qty: {product.quantity}</p>
                    <p className="text-lg text-gray-800 font-bold">
                      Rs. {product.price}{" "}
                      <span className="text-sm text-gray-500 line-through">Rs. {product.originalPrice}</span>
                    </p>
                  </div>
                </div>
                <div>
                  <select
                    value={product.quantity}
                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value))}
                    className="border border-gray-300 rounded px-2 py-1"
                  >
                    {[1, 2, 3, 4, 5].map((qty) => (
                      <option key={qty} value={qty}>
                        {qty}
                      </option>
                    ))}
                  </select>
                  <button
                    className="text-red-500 text-sm underline ml-4"
                    onClick={() => handleRemoveItem(product.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Right Section: Price Details */}
        <div className="bg-white rounded-lg p-6 shadow">
          <h3 className="text-xl font-bold mb-4">Price Details</h3>
          <div className="flex justify-between mb-2">
            <span>Total MRP</span>
            <span>Rs. {totalMRP}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Discount</span>
            <span className="text-green-600">-Rs. {totalDiscount}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Platform Fee</span>
            <span>Rs. 20</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Shipping Fee</span>
            <span className="text-green-600">FREE</span>
          </div>
          <hr className="mb-4" />
          <div className="flex justify-between font-bold text-lg">
            <span>Total Amount</span>
            <span>Rs. {finalPrice + 20}</span>
          </div>
          <button
            className="mt-6 w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
            onClick={() => alert("Order placed!")}
          >
            Place Order
          </button>
        </div>
      </div>

      {/* Coupon Section */}
      <div className="mt-8 bg-white rounded-lg p-6 shadow">
        <h3 className="text-xl font-bold mb-4">Apply Coupons</h3>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Enter coupon code"
            className="flex-1 border border-gray-300 rounded px-4 py-2"
            value={selectedCoupon || ""}
            onChange={(e) => setSelectedCoupon(e.target.value)}
          />
          <button
            className="ml-4 bg-pink-500 text-white py-2 px-6 rounded hover:bg-pink-600 transition"
            onClick={handleApplyCoupon}
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default BagPage;

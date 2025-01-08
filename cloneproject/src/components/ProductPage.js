import React from "react";
import { useParams } from "react-router-dom";
import { Products } from "../data/producttype";

const ProductPage = () => {
  const { id } = useParams(); // Get product ID from URL

  // Find the product by searching in all categories
  const product = Products.flatMap((p) => p.category_products).find(
    (p) => p.id === id
  );

  if (!product) {
    return (
      <div className="text-center text-2xl text-red-500 mt-16">
        Product not found!
      </div>
    );
  }

  const { productName, price, originalPrice, discountPercent, images, rating } =
    product;

  return (
    <div className="bg-gray-100 min-h-screen mt-22 p-8">
      <div className="max-w-10xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Image Gallery */}

        
        <div className="grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${productName} ${index}`}
              className="w-auto  h-auto object-cover rounded-lg shadow-md"
            />
          ))}
        </div>

        {/* Product Details */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-gray-800">{productName}</h1>
          <p className="text-gray-600 mt-2">{rating} ⭐ | Reviews: {product.numberOfReviews}</p>

          {/* Price Details */}
          <div className="mt-4">
            <span className="text-xl font-bold text-green-600">₹{price}</span>
            <span className="text-gray-500 line-through ml-4">
              ₹{originalPrice}
            </span>
            <span className="text-red-500 ml-4">({discountPercent}% OFF)</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Inclusive of all taxes</p>

          {/* Action Buttons */}
          <div className="mt-6 flex space-x-4">
            <button className="bg-pink-600 text-white px-6 py-3 rounded-full w-full hover:bg-pink-700 transition">
              ADD TO BAG
            </button>
            <button className="border border-gray-300 px-6 py-3 rounded-full w-full hover:bg-gray-200 transition">
              ❤️ WISHLIST
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

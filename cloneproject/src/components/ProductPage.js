import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Products } from "../data/producttype"; // Existing Products array
import { source } from "../data/NavData"; // Source array used by ManPage
import { useBag } from '../context/BagContext' // Adjust the path as needed
import { useWishlist } from "../context/WishlistContext"; // Adjust the path as needed

const ProductPage = () => {
  const { id } = useParams();

  const { addToBag, isInBag } = useBag();
  const { addToWishlist, isInWishlist } = useWishlist();

  // Find the product in either `Products` or `source`
  const product =
    Products.flatMap((category) => category.category_products).find(
      (item) => item.id && item.id.toLowerCase() === id.toLowerCase()
    ) ||
    source.flatMap((category) => category.category_products).find(
      (item) => item.id && item.id.toLowerCase() === id.toLowerCase()
    );

  const [selectedImage, setSelectedImage] = useState(
    product?.images?.[0] || "/placeholder-image.png"
  );

  if (!product) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="text-center text-red-500 font-bold text-xl">
          Product Not Found
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 mt-24 max-w-10xl mx-auto bg-white shadow-md rounded-md flex flex-col lg:flex-row">
      {/* Left Section: Image Gallery */}
      <div className="w-full lg:w-2/3 grid grid-cols-2 gap-4">
        {/* Thumbnail Images */}
        {product.images?.map((image, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <img
              src={image}
              alt={`Thumbnail ${index}`}
              className={`w-full h-auto rounded-md border-2 ${
                selectedImage === image ? "border-blue-500" : "border-gray-300"
              }`}
            />
          </div>
        ))}
      </div>

      {/* Right Section: Product Details */}
      <div className="w-full lg:w-1/3 lg:pl-8">
        <h1 className="text-2xl font-bold text-gray-800">{product.productName}</h1>
        <p className="mt-2 text-gray-600">{product.description}</p>
        <p className="mt-4 text-lg font-semibold text-gray-700">
          Price: Rs. <span className="line-through text-red-500">{product.originalPrice}</span>{" "}
          <span>{product.price}</span> ({product.discountPercent}% OFF)
        </p>
        <p className="mt-2 text-gray-600">{product.numberOfReviews} Reviews</p>
        <p className="mt-2 text-gray-600">Rating: {product.rating}★</p>
        <p className="mt-2 text-gray-600">Available Colors: {product.color.join(", ")}</p>

        {/* Size Options */}
        <div className="mt-6">
          <h2 className="text-lg font-bold text-gray-700">Select Size:</h2>
          <div className="flex gap-4 mt-2">
            {product.sizes?.map((size, index) => (
              <button
                key={index}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:border-blue-500"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <button
            className={`px-6 py-3 rounded-md shadow-lg text-white ${
              isInBag(product.id)
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-pink-600 hover:bg-pink-700"
            }`}
            onClick={() => addToBag(product)}
            disabled={isInBag(product.id)}
          >
            {isInBag(product.id) ? "Already in Bag" : "ADD TO BAG"}
          </button>
          <button
            className={`px-6 py-3 rounded-md shadow-lg border ${
              isInWishlist(product.id)
                ? "border-gray-500 cursor-not-allowed text-gray-500"
                : "border-gray-300 text-gray-700 hover:border-gray-500"
            }`}
            onClick={() => addToWishlist(product)}
            disabled={isInWishlist(product.id)}
          >
            {isInWishlist(product.id) ? "Already in Wishlist" : "WISHLIST"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

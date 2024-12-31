import React, { useState } from "react";
import { useParams } from "react-router-dom"; // Import useParams to get the id from URL
import { Products } from "../data/producttype";

const ProductDetails = () => {
  const { id } = useParams(); // Get the product id from the URL
  const product = Products.find((p) => p.id === id); // Find the product by id

  if (!product) {
    return <div className="text-center mt-16 text-2xl text-red-500">Product not found</div>;
  }

  const { category_products } = product;

  return (
    <div className="bg-gray-100 ml-56 min-h-screen p-4">
      <div className="max-w-8xl mx-auto">
        {/* Product Categories */}
        <div>
          <h3 className="text-2xl font-bold text-purple-700 mb-4">Product Categories:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {category_products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track the current image
  const { images } = product;

  // Function to handle sliding
  const handlePrev = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
      {/* Image Slider */}
      <div className="relative w-full mb-4">
        <div className="overflow-hidden rounded-lg shadow-md">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="w-full h-1/3  object-cover transition-transform duration-500"
          />
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-300 transition"
        >
          ❮
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-200 text-gray-800 rounded-full p-2 shadow-md hover:bg-gray-300 transition"
        >
          ❯
        </button>
      </div>

      {/* Product Details */}
      <h4 className="text-lg font-bold text-gray-800">{product.productName}</h4>
      <p className="text-sm text-gray-600">{product.brandName}</p>
      <p className="text-xl font-semibold text-green-600 mt-2">
        ${product.price}{" "}
        <span className="line-through text-gray-500 text-sm">
          ${product.originalPrice}
        </span>
      </p>
      <p className="text-sm text-yellow-500 font-medium mt-1">
        {product.discountPercent}% OFF
      </p>
      <p className="text-sm text-gray-500 mt-1">
        Rating: {product.rating} ({product.numberOfReviews} reviews)
      </p>
      <div className="flex space-x-2 mt-4">
        {product.color.map((color, colorIndex) => (
          <span
            key={colorIndex}
            className="inline-block w-6 h-6 rounded-full border-2"
            style={{ backgroundColor: color.toLowerCase() }}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductDetails;

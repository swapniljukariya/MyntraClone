import React from "react";
import { Products } from "../data/producttype";
import { useNavigate } from "react-router-dom"; // Import useNavigate from react-router-dom

const ProductGrid = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const ProductCard = ({ productType, image, discount, id }) => {
    
    const handleClick = () => {
      navigate(`/product/${id}`); // Navigate to the product detail page using the product's id
    };

    return (
      <div
        className="bg-purple-700 text-white rounded-lg p-4 text-center shadow-md flex flex-col items-center h-[400px] cursor-pointer"
        onClick={handleClick} // Add the onClick event to the card
      >
        <img
          src={image}
          alt={productType}
          className="w-full h-[300px] object-cover rounded-md "
        />
        <h3 className="text-lg font-semibold mt-2">{productType}</h3>
        <p className="text-2xl font-extrabold ">{discount}</p>
        <button className="text-white mb-2 font-semibold">Shop Now</button>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <header className="text-center py-8">
        <h1 className="text-4xl font-extrabold text-purple-700 tracking-widest">
          SHOP BY CATEGORY
        </h1>
      </header>
      <div className="max-w-9xl grid grid-cols-2 md:grid-cols-6 gap-10 px-4 sm:px-8 lg:px-16">
        {Products.map((product, index) => (
          <ProductCard
            key={index}
            productType={product.productType}
            image={product.image}
            discount={product.discount}
            id={product.id} 
          />
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

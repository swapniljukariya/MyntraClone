import React from "react";
import { categories, influencers } from "../data/influencer";
import { Link } from "react-router-dom";

const StudioPage = () => {
  return (
    <div className="bg-pink-50 flex justify-center min-h-screen mt-20 p-4">
      {/* Mobile Boundary */}
      <div className="bg-white w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="px-4 py-3 flex justify-between items-center border-b">
            <h1 className="text-lg font-bold">Studio</h1>
            <button className="text-gray-500 hover:text-red-500">⚙️</button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4">
          {/* Categories Section */}
          <section className="mb-6">
            <h2 className="text-sm font-bold mb-3">
              Guide to Influencers' Most Coveted Looks
            </h2>
            <div className="flex space-x-4 overflow-x-auto pb-2">
              {categories.map((category) => (
                <div key={category.id} className="flex-none text-center">
                  <img
                    src={category.image || "https://via.placeholder.com/64"}
                    alt={category.name || "Category"}
                    className="w-16 h-16 rounded-full border-2 border-red-500"
                  />
                  <p className="mt-2 text-xs font-medium">{category.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Follow Our Top Influencers Section */}
          <section className="mb-6">
  <h2 className="text-sm font-bold mb-3">Follow Our Top Influencers</h2>
  <div className="flex space-x-4 overflow-x-auto scrollbar-hide pb-2">
    {influencers.map((influencer) => (
      <Link
        key={influencer.id}
        to={`/influencer/${influencer.id}`} // Navigate to Model.js
        className="flex-none w-40 bg-gray-50 rounded-lg shadow-sm p-2 text-center"
      >
        <img
          src={influencer.profileImage || "https://via.placeholder.com/150"}
          alt={influencer.name || "Influencer"}
          className="w-full h-32 object-cover rounded-lg"
        />
        <h3 className="text-sm font-medium mt-2">{influencer.name}</h3>
        <button className="text-red-500 text-xs font-medium mt-1">Follow</button>
      </Link>
    ))}
  </div>
</section>

          {/* Reels Section */}
          {/* Reels Section */}
<section>
  <h2 className="text-sm font-bold mb-3">Trending Reels</h2>
  <div className="space-y-6">
    {influencers.map((influencer) =>
      influencer.categories.map((category, index) => (
        <div
          key={`${influencer.id}-${index}`}
          className="bg-gray-50 rounded-lg shadow-sm p-4"
        >
          {/* Influencer Name */}
          <div className="flex items-center mb-4">
            <img
              src={influencer.profileImage || "https://via.placeholder.com/40"}
              alt={influencer.name || "Influencer"}
              className="w-10 h-10 rounded-full mr-2"
            />
            <h3 className="text-sm font-medium">{influencer.name}</h3>
          </div>

          {/* Video */}
          <video
            className="w-full h-48 rounded-lg mb-4"
            controls
            src={category.video || "default-video-url.mp4"}
          >
            Your browser does not support the video tag.
          </video>

          {/* Shop All Heading */}
          <div className="flex items-center justify-between mb-3">
            <button className="text-red-500 text-sm font-bold">
              Shop All
            </button>
          </div>

          {/* Like and Share */}
          <div className="flex justify-between items-center text-gray-500 text-sm mb-3">
            <button className="flex items-center hover:text-red-500">
              ❤️ <span className="ml-1">0</span>
            </button>
            <button className="flex items-center hover:text-blue-500">
              🔗 <span className="ml-1">Share</span>
            </button>
          </div>

          {/* Description */}
          <p className="text-xs text-gray-600 mb-3">
            Elevate your everyday look with this solid slim-fit T-shirt.
            Crafted from high-quality materials, this item ensures comfort
            and durability. It's perfect for casual outings, office wear, or
            layering under jackets. #womenfashion
          </p>

          {/* Products Section */}
          <div>
  <h4 className="text-xs font-semibold mb-2">Shop These Products:</h4>
  <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
    {category.product_category.map((product) => (
      <Link
        key={product.id}
        to={`/product-page/${product.id}`} // Navigate to ProductPage
        className="flex-none w-40 bg-white rounded-lg shadow-md p-2"
      >
        <img
          src={product.images?.[0] || "https://via.placeholder.com/150"}
          alt={product.productName || "Product"}
          className="w-full h-28 object-cover rounded-lg"
        />
        <p className="text-xs font-medium mt-1">{product.productName}</p>
        <p className="text-xs text-gray-500 line-through">
          ₹{product.originalPrice}
        </p>
        <p className="text-sm font-bold text-red-500">₹{product.price}</p>
        <button className="mt-2 text-sm text-white bg-red-500 py-1 px-2 rounded">
          Buy Now
        </button>
      </Link>
    ))}
  </div>
</div>
        </div>
      ))
    )}
  </div>
</section>

         

          {/* Shop All Section */}
          {/* Shop All Section */}
<section className="bg-gray-100 p-4 rounded-lg shadow-sm">
  <h2 className="text-sm font-bold mb-3">Shop All</h2>

  {/* Shop All Button Positioned Correctly */}
  <div className="mb-4 flex justify-between items-center">
    <h3 className="text-xs font-medium">Trending Products</h3>
    <button className="text-red-500 text-sm font-bold">Shop All</button>
  </div>

  {/* Products Section */}

</section>

        </main>
      </div>
    </div>
  );
};

export default StudioPage;

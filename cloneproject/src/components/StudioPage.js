import React from "react";
import { categories, influencers } from "../data/influencer";

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
                    src={category.image}
                    alt={category.name}
                    className="w-16 h-16 rounded-full border-2 border-red-500"
                  />
                  <p className="mt-2 text-xs font-medium">{category.name}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Influencers Section */}
          <section>
            <h2 className="text-sm font-bold mb-3">Follow Our Top Influencers</h2>
            <div className="space-y-6">
              {influencers.map((influencer) => (
                <div
                  key={influencer.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border"
                >
                  {/* Influencer Details */}
                  <div className="flex items-center p-4 space-x-4 border-b">
                    <img
                      src={influencer.profileImage}
                      alt={influencer.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="text-sm font-semibold">
                        {influencer.name}
                      </h3>
                      <button className="text-red-500 text-xs font-medium">
                        Follow
                      </button>
                    </div>
                  </div>

                  {/* Categories and Products */}
                  {influencer.categories.map((category) => (
                    <div key={category.categoryId} className="p-4 space-y-4">
                      <h4 className="text-sm font-semibold text-gray-800">
                        {categories.find((cat) => cat.id === category.categoryId)
                          ?.name || ""}
                      </h4>

                      {/* Video Section */}
                      <div className="relative">
                        <iframe
                          src={category.video}
                          title={`Video for ${category.categoryId}`}
                          className="w-full h-48 rounded-lg"
                          allowFullScreen
                        ></iframe>
                      </div>

                      {/* Products */}
                      <div className="grid grid-cols-2 gap-4">
                        {category.product_category.map((product) => (
                          <div
                            key={product.productId}
                            className="flex flex-col items-center bg-gray-50 p-2 rounded-lg shadow-sm"
                          >
                            <img
                              src="https://via.placeholder.com/150" // Placeholder for product image
                              alt={product.name}
                              className="w-16 h-16 rounded-md object-cover"
                            />
                            <h5 className="text-xs font-medium mt-2 text-center">
                              {product.name}
                            </h5>
                            <p className="text-xs text-gray-600">
                              {product.price}
                            </p>
                            <p className="text-xs text-red-500">
                              {product.discount}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudioPage;

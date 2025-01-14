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

          {/* Follow Our Top Influencers Section */}
          <section className="mb-6">
            <h2 className="text-sm font-bold mb-3">Follow Our Top Influencers</h2>
            <div className="grid grid-cols-2 gap-4">
              {influencers.map((influencer) => (
                <div
                  key={influencer.id}
                  className="flex flex-col items-center bg-gray-50 p-2 rounded-lg shadow-sm"
                >
                  <img
                    src={influencer.profileImage}
                    alt={influencer.name}
                    className="w-full h-40 object-cover rounded-lg"
                  />
                  <h3 className="text-sm font-medium mt-2">{influencer.name}</h3>
                  <button className="text-red-500 text-xs font-medium mt-1">
                    Follow
                  </button>
                </div>
              ))}
            </div>
          </section>

          {/* Reels Section */}
          <section>
            <h2 className="text-sm font-bold mb-3">Trending Reels</h2>
            <div className="space-y-4">
              {influencers.map((influencer) =>
                influencer.categories.map((category, index) => (
                  <div
                    key={`${influencer.id}-${index}`}
                    className="bg-gray-50 p-3 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xs font-medium mb-1">
                      {influencer.name} - {categories.find(cat => cat.id === category.categoryId)?.name || 'Unknown'}
                    </h3>
                    <iframe
                      src={category.video}
                      title={`Reel by ${influencer.name}`}
                      className="w-full h-48 rounded-lg"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                ))
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default StudioPage;

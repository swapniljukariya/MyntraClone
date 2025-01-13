import React from "react";
import { categories, influencers } from "../data/influencer";

const StudioPage = () => {
  return (
    <div className="bg-pink-50 min-h-screen p-4 sm:p-6">
      {/* Categories Section (Scrollable like Instagram Stories) */}
      <div className="mb-6">
        <h2 className="text-lg font-bold mb-4">Guide to Influencers' Most Coveted Looks</h2>
        <div className="flex space-x-4 overflow-x-auto pb-4">
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
      </div>

      {/* Influencers Section (Instagram Reels Style) */}
      <div>
        <h2 className="text-lg font-bold mb-4">Follow Our Top Influencers</h2>
        <div className="space-y-8">
          {influencers.map((influencer) => (
            <div
              key={influencer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* Profile Section */}
              <div className="flex items-center p-4 space-x-4">
                <img
                  src={influencer.profileImage}
                  alt={influencer.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <h3 className="text-md font-semibold">{influencer.name}</h3>
              </div>

              {/* Videos (Instagram Reels-style) */}
              <div>
                {influencer.categories.map((category) => (
                  <div key={category.categoryId} className="relative mb-4">
                    <div className="mb-2 px-4">
                      <p className="text-sm font-semibold text-gray-800">
                        Category:{" "}
                        {
                          categories.find(
                            (cat) => cat.id === category.categoryId
                          ).name
                        }
                      </p>
                    </div>

                    {/* Video Display (like Instagram Reels) */}
                    <div className="relative group">
                      <video
                        src={category.video}
                        controls
                        className="w-full h-96 object-cover rounded-lg"
                      />
                      <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="bg-black bg-opacity-50 text-white px-4 py-2 rounded-md">
                          Play Video
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudioPage;

import React from "react";
import { useParams } from "react-router-dom";
import { influencers } from "../data/influencer";

const ModelPage = () => {
  const { id } = useParams(); // Get the influencer ID from the URL
  const influencer = influencers.find((inf) => inf.id === parseInt(id)); // Find the influencer by ID

  // If no influencer is found, show a message
  if (!influencer) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-pink-50">
        <h1 className="text-xl font-bold text-red-500">Influencer not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-pink-50 flex justify-center min-h-screen p-4">
      {/* Mobile Boundary */}
      <div className="bg-white w-full max-w-md shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow-md sticky top-0 z-10">
          <div className="px-4 py-3 flex justify-between items-center border-b">
            <h1 className="text-lg font-bold">{influencer.name}</h1>
            <button className="text-gray-500 hover:text-red-500">⚙️</button>
          </div>
        </header>

        {/* Main Content */}
        <main className="p-4">
          {/* Influencer Banner */}
          <div className="relative">
            <img
              src={influencer.bannerImage || "https://via.placeholder.com/600"}
              alt={`${influencer.name} banner`}
              className="w-full h-40 object-cover"
            />
            <img
              src={influencer.profileImage || "https://via.placeholder.com/150"}
              alt={`${influencer.name} profile`}
              className="w-24 h-24 rounded-full border-4 border-white absolute -bottom-12 left-4"
            />
          </div>

          {/* Influencer Info */}
          <div className="mt-16 p-4 text-center">
            <h2 className="text-lg font-bold">{influencer.name}</h2>
            <p className="text-gray-600 text-sm">{influencer.description}</p>
            <div className="mt-4 flex justify-around text-sm text-gray-700">
              <div>
                <p className="font-bold">{influencer.followers}</p>
                <p>Followers</p>
              </div>
              <div>
                <p className="font-bold">{influencer.posts}</p>
                <p>Posts</p>
              </div>
            </div>
          </div>

          {/* Posts Section */}
          <div className="mt-4 p-4">
            <h3 className="text-sm font-bold mb-3">Posts</h3>
            {/* Check if posts exist */}
            <div className="flex flex-col space-y-4">
              {influencer.posts?.length > 0 ? (
                influencer.posts.map((post, index) => (
                  <div key={index} className="bg-gray-100 p-4 rounded shadow-sm">
                    <p className="text-sm text-gray-800">{post}</p>
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-600">No posts available.</p>
              )}
            </div>
          </div>

          {/* Reels Section */}
          <div className="mt-4 p-4">
            <h3 className="text-sm font-bold mb-3">Reels</h3>
            {/* Check if reels exist */}
            <div className="space-y-4">
              {influencer.reels?.length > 0 ? (
                influencer.reels.map((reel, index) => (
                  <div
                    key={index}
                    className="bg-gray-100 rounded-lg shadow-sm overflow-hidden"
                  >
                    <video
                      controls
                      className="w-full h-48 object-cover"
                      src={reel.videoUrl}
                    >
                      Your browser does not support the video tag.
                    </video>
                    <div className="p-2">
                      <p className="text-xs text-gray-600">{reel.caption}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-xs text-gray-600">No reels available.</p>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ModelPage;

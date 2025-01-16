import React from 'react';

const ReelsSection = ({ influencers }) => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-6">Reels</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 container mx-auto px-4">
        {influencers.map((influencer) => (
          <div
            key={influencer.id}
            className="bg-white shadow-md rounded-lg overflow-hidden border"
          >
            <div className="relative">
              <img
                src={influencer.profileImage}
                alt={influencer.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-0 bg-black bg-opacity-50 text-white px-4 py-2 w-full text-center">
                <h3 className="font-bold text-lg">{influencer.name}</h3>
              </div>
            </div>
            <div className="p-4">
              {influencer.categories.map((category, index) => (
                <div key={index} className="mb-4">
                  <h4 className="font-semibold text-lg mb-2">
                    {category.categoryId === 1 && 'Ethnic'}
                    {category.categoryId === 2 && 'Party'}
                    {category.categoryId === 3 && 'Casual'}
                    {category.categoryId === 4 && 'Athleisure'}
                  </h4>
                  <video
                    controls
                    className="w-full h-48 bg-gray-200 rounded-lg mb-2"
                  >
                    <source src={category.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <ul className="space-y-2">
                    {category.product_category.map((product) => (
                      <li
                        key={product.id}
                        className="border rounded-lg p-2 shadow-sm bg-gray-50"
                      >
                        <h5 className="font-medium">{product.productName}</h5>
                        <p className="text-sm text-gray-600">
                          {product.brandName} - ₹{product.price}{' '}
                          <span className="line-through text-gray-400">
                            ₹{product.originalPrice}
                          </span>
                        </p>
                        <p className="text-xs text-gray-500">{product.gender}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReelsSection;

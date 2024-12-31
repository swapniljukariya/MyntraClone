import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Array of dynamic images and content
const slidesData = [
  {
    id: 1,
    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRICeS5g3diNu9n-s9y1dxxQaz7jBTFTXdwQA&s", // Replace with dynamic image URL
    heading: "U.S. POLO ASSN.",
    subText: "Up To 50% Off",
    buttonText: "Explore",
  },
  {
    id: 2,
    imageUrl: "https://via.placeholder.com/1200x500?text=Slide+2",
    heading: "Top Brands",
    subText: "Latest Trends and Discounts",
    buttonText: "Explore Now",
  },
  {
    id: 3,
    imageUrl: "https://via.placeholder.com/1200x500?text=Slide+3",
    heading: "Mega Sale",
    subText: "Up To 70% Off on All Products",
    buttonText: "Shop Now",
  },
];

const HeroSection = () => {
  return (
    <div className="w-full">
      {/* Swiper Container */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={true} // Arrows for navigation
        pagination={{ clickable: true }} // Dots pagination
        autoplay={{ delay: 3000, disableOnInteraction: false }} // Auto slide
        loop={true} // Infinite slide loop
        className="h-[500px]"
      >
        {/* Dynamically render Swiper slides */}
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.imageUrl})` }}
            >
              <div className="absolute inset-0 flex items-center justify-start px-16">
                <div className="text-black">
                  <h2 className="text-4xl font-bold mb-2">{slide.heading}</h2>
                  <p className="text-lg">{slide.subText}</p>
                  <button className="mt-4 px-6 py-3 bg-black text-white font-semibold hover:bg-gray-800">
                    {slide.buttonText}
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;

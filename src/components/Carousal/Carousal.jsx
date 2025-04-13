/** @format */

import React, { useState } from "react";
import {
  Coffee1,
  Coffee2,
  Coffee3Jpg,
  Coffee3Webp,
  Coffee4Jpg,
  Coffee4Webp,
  Coffee5,
  Coffee6,
  Coffee7,
  Coffee8,
} from "../../assets"; // Import all images from assets
const Carousal = () => {
  const [current, setCurrent] = useState(0);

  // Array of images
  const images = [
    Coffee1,
    Coffee2,
    Coffee3Jpg,
    Coffee3Webp,
    Coffee4Jpg,
    Coffee4Webp,
    Coffee5,
    Coffee6,
    Coffee7,
    Coffee8,
  ];

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-[400px] object-cover transition duration-500"
      />

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70 outline-none focus:outline-none"
      >
        &#8592;
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-2 rounded-full hover:bg-opacity-70 outline-none focus:outline-none"
      >
        &#8594;
      </button>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousal;

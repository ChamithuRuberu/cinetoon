"use client";
import Link from "next/link";
import { useState } from "react";

const Slideshow = () => {
    const slides = [
        {
            image: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(15).jpg",
            title: "Beautiful Landscape",
            description: "A beautiful view of the mountains during sunset.",
        },
        {
            image: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(22).jpg",
            title: "Serene Beach",
            description: "A calm beach with clear blue waters.",
        },
        {
            image: "https://tecdn.b-cdn.net/img/Photos/Slides/img%20(23).jpg",
            title: "City Lights",
            description: "A vibrant cityscape with bright lights at night.",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
        );
    };

    return (
        <div className="p-5 sm:p-10 md:p-20 flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 md:mb-8 text-center">
        FEATURED PROJECTS
      </h1>
      <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="relative w-full flex-shrink-0">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-0 left-0 w-full sm:w-1/2 h-full bg-black/50 text-white p-5 sm:p-10">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold pt-10 sm:pt-20">
                  {slide.title}
                </h2>
                <p className="text-xs sm:text-sm md:text-base pt-2">
                  {slide.description}
                </p>
                <p className="text-sm sm:text-lg pt-6 sm:pt-12 text-center text-gray-400">
                  | CINETOON
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-r-md hover:bg-black"
        >
          &lt;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black/50 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-l-md hover:bg-black"
        >
          &gt;
        </button>
      </div>
      <h1 className="font-bold pt-10 sm:pt-15 md:pt-20 text-gray-500 text-3xl sm:text-4xl md:text-5xl">
        FOLLOW US
      </h1>
      <Link
        className="text-base sm:text-lg font-bold pt-2 text-customBlue"
        href="https://www.instagram.com/cinetoon_studio?igsh=djdrcHB2N3Z3aTB5"
        target="_blank"
        rel="noopener noreferrer"
      >
        @cinetoon_studio
      </Link>
    </div>
    );
};

export default Slideshow;

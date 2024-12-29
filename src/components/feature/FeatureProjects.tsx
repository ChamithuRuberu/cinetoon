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
        <div className="p-20 flex flex-col items-center justify-center bg-gray-50">
            <h1 className="text-5xl font-bold text-gray-900 mb-8">FEATURED PROJECTS</h1>
            <div className="relative w-full max-w-4xl mx-auto overflow-hidden">
                {/* Slides */}
                <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="relative w-full flex-shrink-0"
                        >
                            <img
                                src={slide.image}
                                alt={slide.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute top-0 left-0 w-1/2 h-full bg-black/50 text-white p-10">
                                <h2 className="text-3xl font-extrabold pt-20">{slide.title}</h2>
                                <p className="text-sm pt-2">{slide.description}</p>
                                <p className="text-lg pt-12 text-center text-gray-400"> | CINETOON</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-r-md hover:bg-black"
                >
                    &lt;
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 text-white px-4 py-2 rounded-l-md hover:bg-black"
                >
                    &gt;
                </button>
            </div>
            <h1 className="text-5xl font-bold pt-20 text-gray-500">FOLLOW US</h1>
            <Link
                className="text-lg font-bold pt-2 text-customBlue"
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

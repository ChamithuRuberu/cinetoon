"use client";

import React, { useEffect, useRef } from "react";

export default function Technologies() {
    const sliderRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const slider = sliderRef.current;

        if (!slider) return; // Ensure slider exists before accessing properties

        let scrollAmount = 0;
        const speed = 1; // Adjust speed as needed
        const sliderWidth = slider.scrollWidth / 2; // Half the duplicated content width

        function scrollImages() {
            if (slider) {
                scrollAmount -= speed;

                // Reset to the other side if the scroll reaches half the slider width
                if (Math.abs(scrollAmount) >= sliderWidth) {
                    scrollAmount = 0;
                }

                slider.style.transform = `translateX(${scrollAmount}px)`;
                requestAnimationFrame(scrollImages);
            }
        }

        scrollImages();
    }, []);

    return (
        <div className="mx-auto mt-20 overflow-hidden">
           
            <div className="image-slider">
                <div
                    ref={sliderRef}
                    className="image-slider-wrapper flex flex-nowrap m-2"
                    style={{
                        display: "inline-flex",
                        willChange: "transform", // Optimization for smoother animations
                    }}
                >
                    {/* Original Images */}
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-0">
                        <img
                            src="/ae.png"
                            alt="Technology 1"
                            className="w-14 h-14 object-cover"
                        />
                    </div>
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-0">
                        <img
                            src="/ai.png"
                            alt="Technology 2"
                            className="w-14 h-14 object-cover"
                        />
                    </div>
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/pr.png"
                            alt="Technology 3"
                            className="w-14 h-14 object-cover"
                        />
                    </div>
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/images/tech4.png"
                            alt="Technology 4"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/images/tech5.png"
                            alt="Technology 5"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/images/tech6.png"
                            alt="Technology 6"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Duplicate Images for Seamless Loop */}
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/ae.png"
                            alt="Technology 1 Duplicate"
                            className="w-14 h-14 object-cover"
                        />
                    </div>
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/ai.png"
                            alt="Technology 2 Duplicate"
                            className="w-14 h-14 object-cover"
                        />
                    </div><div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/ae.png"
                            alt="Technology 1 Duplicate"
                            className="w-14 h-14 object-cover"
                        />
                    </div>
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/ai.png"
                            alt="Technology 2 Duplicate"
                            className="w-14 h-14 object-cover"
                        />
                    </div><div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/ae.png"
                            alt="Technology 1 Duplicate"
                            className="w-14 h-14 object-cover"
                        />
                    </div>
                    <div className="image-item flex-shrink-0 w-48 h-48 mx-2">
                        <img
                            src="/ai.png"
                            alt="Technology 2 Duplicate"
                            className="w-14 h-14 object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

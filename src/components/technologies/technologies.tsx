"use client"
import React from 'react';

export default function Technologies() {
  return (
      <div className="container mx-auto m-10">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">TECHNOLOGIES</h2>
        <div className="image-slider">
          <div className="image-slider-wrapper">
            <div className="image-item">
              <img src="image1.jpg" alt="Technology 1" />
            </div>
            <div className="image-item">
              <img src="image2.jpg" alt="Technology 2" />
            </div>
            <div className="image-item">
              <img src="image3.jpg" alt="Technology 3" />
            </div>
            <div className="image-item">
              <img src="image4.jpg" alt="Technology 4" />
            </div>
            <div className="image-item">
              <img src="image5.jpg" alt="Technology 5" />
            </div>
            <div className="image-item">
              <img src="image6.jpg" alt="Technology 6" />
            </div>
            <div className="image-item">
              <img src="image7.jpg" alt="Technology 7" />
            </div>
            <div className="image-item">
              <img src="image8.jpg" alt="Technology 8" />
            </div>
            {/* Repeat the images to make the loop continuous */}
            <div className="image-item">
              <img src="image1.jpg" alt="Technology 1" />
            </div>
            <div className="image-item">
              <img src="image2.jpg" alt="Technology 2" />
            </div>
            <div className="image-item">
              <img src="image3.jpg" alt="Technology 3" />
            </div>
            <div className="image-item">
              <img src="image4.jpg" alt="Technology 4" />
            </div>
          </div>
        </div>
      </div>
  );
}

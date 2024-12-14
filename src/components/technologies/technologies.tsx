"use client"
import React from 'react';

export default function Technologies() {
    return (
        <div className="container mx-auto m-10">
            <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">TECHNOLOGIES</h2>
            <div className="image-slider">
                <div className="image-slider-wrapper  flex flex-1">
                    <div className="image-item">
                        <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                        <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                        <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                    
                    {/* Repeat the images to make the loop continuous */}
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                    <div className="image-item">
                    <img src="hero1.png" alt="Technology 1" />
                    </div>
                </div>
            </div>
        </div>
    );
}

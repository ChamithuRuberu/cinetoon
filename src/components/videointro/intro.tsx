"use client"
import React, { useRef, useState } from 'react'

export default function Intro() {
    const [progress] = useState(0);
    const iframeRef = useRef<HTMLIFrameElement | null>(null); 


    return (
        <div className="relative w-full container px-5 overflow-hidden rounded-xl mx-auto mt-10 max-w-6xl">
            <div className="relative group">
                <iframe
                    ref={iframeRef}
                    src="video.mp4"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-xl"
                    style={{ width: '100%', height: '400px' }} // Adjust height here
                ></iframe>
            </div>

            <div className="mt-4 cursor-pointer">
                <div className="relative w-full h-2 bg-gray-300 rounded-full">
                    <div
                        className="h-2 bg-blue-500 rounded-full transition-all duration-200"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

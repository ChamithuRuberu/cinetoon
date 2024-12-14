"use client"
import React, { useRef, useState } from 'react'

export default function Intro() {
    const [progress] = useState(0);
    const iframeRef = useRef<HTMLIFrameElement | null>(null); 

    const handleProgressClick = (e: React.MouseEvent) => {
    };
    return (
        <div className="relative w-full container px-5 overflow-hidden rounded-xl mx-auto mt-10 max-w-6xl">
            <div className="relative group">
                {/* Embedded YouTube video */}
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

            {/* Custom Progress Bar (not applicable to YouTube iframe) */}
            <div className="mt-4 cursor-pointer">
                <div className="relative w-full h-2 bg-gray-300 rounded-full" onClick={handleProgressClick}>
                    <div
                        className="h-2 bg-blue-500 rounded-full transition-all duration-200"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                {/* Duration and Current Time (for custom video player, not applicable to iframe) */}
            </div>
        </div>
    )
}

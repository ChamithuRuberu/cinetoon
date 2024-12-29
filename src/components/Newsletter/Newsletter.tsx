"use client";

import React from "react";

export default function Newsletter() {
  return (
    <div id="join-section" className="mt-10 relative z-10">
      <div className="mx-auto max-w-2xl py-16 md:py-24 px-4 sm:px-6 md:max-w-7xl lg:px-24 bg-blue-300 rounded-lg bg-newsletter">
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 xl:gap-x-8">

          {/* COLUMN-1 */}
          <div>
            <h3 className="text-3xl sm:text-5xl font-bold mb-3">Join Our Newsletter</h3>
            <h4 className="text-base sm:text-lg font-medium mb-7">
              Subscribe to our newsletter for discounts, promos, and more.
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
              <input
                type="email"
                name="q"
                className="py-4 text-sm w-full sm:w-2/3 text-black bg-white rounded-md pl-4"
                placeholder="Enter your email"
                autoComplete="off"
              />
              <button className="bg-gray-800 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded mt-4 sm:mt-0">
                Subscribe
              </button>
            </div>
          </div>

          {/* COLUMN-2 (Image) */}
          <div className="hidden sm:block">
            <div className="relative float-right sm:-mt-32">
              <img
                src="/Free.svg"
                alt="bgimg"
                className="w-32 sm:w-auto max-w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

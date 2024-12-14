"use client"
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function HeroSection() {

  return (
    <div className="relative min-h-screen w-full">
      <header className="grid !min-h-[26rem] bg-gray-800 p-4">
        <div className="container mx-auto mt-22 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2">
          <div className="col-span-1 text-white">
            <h1 color="white" className="text-4xl font-bold ">
              Transforming Ideas into Stunning <br /> Digital Realities
            </h1>
            <div className="relative pt-11 mx-auto max-w-7xl">
              <div className="flex">
                <div className="w-full md:max-w-xs lg:max-w-md">
                  <h4 className="text-2xl font-bold text-gray-200">
                    Bringing life to 2D animations, digital art, and web designs.
                  </h4>

                  <p className="mt-10 text-base font-bold text-white">Join the email list to:</p>
                  <ul className="mt-4 space-y-4">
                    <li className="flex items-center">
                      <span className="text-base"> 💸 </span>
                      <span className="flex-1 text-base font-medium  text-white ml-2.5"> Get 10 Web & Mobile UI Inspirations Every Week </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-base"> 🎁 </span>
                      <span className="flex-1 text-base font-medium  text-white ml-2.5"> Exclusive Discount on Design Resources </span>
                    </li>
                    <li className="flex items-center">
                      <span className="text-base"> ⌛️ </span>
                      <span className="flex-1 text-base font-medium  text-white ml-2.5"> 3 Random Subscribers will Get Featured on Emails </span>
                    </li>
                  </ul>
                  <div className="relative inline-flex mt-10 group">
                    <div className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>
                    <a
                      href="#"
                      className="relative inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                      role="button"
                    >
                      Join Cinetoon For Free
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <Image
            width={470}
            height={576}
            src="/hero1.png"
            alt="team work"
            className="col-span-1 my-10 h-full max-h-[30rem] -translate-y-22 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
          />
        </div>
      </header>

      <div className="mx-8 lg:mx-16 -mt-24 rounded-xl bg-white p-10 md:p-14 shadow-md">
        <div>
          <h2 color="blue-gray" className="mb-8 text-blue-300"></h2>
          <h2 className=" font-bold !text-gray-500 lg:w-5/12">
            Download our app to dive into a vast library of courses, tutorials, and study materials on a wide range of subjects - from programming and language learning to personal development and beyond.
          </h2>
        </div>
      </div>
      
    </div>
  );
}

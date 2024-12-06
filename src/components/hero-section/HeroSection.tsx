"use client"
import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  // State for mobile menu expansion

  return (
    <div className="relative">
      <section className="relative pb-12 bg-white pt-28 sm:pb-16 sm:pt-32 lg:pb-20 xl:pt-48 xl:pb-32">
        <div className="absolute inset-0">
          <Image
            className="hidden object-cover w-full h-full md:block"
            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/2/background.png"
            alt="Background"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex">
            <div className="w-full md:max-w-xs lg:max-w-md">
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">Transforming Ideas into Stunning Digital Realities</h1>
              <p className="mt-5 text-base font-normal leading-7 text-gray-500">Bringing life to 2D animations, digital art, and web designs.</p>

              <p className="mt-10 text-base font-bold text-gray-900">Join the email list to:</p>
              <ul className="mt-4 space-y-4">
                <li className="flex items-center">
                  <span className="text-base"> 💸 </span>
                  <span className="flex-1 text-base font-medium text-gray-900 ml-2.5"> Get 10 Web & Mobile UI Inspirations Every Week </span>
                </li>

                <li className="flex items-center">
                  <span className="text-base"> 🎁 </span>
                  <span className="flex-1 text-base font-medium text-gray-900 ml-2.5"> Exclusive Discount on Design Resources </span>
                </li>

                <li className="flex items-center">
                  <span className="text-base"> ⌛️ </span>
                  <span className="flex-1 text-base font-medium text-gray-900 ml-2.5"> 3 Random Subscriber will Get Featured on Emails </span>
                </li>
              </ul>

              <div className="relative inline-flex mt-10 group">
                <div className="absolute transitiona-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

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

        <div className="mt-12 md:hidden sm:mt-16">
          <Image
            className="object-cover w-full h-full"
            src="https://www.freepik.com/free-vector/hand-drawn-nft-style-ape-illustration_30875852.htm#fromView=search&page=1&position=24&uuid=71c872d7-117e-49b2-a4ea-07a115b52f99"
            alt="Background Mobile"
            layout="responsive"
            width={1440}
            height={960}
          />
        </div>
      </section>
    </div>
  );
}

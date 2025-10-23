import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className="w-full h-auto min-h-[362px]  lg:py-12">
        <div className="flex flex-col lg:flex-row  w-full max-w-7xl mx-auto px-4 lg:px-8">
          {/* Heading Section */}
          <div className="w-full lg:w-auto lg:max-w-[600px] h-auto lg:h-[226px] flex justify-center items-center  lg:mb-0">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-left mt-25 lg:mt-2 w-60 lg:w-auto lg:text-left leading-tight">
              The Digital World in Your Hands
            </h1>
          </div>
        </div>
        {/* Keep Scrolling Section */}
        <div className=" w-full lg:w-[100px] h-auto lg:h-[32px] mt-8 lg:mt-20 lg:ml-15 flex justify-center lg:justify-start">
          <p className="hidden lg:block text-lg lg:text-base  gap-2">
            Keep Scrolling
            {/* Optional: Add scrolling arrow animation */}
            <span className="hidden lg:inline-block animate-bounce">↓</span>
          </p>
        </div>
      </section>

      <section>
        <div className="w-full mt-15 flex flex-col justify-center items-center  lg:mt-15 ">
          {/* Part 1 */}
          <div className="w-full max-w-[1300px]   flex flex-col lg:flex-row justify-center items-center relative">
            <div className="relative w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142 mb-10 lg:mb-0 flex flex-col items-center">
              <span className="absolute animate-s mt-[-60px] left-10 sm:-top-8 sm:-left-12 lg:left-1 md:-top-5 md:-left-10 text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                01
              </span>

              <style>
                {`
                  @keyframes slideIn {
                    0% {
                      transform: translatex(20%);
                      opacity: 0;
                    }
                    25% {
                      transform: translatey(0);
                      opacity: 1;
                    }
                  }
                  .animate-s {
                    animation: slideIn 7.2s ease-out forwards;
                  }
                `}
              </style>

              <div className="relative group animate-slide-in">
                <Link to="/software">
                  {/* Image */}
                  <img
                    src="Landing-img1.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />

                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-0 group-hover:opacity-90 transition-all duration-500">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>

                <style>
                  {`
                      @keyframes slideIn {
                        0% {
                          transform: translateX(5%);
                          opacity: 0;
                        }
                        25% {
                          transform: translateX(0);
                          opacity: 1;
                        }
                      }
                      .animate-slide-in {
                        animation: slideIn 7.2s ease-out forwards;
                      }
                    `}
                </style>
              </div>
            </div>

            {/* Center line for Desktop */}
            <span className="hidden lg:block w-[1px] h-[550px] lg:mt-[-200px] bg-[#b08dff] mx-8"></span>

            {/* Part 2 */}
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142 mb-10 lg:mb-0 flex flex-col items-center">
              <div className="lg:right-40 absolute lg:top-[50%] ">
                <span className="absolute mt-[-10px] lg:mt-[-130px] left-10   text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                  02
                </span>
              </div>

              <div className="flex absolute lg:mt-60 mt-12 justify-center  items-center z-10  group  ">
                <Link to="/software">
                  <img
                    src="Landing-img2.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center Dot */}
            <div className="hidden lg:block w-[13px] h-[13px] bg-[#A47DCD] rounded-full mt-[-140px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* Second-Line */}

        <div className="w-full mt-80 flex flex-col justify-center items-center  lg:mt-0 ">
          {/* Part 1 */}
          <div className="w-full max-w-[1300px]   flex flex-col lg:flex-row justify-center items-center relative">
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142  mb-10 lg:mb-0 flex flex-col items-center">
              <span className="absolute mt-[-60px] left-10 sm:-top-8 sm:-left-12 lg:left-1 md:-top-5 md:-left-10 text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                03
              </span>
              <div className="relative group   ">
                <Link to="/software">
                  {/* Image */}
                  <img
                    src="Landing-img3.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover "
                  />

                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center line for Desktop */}
            <span className="hidden lg:block w-[1px] h-[550px] lg:mt-[-250px] bg-[#b08dff] mx-8"></span>

            {/* Part 2 */}
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142 mb-10 lg:mb-0 flex flex-col items-center">
              <div className="lg:right-40 absolute lg:top-[50%] ">
                <span className="absolute mt-[-10px] lg:mt-[-130px] left-10   text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                  04
                </span>
              </div>
              <div className="flex absolute lg:mt-60 mt-12 justify-center  items-center z-10 group">
                <Link to="/software">
                  <img
                    src="Landing-img4.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center Dot */}
            <div className="hidden lg:block w-[13px] h-[13px] bg-[#A47DCD] rounded-full mt-[-140px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* 3rd-Line */}
        <div className="w-full mt-80 flex flex-col justify-center items-center  lg:mt-0 ">
          {/* Part 1 */}
          <div className="w-full max-w-[1300px]   flex flex-col lg:flex-row justify-center items-center relative">
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142  mb-10 lg:mb-0 flex flex-col items-center">
              <span className="absolute mt-[-60px] left-10 sm:-top-8 sm:-left-12 lg:left-1 md:-top-5 md:-left-10 text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                05
              </span>
              <div className="relative group   ">
                <Link to="/software">
                  {/* Image */}
                  <img
                    src="Landing-img5.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover "
                  />

                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center line for Desktop */}
            <span className="hidden lg:block w-[1px] h-[550px] lg:mt-[-300px] bg-[#b08dff] mx-8"></span>

            {/* Part 2 */}
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142 mb-10 lg:mb-0 flex flex-col items-center">
              <div className="lg:right-40 absolute lg:top-[50%] ">
                <span className="absolute mt-[-10px] lg:mt-[-130px] left-10   text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10] group">
                  06
                </span>
              </div>
              <div className="flex absolute lg:mt-60 mt-12 justify-center  items-center z-10 group">
                <Link to="/software">
                  <img
                    src="Landing-img6.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center Dot */}
            <div className="hidden lg:block w-[13px] h-[13px] bg-[#A47DCD] rounded-full mt-[-140px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* 4Th-Line */}
        <div className="w-full mt-80 flex flex-col justify-center items-center  lg:mt-0 ">
          {/* Part 1 */}
          <div className="w-full max-w-[1300px]   flex flex-col lg:flex-row justify-center items-center relative">
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142  mb-10 lg:mb-0 flex flex-col items-center">
              <span className="absolute mt-[-60px] left-10 sm:-top-8 sm:-left-12 lg:left-1 md:-top-5 md:-left-10 text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                07
              </span>
              <div className="relative group   ">
                <Link to="/software">
                  {/* Image */}
                  <img
                    src="Landing-img7.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover "
                  />

                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center line for Desktop */}
            <span className="hidden lg:block w-[1px] h-[550px] lg:mt-[-350px] bg-[#b08dff] mx-8"></span>

            {/* Part 2 */}
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142 mb-10 lg:mb-0 flex flex-col items-center">
              <div className="lg:right-40 absolute lg:top-[50%] ">
                <span className="absolute mt-[-10px] lg:mt-[-130px] left-10   text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                  08
                </span>
              </div>
              <div className="flex absolute lg:mt-60 mt-12 justify-center  items-center z-10 group">
                <Link to="/software">
                  <img
                    src="Landing-img8.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center Dot */}
            <div className="hidden lg:block w-[13px] h-[13px] bg-[#A47DCD] rounded-full mt-[-140px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>

        {/* 5Th-Line */}
        <div className="w-full mt-80 flex flex-col justify-center items-center  lg:mt-0 ">
          {/* Part 1 */}
          <div className="w-full max-w-[1300px]   flex flex-col lg:flex-row justify-center items-center relative">
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142  mb-10 lg:mb-0 flex flex-col items-center">
              <span className="absolute mt-[-60px] left-10 sm:-top-8 sm:-left-12 lg:left-1 md:-top-5 md:-left-10 text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                09
              </span>
              <div className="relative group   animate-slide-in">
                <Link to="/software">
                  {/* Image */}
                  <img
                    src="Landing-img9.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover "
                  />

                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>

                  <style>
                    {`
                      @keyframes slideIn {
                        0% {
                          transform: translateX(5%);
                          opacity: 0;
                        }
                        25% {
                          transform: translateX(0);
                          opacity: 1;
                        }
                      }
                      .animate-slide-in {
                        animation: slideIn 7.2s ease-out forwards;
                      }
                    `}
                  </style>
                </Link>
              </div>
            </div>

            {/* Center line for Desktop */}
            <span className="hidden lg:block w-[1px] h-[550px] lg:mt-[-400px] bg-[#b08dff] mx-8"></span>

            {/* Part 2 */}
            <div className="relative  w-[371px] sm:w-4/5 md:w-2/3 lg:w-[650px] lg:h-142 mb-10 lg:mb-0 flex flex-col items-center">
              <div className="lg:right-40 absolute lg:top-[50%] ">
                <span className="absolute mt-[-10px] lg:mt-[-130px] left-10   text-6xl sm:text-7xl md:text-8xl font-bold bg-gradient-to-r from-[#dac0f6] to-[#b08dff] bg-clip-text text-transparent z-[-10]">
                  10
                </span>
              </div>
              <div className="flex absolute lg:mt-60 mt-12 justify-center  items-center z-10 group">
                <Link to="/software">
                  <img
                    src="Landing-img10.jpg"
                    alt="img"
                    className="rounded-2xl shadow-2xl w-full h-auto object-cover"
                  />
                  {/* Overlay + Text */}
                  <div className="absolute inset-0 bg-[hsl(258,85%,70%)] bg-opacity-60 flex justify-center items-center rounded-2xl opacity-4 group-hover:opacity-90 ">
                    <span className="text-black text-4xl font-semibold">
                      Technology
                    </span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Center Dot */}
            <div className="hidden lg:block w-[13px] h-[13px] bg-[#A47DCD] rounded-full mt-[-140px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
        </div>
      </section>

      <section className="w-full relative flex flex-col lg:flex-row items-center justify-center bg-gradient-to-l from-[#c1dbef] to-[#e2d6ef] py-12 lg:py-32  lg:mt-20 mt-80 overflow-hidden">
        {/* Text Section */}
        <div className="w-[50%] lg:w-[30%]  lg:ml-40 text-center   lg:text-left mb-10 lg:mb-0">
          <p className="text-[#8A8A8A] text-lg sm:text-xl">Blog Layout</p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-sans font-bold py-3 leading-snug">
            Tech Blog for Your Latest IT Updates
          </h1>
          <p className="text-base sm:text-lg py-4 text-gray-700">
            Share the latest from the IT field with a set of cutting-edge blog
            list layouts and diverse post single types.
          </p>

          <button className="border-2 border-[#b475f7] text-[#b475f7] hover:bg-[#b475f7] hover:text-white transition-all duration-300 rounded-md px-8 sm:px-12 py-3 mt-2">
            View More
          </button>
        </div>

        {/* Image Section */}
        <div className="relative w-[90%] lg:w-[60%] lg:ml-60 ml-15 flex flex-col items-center lg:items-end mx-auto overflow-hidden">
          {/* Top Image */}
          <img
            src="Landing-stacked-img1.jpg"
            alt="Top Image"
            className="w-[80%] sm:w-[80%] lg:w-[80%] rounded-xl shadow-lg object-cover transform transition-transform duration-[100ms] ease-out will-change-transform translate-y-[10px] motion-safe:animate-parallaxUp"
          />

          {/* Bottom Image */}
          <img
            src="Landing-stacked-img4-614x345.jpg"
            alt="Bottom Image"
            className="w-[60%] sm:w-[80%] lg:w-[70%] rounded-xl shadow-lg object-cover mt-[-4rem] mr-35 sm:mt-[-10rem] lg:mt-[-12rem] lg:mr-[250px] transform transition-transform duration-[100ms] ease-out will-change-transform translate-y-[-10px] motion-safe:animate-parallaxDown"
          />
        </div>
      </section>







      <section className="w-full relative bg-white flex flex-col-reverse lg:flex-row items-center justify-center py-12 lg:py-32    overflow-hidden">
        {/* Image Section */}
        <div
          className="relative w-[90%] lg:w-[60%] lg:ml-1 ml-15 flex flex-col items-center lg:items-end mx-auto "
          style={{ backgroundImage: "url('bg-img.png')" }}
        >
          {/* Top Image */}
          <img
            src="desktop-img.png"
            alt="Top Image"
            className="hidden lg:inline-block w-[80%] sm:w-[80%] lg:w-150 rounded-xl object-cover transform transition-transform duration-[100ms] ease-out will-change-transform translate-y-[10px] motion-safe:animate-parallaxUp"
          />

          {/* Bottom Image */}
          <img
            src="phone-img.png"
            alt="Bottom Image"
            className="w-30 h-80 sm:w-[80%] lg:w-60 lg:h-110 rounded-xl  object-cover mt-[-8rem] mr-18 sm:mt-[-10rem] lg:mt-[-21rem] lg:mr-[-5rem] transform transition-transform duration-[100ms] ease-out will-change-transform translate-y-[-10px] motion-safe:animate-parallaxDown"
          />
        </div>

        {/* Text Section */}
        <div className="w-[70%] lg:w-[20%]  lg:ml-20 text-center   lg:text-left mb-50 lg:mb-0">
          <h1 className="text-3xl sm:text-4xl  lg:text-5xl font-sans font-bold py-3 bg-gradient-to-r from-[#b08dff] to-[#dac0f6] bg-clip-text text-transparent">
            A Fully Flexible Website Design
          </h1>

          <button className="border-2 border-[#b475f7] text-[#b475f7] hover:bg-[#b475f7] hover:text-white transition-all duration-300 rounded-md px-8 sm:px-12 py-3 mt-2">
            View More
          </button>
        </div>
      </section>
    </>
  );
};

export default Home;

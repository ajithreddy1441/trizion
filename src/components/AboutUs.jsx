import React from 'react';
import { Play, CheckCircle } from 'lucide-react';

const AboutUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/banner-thumb-6-C81mVGdO.jpg')`
          }}
        ></div>

        {/* Purple Geometric Overlay */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-1/2 sm:w-1/3 h-full bg-gradient-to-r from-purple-600 to-purple-500 transform -skew-x-12 origin-top-left"></div>
          <div className="absolute top-0 left-24 sm:left-48 w-1/3 h-full bg-gradient-to-r from-purple-500 to-purple-400 transform -skew-x-12 origin-top-left opacity-80"></div>
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-3xl text-center sm:text-left mx-auto sm:mx-0">
              <div className="mb-8 flex justify-center sm:justify-start">
                <button className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300 group">
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white leading-tight mb-6">
                Innovative Tech<br />Solutions
              </h1>

              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl mx-auto sm:mx-0">
                Quisque quis ornare augue. Nulla sit amet arcu et ligula vel tortor iaculis vestibulum non ultrices eros.
              </p>

              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-lg hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
                Learn More
              </button>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-white rounded-full opacity-60 animate-pulse z-10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-purple-300 rounded-full opacity-80 animate-pulse delay-1000 z-10"></div>
        <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-white rounded-full opacity-40 animate-pulse delay-500 z-10"></div>
      </section>

      {/* About Company Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - Images */}
            <div className="relative h-72 sm:h-96 md:h-[500px] overflow-hidden">
              <div className="absolute top-0 left-0 rounded-3xl overflow-hidden shadow-2xl z-10 w-full h-full">
                <img
                  src="/company-thumb-2-CPYB7x8L.webp"
                  className="w-full h-full object-cover rounded-3xl"
                  alt="Team meeting"
                />
              </div>

              <div className="absolute top-20 right-4 sm:top-24 sm:right-6 md:top-32 md:right-8 z-20">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex items-center justify-center">
                  <img src="/about-logo.png" alt="Company logo" className="w-3/4 h-3/4 object-contain" />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="space-y-8 text-center lg:text-left flex flex-col items-center lg:items-start pt-4 sm:pt-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="text-[#5D3FD3] font-semibold text-sm sm:text-base flex items-center justify-center lg:justify-start">
                  <span className="w-6 sm:w-8 h-0.5 bg-[#5D3FD3] mr-3"></span>
                  About Our Company
                </div>

                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  <span className="text-transparent bg-clip-text bg-[#5D3FD3]">
                    We're Partner of Your<br />Innovations
                  </span>
                </h2>
              </div>

              <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 py-6">
                {[
                  "Best quality support",
                  "Serve the best",
                  "Money back guarantee",
                  "Trusted Professionals"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 lg:justify-start">
                    <CheckCircle className="w-6 h-6 text-[#5D3FD3] flex-shrink-0" />
                    <span className="text-gray-600 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <button className="bg-[#5D3FD3] text-white px-6 py-3 sm:px-10 sm:py-4 rounded-full font-bold text-sm sm:text-base tracking-wide hover:shadow-xl transform hover:scale-105 transition-all duration-300 uppercase">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
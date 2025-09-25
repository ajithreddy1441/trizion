import React from 'react';
import { CheckCircle } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Images */}
          <div className="relative h-72 sm:h-96 md:h-[500px] overflow-hidden">
            {/* Main Team Image */}
            <div className="absolute top-0 left-0 rounded-3xl overflow-hidden shadow-2xl z-10 w-full h-full">
              <img 
                src="/company-thumb-2-CPYB7x8L.webp" 
                className="w-full h-full object-cover rounded-3xl" 
                alt="Team meeting" 
              />
            </div>

            {/* Circular Badge - Top Right */}
            <div className="absolute top-20 right-4 sm:top-24 sm:right-6 md:top-32 md:right-8 z-20">
              <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white rounded-full shadow-xl flex items-center justify-center">
                <img src="/about-logo.png" alt="Company logo" className="w-3/4 h-3/4 object-contain" />
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8 pt-4 sm:pt-8 text-center lg:text-left flex flex-col items-center lg:items-start">
            {/* Header Section */}
            <div className="space-y-6">
              <div className="text-[#5D3FD3] font-semibold text-sm sm:text-base flex items-center">
                <span className="w-6 sm:w-8 h-0.5 bg-[#5D3FD3] mr-3"></span>
                About Our Company
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-[#5D3FD3]">
                  We're Partner of Your<br />Innovations
                </span>
              </h2>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even.
            </p>

            {/* Features Grid - Responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 py-6">
              {[
                "Best quality support",
                "Serve the best",
                "Money back guarantee",
                "Trusted Professionals"
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-[#5D3FD3] flex-shrink-0" />
                  <span className="text-gray-600 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4 sm:pt-6">
              <button className="bg-[#5D3FD3] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-sm sm:text-base tracking-wide hover:shadow-xl transform hover:scale-105 transition-all duration-300 uppercase">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
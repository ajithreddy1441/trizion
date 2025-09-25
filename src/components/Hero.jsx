import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#5D3FD3] mb-8">
          Trizion Digital Agency
        </h1>
        
        {/* Subtitle */}
        <p className="text-gray-600 text-lg md:text-xl max-w-4xl mx-auto mb-10">
          Empower your online presence with premium digital marketing services. Expand your reach, boost engagement, 
          and take your brand to the next level.
        </p>
        
        {/* CTA Button */}
        <button className="bg-[#5D3FD3] text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-base md:text-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
          Book Your Free Proposal Today
        </button>
      </div>
    </section>
  );
};

export default Hero;
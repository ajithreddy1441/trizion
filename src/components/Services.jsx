import React from 'react';
import { Play } from 'lucide-react';

const Services = () => {
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
          {/* Purple diagonal sections */}
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-purple-600 to-purple-500 transform -skew-x-12 origin-top-left"></div>
          <div className="absolute top-0 left-48 w-1/4 h-full bg-gradient-to-r from-purple-500 to-purple-400 transform -skew-x-12 origin-top-left opacity-80"></div>
          
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
            <div className="max-w-3xl">
              
              {/* Play Button */}
              <div className="mb-6 lg:mb-8">
                <button className="w-14 h-14 lg:w-16 lg:h-16 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors duration-300 group">
                  <Play className="w-6 h-6 lg:w-8 lg:h-8 text-white ml-1 group-hover:scale-110 transition-transform duration-300" />
                </button>
              </div>

              {/* Main Heading */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl font-bold text-white leading-tight mb-6">
                Innovative Tech<br />
                Solutions
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed mb-8 lg:mb-12 max-w-2xl">
                Quisque quis ornare augue. Nulla sit amet arcu et ligula vel tortor iaculis vestibulum non ultrices eros.
              </p>

              {/* Learn More Button */}
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 lg:px-8 lg:py-4 rounded-full font-semibold text-base lg:text-lg hover:from-purple-700 hover:to-purple-800 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide">
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
    
      {/* Services Sections */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Graphic Designing Section */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20 lg:mb-32">
            {/* Image Grid - Order first on mobile, second on lg+ */}
            <div className="order-2 lg:order-1 relative w-full">
              <div className="grid grid-cols-2 gap-3 sm:gap-4 h-64 sm:h-80 lg:h-96">
                {/* Top Left - RyzeTech Logo */}
                <div className="bg-black rounded-xl lg:rounded-2xl flex items-center justify-center p-4">
                  <div className="text-white">
                    <div className="flex items-center space-x-2 lg:space-x-3 mb-1 lg:mb-2">
                      <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white rounded-lg flex items-center justify-center">
                        <div className="w-3 h-3 lg:w-4 lg:h-4 bg-black transform rotate-45"></div>
                      </div>
                      <span className="text-sm lg:text-xl font-bold">RyzeTech</span>
                    </div>
                  </div>
                </div>

                {/* Top Right - Innovation Create */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl p-4 lg:p-6 flex flex-col justify-center">
                  <div className="text-white">
                    <div className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 rounded mb-2 lg:mb-4"></div>
                    <h3 className="text-sm lg:text-lg font-bold mb-1 lg:mb-2">Innovate</h3>
                    <h3 className="text-sm lg:text-lg font-bold">Create</h3>
                  </div>
                </div>

                {/* Bottom Left - Profile Card */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl p-3 lg:p-4 flex flex-col justify-end">
                  <div className="text-white">
                    <div className="w-8 h-8 lg:w-12 lg:h-12 bg-white/20 rounded-full mb-2 lg:mb-3"></div>
                    <h4 className="font-bold text-xs lg:text-sm">Andrey Knabbend</h4>
                    <p className="text-xs opacity-80">Product Designer</p>
                    <div className="mt-1 lg:mt-2">
                      <p className="text-xs opacity-60">EXPERIENCE</p>
                      <p className="text-xs opacity-80">Simplixo Dental</p>
                    </div>
                  </div>
                </div>

                {/* Bottom Right - Purple Abstract */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl lg:rounded-2xl relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 lg:w-20 lg:h-20 bg-purple-400/30 rounded-full"></div>
                  </div>
                  <div className="absolute bottom-3 left-3 lg:bottom-4 lg:left-4 text-white">
                    <div className="w-4 h-4 lg:w-6 lg:h-6 bg-white/20 rounded mb-1 lg:mb-2"></div>
                    <p className="text-xs">RyzeTech</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content - Order first on lg+, second on mobile */}
            <div className="order-1 lg:order-2 space-y-4 lg:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D3FD3]">
                Graphic Designing
              </h2>
              
              <h3 className="text-lg sm:text-xl text-gray-600 font-medium">
                Awe-Inspiring Logo Designs For Trendsetters
              </h3>
              
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                Think exquisite Logo designs that inspire and captivate. We design unique, memorable custom brand marks, ensuring your logo embodies your vision and resonates with your audience. Your brand comes to life with just a click!
              </p>
            </div>
          </div>

          {/* Web Development Section */}
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content - Order first on mobile and lg+ */}
            <div className="order-1 space-y-4 lg:space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#5D3FD3]">
                Web Development
              </h2>
              
              <h3 className="text-lg sm:text-xl text-gray-600 font-medium">
                Build your dream website with Tecnite's WordPress expertise.
              </h3>
              
              <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
                From custom designs to seamless functionality, we create powerful, user-friendly sites that help your business stand out and grow. We're tailoring pixels to perfection making your web shine!
              </p>
            </div>

            {/* Laptop Image - Order second on mobile, second on lg+ */}
            <div className="order-2 relative w-full">
              <div className="bg-gradient-to-br from-gray-800 to-black rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
                {/* Laptop Screen */}
                <div className="bg-gray-900 rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-3 lg:mb-4">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg h-32 sm:h-40 lg:h-48 flex items-center justify-center relative overflow-hidden">
                    {/* Website Content Mockup */}
                    <div className="text-white text-center">
                      <h3 className="text-xl sm:text-2xl font-bold mb-1 lg:mb-2">RADIANT</h3>
                      <p className="text-xs sm:text-sm opacity-80">PALETTE PRODUCTION</p>
                      <div className="mt-2 lg:mt-4 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full mx-auto flex items-center justify-center">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Abstract Background Elements */}
                    <div className="absolute top-2 left-2 lg:top-4 lg:left-4 w-8 h-8 lg:w-16 lg:h-16 bg-purple-400/20 rounded-full"></div>
                    <div className="absolute bottom-2 right-2 lg:bottom-4 lg:right-4 w-6 h-6 lg:w-12 lg:h-12 bg-cyan-400/20 rounded-full"></div>
                    <div className="absolute top-1/2 right-4 lg:right-8 w-4 h-4 lg:w-8 lg:h-8 bg-white/10 rounded-full"></div>
                  </div>
                </div>
                
                {/* Laptop Base */}
                <div className="h-3 lg:h-4 bg-gradient-to-r from-gray-700 to-gray-600 rounded-b-xl lg:rounded-b-2xl"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-2 -left-2 lg:-bottom-4 lg:-left-4 w-16 h-16 lg:w-24 lg:h-24 bg-purple-100 rounded-full opacity-20"></div>
              <div className="absolute -top-2 -right-2 lg:-top-4 lg:-right-4 w-12 h-12 lg:w-16 lg:h-16 bg-blue-100 rounded-full opacity-30"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
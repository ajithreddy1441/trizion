import React from 'react';
import { Settings, Monitor, TrendingUp, Shield } from 'lucide-react';

const Offer = () => {
  const services = [
    {
      id: 1,
      title: "Digital Marketing",
      description: "Lorem Ipsum has been the industry text ever since then.",
      icon: TrendingUp,
      delay: "0s"
    },
    {
      id: 2,
      title: "Product Development",
      description: "Lorem Ipsum has been the industry text ever since then.",
      icon: Monitor,
      delay: "1s"
    },
    {
      id: 3,
      title: "UI/UX Designing", 
      description: "Lorem Ipsum has been the industry text ever since then.",
      icon: Settings,
      delay: "2s"
    },
    {
      id: 4,
      title: "Security System",
      description: "Lorem Ipsum has been the industry text ever since then.",
      icon: Shield,
      delay: "3s"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-100 to-gray-300 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-20 w-24 h-24 sm:w-32 sm:h-32 bg-purple-600 rounded-full"></div>
        <div className="absolute bottom-40 right-16 sm:right-32 w-16 h-16 sm:w-24 sm:h-24 bg-blue-600 rounded-full"></div>
        <div className="absolute top-1/2 right-1/4 w-12 h-12 sm:w-16 sm:h-16 bg-purple-400 rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="text-[#5D3FD3] font-semibold text-base sm:text-lg mb-4 flex items-center justify-center">
            <span className="w-6 sm:w-8 h-0.5 bg-[#5D3FD3] mr-3"></span>
            What We're Offering
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-[#5D3FD3] leading-tight max-w-3xl mx-auto">
            Dealing in all Professional IT Services
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="relative group cursor-pointer mb-5"
                style={{
                  animation: `slideInLeft 0.8s ease-out ${service.delay} both`
                }}
              >
                {/* Icon Circle */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 sm:w-28 sm:h-28 bg-black rounded-full flex items-center justify-center z-20 shadow-xl">
                  <IconComponent className="w-10 h-10 sm:w-12 sm:h-12 text-[#5D3FD3]" />
                </div>

                {/* Card */}
                <div className="bg-black rounded-2xl p-6 pt-16 h-72 sm:h-80 flex flex-col items-center text-center relative overflow-hidden group-hover:scale-105 transition-all duration-300">
                  <div className="pt-2 flex flex-col justify-center h-full">
                    <h3 className="text-white text-xl sm:text-2xl font-bold mb-4 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed px-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#5D3FD3] rounded-full opacity-60"></div>
                  <div className="absolute bottom-8 right-6 w-1 h-1 bg-[#5D3FD3] rounded-full opacity-40"></div>
                  <div className="absolute top-20 right-4 w-1.5 h-1.5 bg-[#5D3FD3] rounded-full opacity-50"></div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>

      <style>
        {`
          @keyframes slideInLeft {
            0% {
              transform: translateX(-100px);
              opacity: 0;
            }
            100% {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </section>
  );
};

export default Offer;
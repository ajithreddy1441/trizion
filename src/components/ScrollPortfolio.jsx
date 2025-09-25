import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ScrollPortfolio = () => {
  const scrollRef = useRef(null);

  const portfolioItems = [
    {
      id: 1,
      bgGradient: "from-gray-900 via-purple-900 to-black",
      content: (
        <img src="project_banner1.jpg" alt="" />
      )
    },
    {
      id: 2,
      content: (
        <img src="project_banner2.jpg" alt="" />
      )
    },
    {
      id: 3,
      content: (
        <img src="project_banner3.jpg" alt="" />
      )
    },
    {
      id: 4,
      content: (
        <img src="project_banner4.jpg" alt="" />
      )
    },
    {
      id: 5,
      content: (
        <img src="project_banner5.jpg" alt="" />
      )
    },
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = 350;
      current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-gray-100 to-gray-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Portfolio Container */}
        <div className="relative">
          {/* Scroll Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-200"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button
            onClick={() => scroll('right')}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-gray-50 transition-all duration-200"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Scrollable Portfolio Grid */}
          <div
            ref={scrollRef}
            className="flex overflow-x-auto scrollbar-hide space-x-6 pb-4 px-4 sm:px-8 md:px-12 lg:px-16"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 w-80 h-96 relative group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-2xl"
              >
                {item.content}
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          <div className="w-8 h-2 rounded-full bg-purple-600"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
          <div className="w-2 h-2 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </section>
  );
};

export default ScrollPortfolio;
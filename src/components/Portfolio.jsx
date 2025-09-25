import React, { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterTabs = [
    'ALL',
    'WEB DESIGN', 
    'WEB DEVELOPMENT',
    'LOGO DESIGN',
    'UX/UI',
    'LARAVEL PROJECT'
  ];

  const portfolioItems = [
    // Web Design Projects
    {
      id: 1,
      category: 'WEB DESIGN',
      title: 'E-commerce Website Design',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 2,
      category: 'WEB DESIGN',
      title: 'Corporate Landing Page',
      image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 3,
      category: 'WEB DESIGN',
      title: 'Creative Portfolio Design',
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 4,
      category: 'WEB DESIGN',
      title: 'Restaurant Website',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop&auto=format'
    },
    
    // Web Development Projects
    {
      id: 5,
      category: 'WEB DEVELOPMENT',
      title: 'React Dashboard App',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 6,
      category: 'WEB DEVELOPMENT',
      title: 'Node.js API Backend',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 7,
      category: 'WEB DEVELOPMENT',
      title: 'Full Stack Web Application',
      image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 8,
      category: 'WEB DEVELOPMENT',
      title: 'Progressive Web App',
      image: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&h=600&fit=crop&auto=format'
    },

    // Logo Design Projects
    {
      id: 9,
      category: 'LOGO DESIGN',
      title: 'Tech Startup Logo',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 10,
      category: 'LOGO DESIGN',
      title: 'Brand Identity Design',
      image: 'https://images.unsplash.com/photo-1572044162444-ad60f128bdea?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 11,
      category: 'LOGO DESIGN',
      title: 'Creative Logo Collection',
      image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 12,
      category: 'LOGO DESIGN',
      title: 'Minimalist Logo Design',
      image: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=600&fit=crop&auto=format'
    },

    // UX/UI Projects
    {
      id: 13,
      category: 'UX/UI',
      title: 'Mobile App Interface',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 14,
      category: 'UX/UI',
      title: 'Dashboard UI Design',
      image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 15,
      category: 'UX/UI',
      title: 'User Experience Design',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 16,
      category: 'UX/UI',
      title: 'Interactive Prototype',
      image: 'https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?w=800&h=600&fit=crop&auto=format'
    },

    // Laravel Projects
    {
      id: 17,
      category: 'LARAVEL PROJECT',
      title: 'E-commerce Platform',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 18,
      category: 'LARAVEL PROJECT',
      title: 'CMS Development',
      image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 19,
      category: 'LARAVEL PROJECT',
      title: 'API Development',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=600&fit=crop&auto=format'
    },
    {
      id: 20,
      category: 'LARAVEL PROJECT',
      title: 'Web Application',
      image: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=800&h=600&fit=crop&auto=format'
    }
  ];

  const filteredItems = activeFilter === 'ALL' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-4">
            Portfolio
          </h2>
          <div className="flex justify-center items-center space-x-2 text-lg">
            <span className="text-gray-600 font-medium">MOST RECENT</span>
            <span className="w-8 h-0.5 bg-[#5D3FD3]"></span>
            <span className="text-[#5D3FD3] font-semibold">WORK</span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-6 py-3 text-sm font-medium transition-all duration-300 rounded-full ${
                activeFilter === tab
                  ? 'bg-[#5D3FD3] text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-[#5D3FD3] hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Current Filter Display */}
        <div className="mb-8 text-center">
          <p className="text-lg font-semibold text-gray-700">
            Showing: <span className="text-[#5D3FD3]">{activeFilter}</span> 
            <span className="text-gray-500 ml-2">({filteredItems.length} projects)</span>
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl mb-4"
            >
              <div className="relative overflow-hidden h-64 sm:h-72 md:h-80">
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <div className="absolute bottom-4 left-4 right-4 text-white text-center sm:text-left">
                    <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{item.title}</h3>
                    <span className="text-xs sm:text-sm bg-[#5D3FD3] px-2 sm:px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* View Icon */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/50">
                      <span className="text-white text-lg sm:text-xl font-bold">+</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">No projects found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
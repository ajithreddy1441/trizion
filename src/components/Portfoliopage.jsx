import React, { useState } from 'react';
import ScrollPortfolio from './ScrollPortfolio'; // Adjust path as needed
import Portfolio from './Portfolio'; // Adjust path as needed

const PortfolioPage = () => {
  const [activeSection, setActiveSection] = useState('featured'); // 'featured' or 'all'

  return (
    <div className="min-h-screen bg-[#5D3FD3]">
      {/* Navigation Tabs */}
      <div className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center">
            <div className="flex space-x-1 p-2 bg-gray-900/50 rounded-full my-4">
              <button
                onClick={() => setActiveSection('featured')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === 'featured'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                Featured Projects
              </button>
              <button
                onClick={() => setActiveSection('all')}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeSection === 'all'
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                All Projects
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative">
        {/* Featured Projects Section */}
        {activeSection === 'featured' && (
          <div className="animate-fade-in">
            <ScrollPortfolio />
          </div>
        )}

        {/* All Projects Section */}
        {activeSection === 'all' && (
          <div className="animate-fade-in">
            <Portfolio />
          </div>
        )}
      </div>

      
      {/* Smooth Scrolling Indicator */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

// Alternative version with tabs at the top (simpler layout)
const PortfolioPageSimple = () => {
  const [activeSection, setActiveSection] = useState('featured');

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Simple Tab Navigation */}
      <div className="bg-gray-800 border-b border-gray-700">
        <div className="max-w-7xl mx-auto">
          <div className="flex">
            <button
              onClick={() => setActiveSection('featured')}
              className={`flex-1 py-4 text-center font-medium transition-colors duration-200 ${
                activeSection === 'featured'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              Featured Projects
            </button>
            <button
              onClick={() => setActiveSection('all')}
              className={`flex-1 py-4 text-center font-medium transition-colors duration-200 ${
                activeSection === 'all'
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700'
              }`}
            >
              All Projects
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        {activeSection === 'featured' && <ScrollPortfolio />}
        {activeSection === 'all' && <Portfolio />}
      </div>
    </div>
  );
};

// Even simpler version with just a toggle button
const PortfolioPageMinimal = () => {
  const [showFeatured, setShowFeatured] = useState(true);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Toggle Button */}
      <div className="flex justify-center pt-8">
        <button
          onClick={() => setShowFeatured(!showFeatured)}
          className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200 shadow-lg"
        >
          Switch to {showFeatured ? 'All Projects' : 'Featured Projects'}
        </button>
      </div>

      {/* Content */}
      <div className="pt-4">
        {showFeatured ? <ScrollPortfolio /> : <Portfolio />}
      </div>
    </div>
  );
};

export default PortfolioPage; // Choose which version to export
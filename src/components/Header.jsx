import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' }
  ];

  return (
    <header className="w-full bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2">
              <img
                src="./src/assets/logo.jpg" 
                alt="Trizion Logo"
                className="h-10 w-10 object-cover rounded-full"
              />
              <h1 className="text-2xl font-bold text-[#5D3FD3]">
                TRIZION
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`px-3 py-2 text-sm font-bold transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-[#5D3FD3] border-b-2 border-[#5D3FD3]'
                    : 'text-[#5D3FD3] hover:text-[#5D3FD3] hover:border-b-2 hover:border-[#5D3FD3]'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Us Button - Desktop */}
          <div className="hidden md:block flex-shrink-0">
            <Link to="/contact">
              <button className="px-6 py-2 text-sm font-bold text-[#5D3FD3] bg-white border-2 border-[#5D3FD3] rounded-full hover:bg-[#5D3FD3] hover:text-white transition-all duration-200">
                CONTACT US
              </button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-[#5D3FD3] focus:outline-none focus:text-[#5D3FD3]"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-[#5D3FD3] bg-blue-50'
                    : 'text-gray-600 hover:text-[#5D3FD3] hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full px-4 py-2 text-sm font-medium text-[#5D3FD3] bg-white border-2 border-[#5D3FD3] rounded-full hover:bg-[#5D3FD3] hover:text-white transition-all duration-200">
                  CONTACT US
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
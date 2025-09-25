import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Send, ChevronUp } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-200 relative">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Link to="/">
                <h3 className="text-2xl font-bold text-[#5D3FD3]">TRIZION</h3>
              </Link>
            </div>
            <p className="text-gray-600 leading-relaxed mb-6">
              We work with a passion of taking challenges and creating new ones in advertising sector.
            </p>
          </div>

          {/* Page Links */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 relative">
              Page Links
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#5D3FD3] transform translate-y-2"></span>
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#5D3FD3] transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about-us" className="text-gray-600 hover:text-[#5D3FD3] transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#5D3FD3] transition-colors duration-200">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-[#5D3FD3] transition-colors duration-200">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-[#5D3FD3] transition-colors duration-200">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <p className="text-gray-600 leading-relaxed">
                Signup for our latest news & articles. We won't give you spam mails.
              </p>
            </div>
            <div className="flex">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-l-lg focus:outline-none focus:border-[#5D3FD3] transition-colors duration-200"
              />
              <button
                onClick={handleSubscribe}
                className="bg-[#5D3FD3] text-white px-4 py-3 rounded-r-lg hover:bg-[#4a2fc1] transition-colors duration-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-semibold text-gray-800 mb-6 relative">
              Contact
              <span className="absolute bottom-0 left-0 w-8 h-0.5 bg-[#5D3FD3] transform translate-y-2"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-[#5D3FD3] mt-1 flex-shrink-0" />
                <span className="text-gray-600">+95 | 8934 | 7385</span>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-[#5D3FD3] mt-1 flex-shrink-0" />
                <span className="text-gray-600">trizion@company.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#5D3FD3] mt-1 flex-shrink-0" />
                <span className="text-gray-600">92 Parlon Golden Road Street New York, USA</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-[#5D3FD3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-center">
            <p className="text-white text-center">
              © All Copyright 2025 by Trizion
            </p>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute bottom-6 right-6 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-gray-300"
        aria-label="Scroll to top"
      >
        <ChevronUp className="w-6 h-6 text-[#5D3FD3]" />
      </button>
    </footer>
  );
};

export default Footer;
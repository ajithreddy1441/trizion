import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <section className="relative min-h-screen bg-cover bg-center bg-fixed overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('./video-bg-D9JV4-IR.jpg')"
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Left Side - Text */}
            <div className="text-white space-y-8 text-center lg:text-left">
              <div className="space-y-6">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Grow Your Business<br />
                  Against All Odds!
                </h1>
                <p className="text-base sm:text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Against all odds, your business will thrive. Defy the odds with Tecnite's game-changing digital marketing solutions. Amplify your brand, engage your audience, and take your business to the next level today!
                </p>
              </div>

              {/* Phone Button */}
              <div className="pt-2">
                <button className="bg-[#5D3FD3] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-base sm:text-lg transition-all duration-300">
                  +119894659
                </button>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="relative">
              <div className="bg-black bg-opacity-80 backdrop-blur-sm rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-800">
                {/* Form Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="text-[#5D3FD3] font-semibold text-base sm:text-lg mb-2 flex items-center justify-center">
                    <span className="w-6 sm:w-8 h-0.5 bg-[#5D3FD3] mr-3"></span>
                    Contact with Us
                  </div>
                  <h2 className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
                    Write Email Now
                  </h2>
                </div>

                {/* Form Fields */}
                <div className="space-y-5 sm:space-y-6">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-5 py-3 sm:px-6 sm:py-4 bg-transparent border-2 border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className="w-full px-5 py-3 sm:px-6 sm:py-4 bg-transparent border-2 border-gray-600 rounded-full text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300"
                  />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write a Message"
                    rows={5}
                    className="w-full px-5 py-3 sm:px-6 sm:py-4 bg-transparent border-2 border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors duration-300 resize-none"
                  ></textarea>
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#5D3FD3] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-full font-bold text-base sm:text-lg hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl uppercase tracking-wide"
                  >
                    Send a Message
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-blue-500 rounded-full opacity-60 animate-pulse"></div>
      <div className="absolute bottom-32 left-32 w-3 h-3 bg-purple-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
      <div className="absolute top-1/3 right-20 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse delay-500"></div>
    </section>
  );
};

export default Contact;
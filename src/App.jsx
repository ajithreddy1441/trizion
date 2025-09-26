// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import ScrollPortfolio from './components/ScrollPortfolio';
import About from './components/About';
import AboutUs from './components/AboutUs'; 
import Services from './components/Services';
import Offer from './components/Offer';
import Portfolio from './components/Portfolio'; 
import Contact from './components/Contact';
import Footer from './components/Footer';
import PortfolioPage from './components/Portfoliopage';

// Home component that contains all your main sections
const Home = () => {
  return (
    <>
      <Hero />
      <ScrollPortfolio />
      <About />
      <Offer />
      <Portfolio />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Main content area that changes based on route */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/services" element={<Services />} /> 
            <Route path="/portfolio" element={<PortfolioPage />} /> 
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
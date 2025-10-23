import React from 'react';
import Logo from './logo.png';


const Header = () => {
  const scrollToId = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    else window.location.hash = id;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
            <div className="w-44 h-44 md:w-20 md:h-10 rounded-lg overflow-hidden flex items-center justify-center bg-white p-1">
              <img src={Logo} alt="EMAGE logo" className="w-full h-full object-contain" />
          </div>
        
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" onClick={(e) => scrollToId(e, 'home')} className="text-gray-700 hover:text-emerald-600 transition">Home</a>
          <a href="#about" onClick={(e) => scrollToId(e, 'about')} className="text-gray-700 hover:text-emerald-600 transition">About</a>
          <a href="#services" onClick={(e) => scrollToId(e, 'services')} className="text-gray-700 hover:text-emerald-600 transition">Services</a>
          <a href="#contact" onClick={(e) => scrollToId(e, 'contact')} className="text-gray-700 hover:text-emerald-600 transition">Contact Us</a>
        </div>
        
        <button
          onClick={(e) => scrollToId(e, 'contact')}
          className="bg-[#FF7A59] hover:bg-emerald-600 text-white px-6 py-2 rounded-full transition-colors duration-200 cursor-pointer focus:outline-none"
          aria-label="Get started"
        >
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Header;

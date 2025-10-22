import React from 'react';


const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">E</span>
          </div>
          <span className="text-xl font-bold text-gray-900">EMAGE</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Home</a>
          <a href="#" className="text-gray-700 hover:text-emerald-600 transition">About</a>
          <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Services</a>
          <a href="#" className="text-gray-700 hover:text-emerald-600 transition">Contact Us</a>
        </div>
        
        <button className="bg-coral-500 hover:bg-coral-600 text-white px-6 py-2 rounded-full transition" style={{backgroundColor: '#FF7A59'}}>
          Get Started
        </button>
      </nav>
    </header>
  );
};

export default Header;

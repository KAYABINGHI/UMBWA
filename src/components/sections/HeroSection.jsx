import React from 'react';
// using external image instead of lucide Heart icon
import StatCard from '../cards/StatCard';
import MentalBro from './Mental health-bro.svg';

const HeroSection = () => {
  return (
    <section id="home" className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
            Healthy Minds, Happy Lives <span className="text-coral-500" style={{color: '#FF7A59'}}>Mental Health Consultancy</span>
          </h1>
          <p className="text-gray-600 mb-8 text-lg">
            Expert guidance and support for your mental well-being journey. Our experienced consultants are here to help you achieve emotional balance and personal growth.
          </p>
          <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full transition text-lg" style={{backgroundColor: '#FF7A59'}}>
            Book Now
          </button>
        </div>
        
        <div className="relative">
          <div className="w-full h-72 md:h-150  rounded-3xl overflow-hidden flex items-center justify-center">
            <img src={MentalBro} alt="mental bro" className="max-w-full max-h-full object-contain" />
          </div>
        </div>
      </div>
      
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
        <StatCard number="8+" label="Years of Experience" />
        <StatCard number="122+" label="Certified Consultants" />
        <StatCard number="563+" label="Happy Clients" />
        <StatCard number="232+" label="Success Stories" />
      </div>
    </section>
  );
};

export default HeroSection;
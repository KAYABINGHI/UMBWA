import React from 'react';
import { Heart } from 'lucide-react';
import StatCard from '../cards/StatCard';

const HeroSection = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
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
          <div className="w-full h-96 bg-emerald-100 rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <Heart className="w-24 h-24 text-emerald-600 mx-auto mb-4" />
              <div className="space-y-2">
                <div className="w-32 h-32 bg-white rounded-2xl mx-auto shadow-lg"></div>
              </div>
            </div>
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
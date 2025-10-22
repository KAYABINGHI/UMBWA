import React from 'react';
import Globalization from './Globalization-amico-1.svg';

const DiscoverSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative h-96  rounded-3xl overflow-hidden flex items-center justify-center">
          <img src={Globalization} alt="globalization" className="max-w-full max-h-full object-contain p-6" />
        </div>
        
        <div>
          <p className="text-emerald-600 font-semibold mb-2">ABOUT US</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Discover the Faces Behind Our Mental Health Consultancy
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Our team of dedicated professionals brings together diverse expertise in psychology, counseling, and holistic wellness. We're passionate about creating safe spaces where healing and growth can flourish.
          </p>
          <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full transition" style={{backgroundColor: '#FF7A59'}}>
            Read More
          </button>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
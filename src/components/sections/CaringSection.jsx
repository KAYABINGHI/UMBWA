import React from 'react';

const CaringSection = () => {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-emerald-600 font-semibold mb-2">CARING</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Caring for Your Mental Health Get to Know Our Services
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            We offer comprehensive mental health support designed to meet you where you are. From initial consultations to ongoing therapy, our services are crafted with care and expertise.
          </p>
          <button className="bg-coral-500 hover:bg-coral-600 text-white px-8 py-3 rounded-full transition" style={{backgroundColor: '#FF7A59'}}>
            Learn More
          </button>
        </div>
        
        <div className="relative h-96 bg-gray-200 rounded-3xl">
          {/* Decorative checkerboard pattern */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
            {[...Array(16)].map((_, i) => (
              <div key={i} className={`${i % 2 === 0 ? 'bg-gray-900' : 'bg-white'}`}></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaringSection;
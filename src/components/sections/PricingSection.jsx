import React from 'react';
import PricingCard from '../cards/PricingCard';

const PricingSection = () => {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-emerald-600 font-semibold mb-2">PRICE</p>
          <h2 className="text-4xl font-bold text-gray-900">
            Choose of Mental Health Consultation Package for Your Needs
          </h2>
        </div>
        
        <div className="space-y-6">
          <PricingCard
            title="Basic"
            price="$8.99"
            period="/ mo"
            description="Perfect for getting started with mental health support"
          />
          
          <PricingCard
            title="Standard"
            price="$16.99"
            period="/ mo"
            description="Comprehensive support for ongoing mental wellness"
          />
          
          <PricingCard
            title="Premium"
            price="$39.99"
            period="/ mo"
            description="Full access to all services and priority scheduling"
          />
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
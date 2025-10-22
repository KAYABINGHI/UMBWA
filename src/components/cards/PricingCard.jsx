import React from 'react';
import { CheckCircle } from 'lucide-react';

const PricingCard = ({ title, price, period, description }) => {
  return (
    <div className="border-2 border-gray-200 rounded-2xl p-6 flex items-center justify-between hover:border-emerald-600 transition">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 border-2 border-gray-300 rounded-lg flex items-center justify-center">
          <CheckCircle className="w-6 h-6 text-gray-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </div>
      </div>
      <div className="text-right">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold text-gray-900">{price}</span>
          <span className="text-gray-600 ml-1">{period}</span>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
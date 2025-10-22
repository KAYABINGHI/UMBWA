import React from 'react';

const StatCard = ({ number, label }) => {
  return (
    <div className="bg-emerald-600 text-white p-6 rounded-2xl text-center">
      <div className="text-4xl font-bold mb-2">{number}</div>
      <div className="text-emerald-100 text-sm uppercase tracking-wide">{label}</div>
    </div>
  );
};

export default StatCard;
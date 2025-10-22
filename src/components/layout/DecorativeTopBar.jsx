import React from 'react';

const DecorativeTopBar = () => {
  return (
    <div className="w-full h-16 flex">
      {/* Left checkered section */}
      <div className="w-32 grid grid-cols-4 grid-rows-2">
        {[...Array(8)].map((_, i) => (
          <div key={i} className={`${(Math.floor(i / 4) + (i % 4)) % 2 === 0 ? 'bg-gray-900' : 'bg-white'}`}></div>
        ))}
      </div>
      
      {/* Middle white section */}
      <div className="flex-1 bg-white"></div>
      
      {/* Right checkered section */}
      <div className="w-32 grid grid-cols-4 grid-rows-2">
        {[...Array(8)].map((_, i) => (
          <div key={`right-${i}`} className={`${(Math.floor(i / 4) + (i % 4)) % 2 === 0 ? 'bg-gray-900' : 'bg-white'}`}></div>
        ))}
      </div>
    </div>
  );
};

export default DecorativeTopBar;


import React from 'react';

const Logo = ({ size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-xs',
    md: 'w-10 h-10 text-sm',
    lg: 'w-16 h-16 text-lg',
    xl: 'w-24 h-24 text-3xl'
  };

  return (
    <div className={`flex items-center justify-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg ${sizeClasses[size]}`}>
      <span className="text-white font-bold">LOGO</span>
    </div>
  );
};

export default Logo;
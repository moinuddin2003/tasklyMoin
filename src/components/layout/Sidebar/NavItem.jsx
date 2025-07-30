import React from 'react';

const NavItem = ({ item, isActive, onClick }) => {
  const Icon = item.icon;
  
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
        isActive 
          ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
          : 'text-gray-700 hover:bg-gray-100/80 hover:text-gray-900'
      }`}
    >
      <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
      <span className="font-medium">{item.name}</span>
      {item.name === 'Tasks' && (
        <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
      )}
    </button>
  );
};

export default NavItem;

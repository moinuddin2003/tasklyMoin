import React from 'react';

const DashboardHeader = () => {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Dashboard Features
        </h1>
        <p className="text-gray-600 mt-1">Track progress across all features and tasks</p>
      </div>
      <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-xl">
        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
        <span className="text-sm text-blue-700 font-medium">Tasks Active</span>
      </div>
    </div>
  );
};

export default DashboardHeader;
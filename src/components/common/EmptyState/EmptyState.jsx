import React from 'react';
import { Clock } from 'lucide-react';

const EmptyState = ({ 
  icon: Icon = Clock, 
  title = "Coming Soon", 
  description = "This feature is currently under development." 
}) => {
  return (
    <div className="text-center py-20">
      <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-6">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default EmptyState;
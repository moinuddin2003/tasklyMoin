import React from 'react';

const FeatureCardHeader = ({ feature }) => {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {feature.name}
      </h3>
      <div className="flex space-x-1">
        {feature.colors.map((color, index) => (
          <div key={index} className={`w-3 h-3 rounded-full ${color} shadow-sm`}></div>
        ))}
      </div>
    </div>
  );
};

const FeatureCardAssignee = ({ feature }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="text-2xl">{feature.avatar}</div>
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900">{feature.assignee}</div>
        <div className="text-xs text-gray-500">Last activity...</div>
      </div>
    </div>
  );
};

const FeatureCardProgress = ({ feature }) => {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
        <span>Progress</span>
        <span>{feature.progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 shadow-sm"
          style={{ width: `${feature.progress}%` }}
        ></div>
      </div>
    </div>
  );
};

const FeatureCard = ({ feature }) => {
  return (
    <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]">
      <FeatureCardHeader feature={feature} />
      <FeatureCardAssignee feature={feature} />
      <FeatureCardProgress feature={feature} />
    </div>
  );
};

export default FeatureCard;
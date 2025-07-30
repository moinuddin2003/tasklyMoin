import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesGrid = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {features.map((feature) => (
        <FeatureCard key={feature.id} feature={feature} />
      ))}
    </div>
  );
};

export default FeaturesGrid;
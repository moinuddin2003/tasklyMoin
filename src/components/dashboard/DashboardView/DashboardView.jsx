import React from 'react';
import DashboardHeader from './DashboardHeader';
import FeaturesGrid from './FeaturesGrid';

const DashboardView = ({ features }) => {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <FeaturesGrid features={features} />
    </div>
  );
};

export default DashboardView;

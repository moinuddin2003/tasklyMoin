import React from 'react';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const ProjectHealthBadge = ({ health, healthColor }) => {
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg ${healthColor}`}>
      {health === 'At Risk' && <AlertTriangle className="w-3 h-3 mr-1" />}
      {health === 'Good' && <CheckCircle2 className="w-3 h-3 mr-1" />}
      {health}
    </span>
  );
};

export default ProjectHealthBadge;
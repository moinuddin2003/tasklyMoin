import React from 'react';
import ProjectHealthBadge from './ProjectHealthBadge';
const ProjectRow = ({ project }) => {
  return (
    <tr className="hover:bg-gray-50/50 transition-colors group">
      <td className="px-6 py-4">
        <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
          {project.name}
        </div>
      </td>
      <td className="px-6 py-4 text-gray-700">{project.owner}</td>
      <td className="px-6 py-4">
        <ProjectHealthBadge health={project.health} healthColor={project.healthColor} />
      </td>
      <td className="px-6 py-4 text-gray-700">{project.startDate}</td>
      <td className="px-6 py-4 text-gray-700">{project.endDate}</td>
    </tr>
  );
};

export default ProjectRow;
import React from 'react';
import ProjectsHeader from './ProjectsHeader';
import ProjectsTable from './ProjectsTable';

const ProjectsView = ({ projects }) => {
  return (
    <div className="space-y-6">
      <ProjectsHeader projectCount={projects.length} />
      <ProjectsTable projects={projects} />
    </div>
  );
};

export default ProjectsView;
"use client"

import { useState } from "react"
import { Plus, Filter, ChevronDown, X } from "lucide-react"
import Button from "../../common/Button"
import EmptyState from "../../common/EmptyState"

const ProjectsControls = () => {
  const [showModal, setShowModal] = useState(false)

  const handleCreateProject = () => {
    setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className="flex items-center space-x-3">
        <Button variant="secondary">
          <span className="text-sm text-gray-700">List View</span>
          <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
        </Button>
        <Button variant="secondary" icon={Filter}>
          Filter
        </Button>
        <Button variant="primary" icon={Plus} onClick={handleCreateProject}>
          Create Project
        </Button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal} />

          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl border border-white/20 max-w-md w-full mx-4">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>

          <EmptyState />
          </div>
        </div>
      )}
    </>
  )
}

const ProjectsHeader = ({ projectCount = 3 }) => {
  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Projects ({projectCount})
        </h1>
        <p className="text-gray-600 mt-1">Manage and track your active projects</p>
      </div>
      <ProjectsControls />
    </div>
  )
}

export default ProjectsHeader



// import React from 'react';
// import { Plus, Filter, ChevronDown } from 'lucide-react';
// import Button from '../../common/Button';

// const ProjectsControls = () => {
//   return (
//     <div className="flex items-center space-x-3">
//       <Button variant="secondary">
//         <span className="text-sm text-gray-700">List View</span>
//         <ChevronDown className="w-4 h-4 text-gray-500 ml-2" />
//       </Button>
//       <Button variant="secondary" icon={Filter}>
//         Filter
//       </Button>
//       <Button variant="primary" icon={Plus}>
//         Create Project
//       </Button>
//     </div>
//   );
// };

// const ProjectsHeader = ({ projectCount = 3 }) => {
//   return (
//     <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//       <div>
//         <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
//           Projects ({projectCount})
//         </h1>
//         <p className="text-gray-600 mt-1">Manage and track your active projects</p>
//       </div>
//       <ProjectsControls />
//     </div>
//   );
// };

// export default ProjectsHeader;
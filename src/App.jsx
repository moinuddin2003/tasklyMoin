
import React, { useState } from 'react';

// Layout Components
import DashboardLayout from './components/layout/DashboardLayout';

// Auth Components
import LoginPage from './components/auth/LoginPage';

// View Components
import ProjectsView from './components/projects/ProjectsView';
import DashboardView from './components/dashboard/DashboardView';
import EmptyState from './components/common/EmptyState';

// Data & Hooks
import { projects, features, navItems } from './data/mockData';
import { useAuth } from './hooks/useAuth';

const App = () => {
  // Authentication
  const {
    isLoggedIn,
    loginForm,
    setLoginForm,
    isLoading,
    handleLogin
  } = useAuth();

  // Navigation State
  const [currentView, setCurrentView] = useState('projects');
  const [selectedNav, setSelectedNav] = useState('Projects');
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Event Handlers
  const handleNavClick = (item) => {
    setSelectedNav(item.name);
    setCurrentView(item.view);
    setShowMobileMenu(false);
  };

  // Render View Content
  const renderViewContent = () => {
    switch (currentView) {
      case 'projects':
        return <ProjectsView projects={projects} />;
      case 'dashboard':
        return <DashboardView features={features} />;
      default:
        return <EmptyState />;
    }
  };

  // Main Render
  if (!isLoggedIn) {
    return (
      <LoginPage
        loginForm={loginForm}
        setLoginForm={setLoginForm}
        onLogin={handleLogin}
        isLoading={isLoading}
      />
    );
  }

  return (
    <DashboardLayout
      showMobileMenu={showMobileMenu}
      setShowMobileMenu={setShowMobileMenu}
      selectedNav={selectedNav}
      onNavClick={handleNavClick}
      navItems={navItems}
    >
      {renderViewContent()}
    </DashboardLayout>
  );
};

export default App;


// import React, { useState, useEffect } from 'react';

// import { 
//   Menu, 
//   Plus, 
//   Filter, 
//   ChevronDown, 
//   User, 
//   BarChart3, 
//   MessageSquare, 
//   FileText, 
//   Users, 
//   Bell,
//   Search,
//   Calendar,
//   TrendingUp,
//   CheckCircle2,
//   AlertTriangle,
//   Clock
// } from 'lucide-react';

// const ProjectDashboard = () => {
//   const [currentView, setCurrentView] = useState('projects');
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [selectedNav, setSelectedNav] = useState('Projects');
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
//   const [loginForm, setLoginForm] = useState({ email: '', password: '' });
//   const [isLoading, setIsLoading] = useState(false);

//   const projects = [
//     {
//       id: 1,
//       name: 'Dashboard Features',
//       owner: 'Carter Kenter',
//       health: 'At Risk',
//       startDate: 'Sep 2 2024',
//       endDate: 'Aug 30 2025',
//       healthColor: 'bg-gradient-to-r from-yellow-400 to-orange-500'
//     },
//     {
//       id: 2,
//       name: 'Sales Data Analytics',
//       owner: 'Carter Kenter',
//       health: 'Good',
//       startDate: 'Oct 7 2024',
//       endDate: 'Sep 30 2025',
//       healthColor: 'bg-gradient-to-r from-green-400 to-emerald-500'
//     },
//     {
//       id: 3,
//       name: 'Project Name',
//       owner: 'Carter Kenter',
//       health: 'Good',
//       startDate: 'Dec 2 2024',
//       endDate: 'Nov 30 2025',
//       healthColor: 'bg-gradient-to-r from-green-400 to-emerald-500'
//     }
//   ];

//   const features = [
//     {
//       id: 1,
//       name: 'Feature 1',
//       assignee: 'Assignee Name',
//       avatar: '👨‍💼',
//       progress: 75,
//       colors: ['bg-blue-500', 'bg-orange-400']
//     },
//     {
//       id: 2,
//       name: 'Feature 2',
//       assignee: 'Trisha Tran',
//       avatar: '👩‍💻',
//       progress: 90,
//       colors: ['bg-blue-500', 'bg-green-400']
//     },
//     {
//       id: 3,
//       name: 'Feature 3',
//       assignee: 'Nancy Noo',
//       avatar: '👩‍🎨',
//       progress: 85,
//       colors: ['bg-blue-500', 'bg-green-400']
//     },
//     {
//       id: 4,
//       name: 'Feature 4',
//       assignee: 'Jamal Jackson',
//       avatar: '👨‍🔧',
//       progress: 45,
//       colors: ['bg-gray-400', 'bg-gray-300']
//     },
//     {
//       id: 5,
//       name: 'Feature 5',
//       assignee: 'Trisha Tran',
//       avatar: '👩‍💻',
//       progress: 60,
//       colors: ['bg-gray-400', 'bg-gray-300']
//     },
//     {
//       id: 6,
//       name: 'Feature 6',
//       assignee: 'Nancy Noo',
//       avatar: '👩‍🎨',
//       progress: 30,
//       colors: ['bg-gray-400', 'bg-gray-300']
//     },
//     {
//       id: 7,
//       name: 'Feature 7',
//       assignee: 'Jamal Jackson',
//       avatar: '👨‍🔧',
//       progress: 55,
//       colors: ['bg-gray-400', 'bg-gray-300']
//     },
//     {
//       id: 8,
//       name: 'Feature 8',
//       assignee: 'Trisha Tran',
//       avatar: '👩‍💻',
//       progress: 40,
//       colors: ['bg-gray-400', 'bg-gray-300']
//     },
//     {
//       id: 9,
//       name: 'Test Features',
//       assignee: 'Nancy Noo',
//       avatar: '👩‍🎨',
//       progress: 20,
//       colors: ['bg-gray-400', 'bg-gray-300']
//     }
//   ];

//   const navItems = [
//     { name: 'Projects', icon: BarChart3, view: 'projects' },
//     { name: 'Tasks', icon: CheckCircle2, view: 'dashboard' },
//     { name: 'Status Updates', icon: TrendingUp, view: 'status' },
//     { name: 'Reports', icon: FileText, view: 'reports' },
//     { name: 'Users', icon: Users, view: 'users' },
//     { name: 'Chat', icon: MessageSquare, view: 'chat' }
//   ];

//   const handleLogin = () => {
//     if (!loginForm.email || !loginForm.password) return;
    
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoggedIn(true);
//       setCurrentView('projects');
//       setIsLoading(false);
//     }, 1500);
//   };

//   const handleNavClick = (item) => {
//     setSelectedNav(item.name);
//     setCurrentView(item.view);
//     setShowMobileMenu(false);
//   };

//   // Enhanced login page
//   if (!isLoggedIn) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
//         <div className="w-full max-w-6xl mx-auto">
//           <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/20">
//             <div className="flex flex-col lg:flex-row min-h-[600px]">
//               {/* Login Form */}
//               <div className="flex-1 p-8 lg:p-12 flex items-center justify-center">
//                 <div className="w-full max-w-md">
//                   <div className="text-center mb-8">
//                     <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl mb-6 shadow-lg">
//                       <BarChart3 className="w-8 h-8 text-white" />
//                     </div>
//                     <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-2">
//                       Welcome Back
//                     </h1>
//                     <p className="text-gray-600">Sign in to your account to continue</p>
//                   </div>

//                   <div className="space-y-6">
//                     <div className="space-y-4">
//                       <div>
//                         <div className="block text-sm font-medium text-gray-700 mb-2">
//                           Email Address
//                         </div>
//                         <input
//                           type="email"
//                           value={loginForm.email}
//                           onChange={(e) => setLoginForm({...loginForm, email: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
//                           placeholder="Enter your email"
//                         />
//                       </div>
//                       <div>
//                         <div className="block text-sm font-medium text-gray-700 mb-2">
//                           Password
//                         </div>
//                         <input
//                           type="password"
//                           value={loginForm.password}
//                           onChange={(e) => setLoginForm({...loginForm, password: e.target.value})}
//                           className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
//                           placeholder="Enter your password"
//                         />
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between text-sm">
//                       <button type="button" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
//                         Register
//                       </button>
//                       <button type="button" className="text-gray-600 hover:text-gray-700 transition-colors">
//                         Forgot Password?
//                       </button>
//                     </div>

//                     <button
//                       onClick={handleLogin}
//                       disabled={isLoading}
//                       className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
//                     >
//                       {isLoading ? (
//                         <div className="flex items-center justify-center">
//                           <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin mr-2"></div>
//                           Signing In...
//                         </div>
//                       ) : (
//                         'SIGN IN'
//                       )}
//                     </button>
//                   </div>
//                 </div>
//               </div>

//               {/* Logo Section */}
//               <div className="flex-1 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 p-8 lg:p-12 flex items-center justify-center relative overflow-hidden">
//                 <div className="absolute inset-0 bg-black/10"></div>
//                 <div className="relative z-10 text-center text-white">
//                   <div className="inline-flex items-center justify-center w-24 h-24 bg-white/20 backdrop-blur-sm rounded-3xl mb-8 shadow-2xl">
//                     <span className="text-3xl font-bold">LOGO</span>
//                   </div>
//                   <h2 className="text-4xl font-bold mb-4">Project Management</h2>
//                   <p className="text-xl text-white/80">Streamline your workflow with powerful tools</p>
//                 </div>
//                 <div className="absolute -top-24 -right-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
//                 <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-white/10 rounded-full blur-3xl"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-blue-50">
//       {/* Header */}
//       <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
//         <div className="flex items-center justify-between px-4 lg:px-6 py-4">
//           <div className="flex items-center space-x-4">
//             <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg">
//               <span className="text-white font-bold text-sm">LOGO</span>
//             </div>
//             <div className="hidden lg:flex items-center space-x-2 bg-gray-100/80 rounded-xl px-4 py-2">
//               <Search className="w-4 h-4 text-gray-400" />
//               <input 
//                 type="text" 
//                 placeholder="Search projects..." 
//                 className="bg-transparent border-none outline-none text-sm w-64"
//               />
//             </div>
//           </div>
          
//           <div className="flex items-center space-x-4">
//             <button className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
//               <Bell className="w-5 h-5 text-gray-600" />
//               <div className="absolute -mt-1 -mr-1 w-2 h-2 bg-red-500 rounded-full"></div>
//             </button>
//             <div className="flex items-center space-x-3">
//               <div className="text-right hidden sm:block">
//                 <div className="text-sm font-semibold text-gray-900">Carter Kenter</div>
//                 <div className="text-xs text-gray-600">Project Manager</div>
//               </div>
//               <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg">
//                 <User className="w-5 h-5 text-white" />
//               </div>
//             </div>
//             <button 
//               className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
//               onClick={() => setShowMobileMenu(!showMobileMenu)}
//             >
//               <Menu className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="flex">
//         {/* Sidebar */}
//         <aside className={`${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 w-64 h-screen bg-white/80 backdrop-blur-xl border-r border-gray-200/50 transition-transform duration-300`}>
//           <nav className="p-4 space-y-2">
//             {navItems.map((item) => {
//               const Icon = item.icon;
//               const isActive = selectedNav === item.name;
//               return (
//                 <button
//                   key={item.name}
//                   onClick={() => handleNavClick(item)}
//                   className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
//                     isActive 
//                       ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg' 
//                       : 'text-gray-700 hover:bg-gray-100/80 hover:text-gray-900'
//                   }`}
//                 >
//                   <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-gray-500 group-hover:text-gray-700'}`} />
//                   <span className="font-medium">{item.name}</span>
//                   {item.name === 'Tasks' && (
//                     <div className="ml-auto w-2 h-2 bg-blue-400 rounded-full"></div>
//                   )}
//                 </button>
//               );
//             })}
//           </nav>
//         </aside>

//         {/* Main Content */}
//         <main className="flex-1 p-4 lg:p-8">
//           {currentView === 'projects' && (
//             <div className="space-y-6">
//               <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
//                 <div>
//                   <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
//                     Projects (3)
//                   </h1>
//                   <p className="text-gray-600 mt-1">Manage and track your active projects</p>
//                 </div>
//                 <div className="flex items-center space-x-3">
//                   <button className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
//                     <span className="text-sm text-gray-700">List View</span>
//                     <ChevronDown className="w-4 h-4 text-gray-500" />
//                   </button>
//                   <button className="flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
//                     <Filter className="w-4 h-4 text-gray-500" />
//                     <span className="text-sm text-gray-700">Filter</span>
//                   </button>
//                   <button className="flex items-center space-x-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl">
//                     <Plus className="w-4 h-4" />
//                     <span className="text-sm font-medium">Create Project</span>
//                   </button>
//                 </div>
//               </div>

//               <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden">
//                 <div className="overflow-x-auto">
//                   <table className="w-full">
//                     <thead className="bg-gray-50/80 backdrop-blur-sm">
//                       <tr>
//                         <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Project Name</th>
//                         <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Project Owner</th>
//                         <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Project Health</th>
//                         <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">Start Date</th>
//                         <th className="text-left px-6 py-4 text-sm font-semibold text-gray-900">End Date</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-100">
//                       {projects.map((project) => (
//                         <tr key={project.id} className="hover:bg-gray-50/50 transition-colors group">
//                           <td className="px-6 py-4">
//                             <div className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
//                               {project.name}
//                             </div>
//                           </td>
//                           <td className="px-6 py-4 text-gray-700">{project.owner}</td>
//                           <td className="px-6 py-4">
//                             <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white shadow-lg ${project.healthColor}`}>
//                               {project.health === 'At Risk' && <AlertTriangle className="w-3 h-3 mr-1" />}
//                               {project.health === 'Good' && <CheckCircle2 className="w-3 h-3 mr-1" />}
//                               {project.health}
//                             </span>
//                           </td>
//                           <td className="px-6 py-4 text-gray-700">{project.startDate}</td>
//                           <td className="px-6 py-4 text-gray-700">{project.endDate}</td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           )}

//           {currentView === 'dashboard' && (
//             <div className="space-y-6">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
//                     Dashboard Features
//                   </h1>
//                   <p className="text-gray-600 mt-1">Track progress across all features and tasks</p>
//                 </div>
//                 <div className="flex items-center space-x-2 bg-blue-50 px-4 py-2 rounded-xl">
//                   <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
//                   <span className="text-sm text-blue-700 font-medium">Tasks Active</span>
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {features.map((feature) => (
//                   <div key={feature.id} className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 group hover:scale-[1.02]">
//                     <div className="flex items-center justify-between mb-4">
//                       <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
//                         {feature.name}
//                       </h3>
//                       <div className="flex space-x-1">
//                         {feature.colors.map((color, index) => (
//                           <div key={index} className={`w-3 h-3 rounded-full ${color} shadow-sm`}></div>
//                         ))}
//                       </div>
//                     </div>
                    
//                     <div className="flex items-center space-x-3">
//                       <div className="text-2xl">{feature.avatar}</div>
//                       <div className="flex-1">
//                         <div className="text-sm font-medium text-gray-900">{feature.assignee}</div>
//                         <div className="text-xs text-gray-500">Last activity...</div>
//                       </div>
//                     </div>

//                     <div className="mt-4">
//                       <div className="flex items-center justify-between text-xs text-gray-600 mb-2">
//                         <span>Progress</span>
//                         <span>{feature.progress}%</span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
//                         <div 
//                           className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000 shadow-sm"
//                           style={{ width: `${feature.progress}%` }}
//                         ></div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {(currentView === 'status' || currentView === 'reports' || currentView === 'users' || currentView === 'chat') && (
//             <div className="text-center py-20">
//               <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl mb-6">
//                 <Clock className="w-8 h-8 text-blue-600" />
//               </div>
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">Coming Soon</h2>
//               <p className="text-gray-600">This feature is currently under development.</p>
//             </div>
//           )}
//         </main>
//       </div>

//       {/* Mobile Menu Overlay */}
//       {showMobileMenu && (
//         <div 
//           className="fixed inset-0 bg-black/50 z-30 lg:hidden"
//           onClick={() => setShowMobileMenu(false)}
//         ></div>
//       )}

//       {/* Footer */}
//       <footer className="bg-white/80 backdrop-blur-xl border-t border-gray-200/50 py-6 px-4 lg:px-8">
//         <div className="text-center text-gray-600 text-sm">
//           © 2024 Project Management Dashboard. All rights reserved.
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ProjectDashboard;
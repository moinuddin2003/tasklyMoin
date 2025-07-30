
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



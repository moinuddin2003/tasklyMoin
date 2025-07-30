import React from 'react';
import NavItem from './NavItem';

const Sidebar = ({ showMobileMenu, selectedNav, onNavClick, navItems }) => {
  return (
    <aside className={`${showMobileMenu ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 fixed lg:relative z-40 w-64 h-screen bg-white/80 backdrop-blur-xl border-r border-gray-200/50 transition-transform duration-300`}>
      <nav className="p-4 space-y-2">
        {navItems.map((item) => (
          <NavItem
            key={item.name}
            item={item}
            isActive={selectedNav === item.name}
            onClick={() => onNavClick(item)}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
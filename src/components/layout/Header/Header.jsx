import React from 'react';
import { Menu } from 'lucide-react';
import Logo from '../../common/Logo';
import SearchBar from './SearchBar';
import NotificationButton from './NotificationButton';
import UserProfile from './UserProfile';

const Header = ({ showMobileMenu, setShowMobileMenu }) => {
  return (
    <header className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
      <div className="flex items-center justify-between px-4 lg:px-6 py-4">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <Logo />
          <SearchBar />
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-4">
          <NotificationButton />
          <UserProfile />
          <button 
            className="lg:hidden p-2 hover:bg-gray-100 rounded-xl transition-colors"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <Menu className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
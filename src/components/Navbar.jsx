import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiMenu, FiUser, FiBell } from 'react-icons/fi';

const Navbar = ({ toggleSidebar }) => {
  const location = useLocation();

 
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white border-b border-gray-100 fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleSidebar}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
              aria-label="Open menu"
            >
              <FiMenu className="h-5 w-5" />
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0 flex items-center">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Electric Vehicle (EV)
              </h3>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            <Link 
              to="" 
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Dashboard
            </Link>
            <Link 
              to="#" 
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              About
            </Link>
            <Link 
              to="" 
              className="px-3 py-2 rounded-md text-sm font-medium transition-colors" 
            >
              Insights
            </Link>
          </div>


          <div className="flex items-center space-x-3">
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 relative">
              <FiBell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            
            <button className="p-2 rounded-full text-gray-500 hover:text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400">
              <FiUser className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
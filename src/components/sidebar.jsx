import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiX, FiHome, FiTrendingUp, FiPieChart, FiMap, FiDatabase, FiBarChart2, FiBattery, FiSettings } from 'react-icons/fi';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const location = useLocation();
  
  const navItems = [
    { to: "/", icon: <FiHome size={20} />, text: "Dashboard" },
    { to: "/ev-records", icon: <FiDatabase size={20} />, text: "Detailed EV Records" },
    { to: "/adoption-by-year", icon: <FiBarChart2 size={20} />, text: "Adoption by Year" },
    { to: "/adoption-over-time", icon: <FiTrendingUp size={20} />, text: "Adoption Trends" },
    { to: "/ev-type-distribution", icon: <FiPieChart size={20} />, text: "Type Distribution" },
    { to: "/statewise-distribution", icon: <FiMap size={20} />, text: "Statewise Data" },
    { to: "/top-manufacturers", icon: <FiBattery size={20} />, text: "Top Manufacturers" },
    { to: "/top-models", icon: <FiHome size={20} />, text: "Top Models" }
  ];

  

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {isOpen && (
        <div 
          className="fixed inset-0 bg-opacity-30 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* sidebar */}
      <aside 
        className={`fixed top-12 pb-10 h-[99%] left-0  w-64 bg-white shadow-lg transform transition-all duration-300 ease-in-out z-40
          ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >

        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-blue-600">Analytics</h2>
          <button 
            onClick={() => setIsOpen(false)}
            className="lg:hidden text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-100"
            aria-label="Close menu"
          >
            <FiX size={24} />
          </button>
        </div>
        <div className="h-full flex flex-col justify-between">
          <nav className="p-4">
            <ul className="space-y-1">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.to} 
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                      ${isActive(item.to) 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={`transition-colors duration-200
                      ${isActive(item.to) ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500'}`}>
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.text}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="border-t border-gray-100">
            <nav className="p-4">
              <ul className="space-y-1">
                {settingsItems.map((item, index) => (
                  <li key={`settings-${index}`}>
                    <Link 
                      to={item.to} 
                      className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 group
                        ${isActive(item.to) 
                          ? 'bg-blue-50 text-blue-600' 
                          : 'text-gray-600 hover:bg-blue-50 hover:text-blue-600'}`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className={`transition-colors duration-200
                        ${isActive(item.to) ? 'text-blue-500' : 'text-gray-400 group-hover:text-blue-500'}`}>
                        {item.icon}
                      </span>
                      <span className="font-medium">{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

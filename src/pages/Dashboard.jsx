import React from 'react';
import { FiActivity, FiBarChart2, FiMap, FiBattery, FiPieChart, FiTrendingUp } from 'react-icons/fi';
import TopEVManufacturers from './TopEVManufacturers';
import EVTypeDistribution from './EVTypeDistribution';
import EVAdoptionOverTime from './EVAdoptionOverTime';
import StatewiseDistribution from './StatewiseDistribution';
import DetailedEVRecords from './DetailedEVRecords';

const Dashboard = ({ data }) => {

  // Sample data - replace with your actual data
  const stats = [
    { title: "Total EVs", value: "24,581", change: "+12%", icon: <FiActivity className="text-blue-500" /> },
    { title: "Avg. Range", value: "243 mi", change: "+5%", icon: <FiBattery className="text-green-500" /> },
    { title: "States Covered", value: "42", change: "+3", icon: <FiMap className="text-purple-500" /> },
    { title: "Top Manufacturer", value: "Tesla", change: "38%", icon: <FiBarChart2 className="text-amber-500" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">EV Analytics Dashboard</h1>
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
              <FiActivity className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
 
          <div className="flex gap-3 flex-col">
            <div >
            <TopEVManufacturers data={data} />
            </div>
            <div >
              <EVAdoptionOverTime data={data} />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
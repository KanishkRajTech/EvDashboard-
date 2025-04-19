import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/sidebar';
import Filter from './components/filter';
import {Link} from 'react-router-dom'
import DetailedEVRecords from './pages/DetailedEVRecords';
import EVAdoptionByYear from './pages/EVAdoptionbyYear';
import EVAdoptionOverTime from './pages/EVAdoptionOverTime';
import EVTypeDistribution from './pages/EVTypeDistribution';
import StatewiseDistribution from './pages/StatewiseDistribution';
import TopEVManufacturers from './pages/TopEVManufacturers';
import TopModelsbyRange from './pages/TopModelsbyRange';
import { loadEVData } from './utils/dataLoader';
import Dashboard from './pages/Dashboard';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [evData, setEvData] = useState([]);
  const [filters, setFilters] = useState({ states: [], years: [], evTypes: [] });
  const [selectedFilters, setSelectedFilters] = useState({ state: '', yearMin: '', yearMax: '', evType: '' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadEVData();
      setEvData(data);

      const uniqueStates = [...new Set(data.map(d => d.State).filter(Boolean))].sort();
      const uniqueYears = [...new Set(data.map(d => d["Model Year"]).filter(Boolean))].sort((a, b) => a - b);
      const uniqueTypes = [...new Set(data.map(d => d["Electric Vehicle Type"]).filter(Boolean))];

      setFilters({ states: uniqueStates, years: uniqueYears, evTypes: uniqueTypes });
    };
    fetchData();
  }, []);


  const filteredData = evData.filter(d => {
    const matchesState = selectedFilters.state ? d.State === selectedFilters.state : true;
    const matchesType = selectedFilters.evType ? d["Electric Vehicle Type"] === selectedFilters.evType : true;
    const year = parseInt(d["Model Year"]);
    const matchesMin = selectedFilters.yearMin ? year >= parseInt(selectedFilters.yearMin) : true;
    const matchesMax = selectedFilters.yearMax ? year <= parseInt(selectedFilters.yearMax) : true;
    return matchesState && matchesType && matchesMin && matchesMax;
  });

  return (
    <div className=" bg-gray-100">
  <Navbar toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
  <div className="flex flex-1 pt-16">
    <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
    <main className={`flex-1 transition-all duration-300 ease-in-out ${isSidebarOpen ? '' : 'ml-0 lg:ml-64'}`}>
      <div className="p-4 md:p-8 max-w-7xl mx-auto space-y-6">
  
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-200">
          <Filter
            filters={filters}
            selectedFilters={selectedFilters}
            setSelectedFilters={setSelectedFilters}
          />
        </div>

        {/*routs*/}
        <div className="bg-white rounded-xl shadow-md p-4 md:p-6 border border-gray-200">
          <Routes>
          <Route path="/" element={<Dashboard data={filteredData} />} />

            <Route path="/ev-records" element={<DetailedEVRecords data={filteredData} />} />
            <Route path="/adoption-by-year" element={<EVAdoptionByYear data={filteredData} />} />
            <Route path="/adoption-over-time" element={<EVAdoptionOverTime data={filteredData} />} />
            <Route path="/ev-type-distribution" element={<EVTypeDistribution data={filteredData} />} />
            <Route path="/statewise-distribution" element={<StatewiseDistribution data={filteredData} />} />
            <Route path="/top-manufacturers" element={<TopEVManufacturers data={filteredData} />} />
            <Route path="/top-models" element={<TopModelsbyRange data={filteredData} />} />
            {/* Default routes */}
            <Route path="*" element={
              <div className="text-center py-12">
                <div className="inline-block p-6 bg-gray-50 rounded-full mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
                <p className="text-gray-500 mb-6">The page you're looking for doesn't exist.</p>
                <Link 
                  to="/ev-records" 
                  className="inline-flex items-center px-5 py-2.5 text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Back to Dashboard
                </Link>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </main>
  </div>
</div>
  );
};

export default App;

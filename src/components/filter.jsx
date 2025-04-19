import React from 'react';

const Filter = ({ filters, selectedFilters, setSelectedFilters }) => {
  const { states = [], years = [], evTypes = [] } = filters;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSelectedFilters(prev => ({ ...prev, [id]: value }));
  };

  const handleReset = () => {
    setSelectedFilters({ state: '', yearMin: '', yearMax: '', evType: '' });
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 ">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Filter Data</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-end">
        <div className="space-y-1">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">State</label>
          <select 
            id="state" 
            value={selectedFilters.state} 
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="">All States</option>
            {states.map(state => (
              <option key={state} value={state}>{state}</option>
            ))}
          </select>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-medium text-gray-700">Year Range</label>
          <div className="flex items-center gap-2">
            <select 
              id="yearMin" 
              value={selectedFilters.yearMin} 
              onChange={handleChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="">From</option>
              {years.map(year => (
                <option key={`min-${year}`} value={year}>{year}</option>
              ))}
            </select>
            <span className="text-gray-400">-</span>
            <select 
              id="yearMax" 
              value={selectedFilters.yearMax} 
              onChange={handleChange}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            >
              <option value="">To</option>
              {years.map(year => (
                <option key={`max-${year}`} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-1">
          <label htmlFor="evType" className="block text-sm font-medium text-gray-700">EV Type</label>
          <select 
            id="evType" 
            value={selectedFilters.evType} 
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          >
            <option value="">All Types</option>
            {evTypes.map(type => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div >
          <button 
            onClick={handleReset}
            className="bg-blue-500 w-full hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
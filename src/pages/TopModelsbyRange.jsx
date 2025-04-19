import React, { useState } from 'react';

const TopModelsByRange = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow ">
        <p className="text-gray-600">No EV data available to display</p>
      </div>
    );
  }


  const modelData = data.reduce((acc, ev) => {
    const model = ev.Model;
    const range = parseFloat(ev["Electric Range"]);

    if (model && !isNaN(range)) {
      if (!acc[model]) {
        acc[model] = { totalRange: 0, count: 0 };
      }
      acc[model].totalRange += range;
      acc[model].count += 1;
    }
    return acc;
  }, {});


















  const sortedModels = Object.keys(modelData).map((model) => {
    const { totalRange, count } = modelData[model];
    return {
      model,
      avgRange: totalRange / count,
      count,
    };
  });

  sortedModels.sort((a, b) => b.avgRange - a.avgRange); 
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(sortedModels.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = sortedModels.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Top Models by Range</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-medium">
            <tr>
              <th className="px-4 py-2 text-left">Model</th>
              <th className="px-4 py-2 text-left">Make</th>
              <th className="px-4 py-2 text-left">Avg Range</th>
              <th className="px-4 py-2 text-left">Count</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100 text-gray-800">
            {currentPageData.map((modelData, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{modelData.model || 'N/A'}</td>
                <td className="px-4 py-2">{modelData.make || 'N/A'}</td>
                <td className="px-4 py-2">{modelData.avgRange.toFixed(2) || 'N/A'}</td>
                <td className="px-4 py-2">{modelData.count || 'N/A'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* page control */}
      <div className="flex justify-between items-center mt-4">
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TopModelsByRange;

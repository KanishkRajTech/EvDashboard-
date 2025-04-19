import React, { useState } from 'react';

const ROWS_PER_PAGE = 50;

const EVAdoptionByYear = ({ data }) => {
  const [currentPage, setCurrentPage] = useState(1);

  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-gray-600">No EV adoption data available to display.</p>
      </div>
    );
  }

  const totalPages = Math.ceil(data.length / ROWS_PER_PAGE);
  const startIdx = (currentPage - 1) * ROWS_PER_PAGE;
  const currentData = data.slice(startIdx, startIdx + ROWS_PER_PAGE);

  const handlePageChange = (direction) => {
    if (direction === 'prev' && currentPage > 1) {
      setCurrentPage(currentPage - 1);
    } else if (direction === 'next' && currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow overflow-x-auto md:overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        EV Adoption by Year (Page {currentPage} of {totalPages})
      </h2>
      <table className="min-w-full divide-y divide-gray-200 text-sm w-full md:table-auto">
        <thead className="bg-gray-100 text-gray-600 uppercase text-xs font-medium hidden md:table-header-group">
          <tr>
            <th className="px-4 py-2 text-left">Make</th>
            <th className="px-4 py-2 text-left">Model</th>
            <th className="px-4 py-2 text-left">Year</th>
            <th className="px-4 py-2 text-left">Type</th>
            <th className="px-4 py-2 text-left">Range</th>
            <th className="px-4 py-2 text-left">State</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-100 text-gray-800">
          {currentData.map((ev, index) => (
            <tr
              key={index}
              className="md:table-row block md:contents border-b border-gray-300 md:border-b-0"
            >
              <React.Fragment>
                <td className="px-4 py-2 md:px-4 md:py-2 block md:table-cell">
                  <span className="font-semibold md:hidden">Make:</span> {ev.Make || 'N/A'}
                </td>
                <td className="px-4 py-2 md:px-4 md:py-2 block md:table-cell">
                  <span className="font-semibold md:hidden">Model:</span> {ev.Model || 'N/A'}
                </td>
                <td className="px-4 py-2 md:px-4 md:py-2 block md:table-cell">
                  <span className="font-semibold md:hidden">Year:</span> {ev["Model Year"] || 'N/A'}
                </td>
                <td className="px-4 py-2 md:px-4 md:py-2 block md:table-cell">
                  <span className="font-semibold md:hidden">Type:</span> {ev["Electric Vehicle Type"] || 'N/A'}
                </td>
                <td className="px-4 py-2 md:px-4 md:py-2 block md:table-cell">
                  <span className="font-semibold md:hidden">Range:</span> {ev["Electric Range"] || 'N/A'}
                </td>
                <td className="px-4 py-2 md:px-4 md:py-2 block md:table-cell">
                  <span className="font-semibold md:hidden">State:</span> {ev.State?.trim() || 'Unknown'}
                </td>
              </React.Fragment>
            </tr>
          ))}
        </tbody>
      </table>

      {/*pages contol*/}
      <div className="flex justify-between items-center mt-4">
        <button
          onClick={() => handlePageChange('prev')}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange('next')}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-blue-600 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default EVAdoptionByYear;
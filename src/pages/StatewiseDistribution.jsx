import React from 'react';

const StatewiseDistribution = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <div className="bg-white p-4 rounded shadow text-center">
        <p className="text-gray-600">No data available for display</p>
      </div>
    );
  }

  const stateCounts = data.reduce((acc, curr) => {
    let state = curr.State;
    if (!state || state.trim() === '') {
      state = 'Unknown';
    }
    acc[state] = (acc[state] || 0) + 1;
    return acc;
  }, {});

  const totalCount = Object.values(stateCounts).reduce((sum, count) => sum + count, 0);
  const sortedStates = Object.entries(stateCounts).sort((a, b) => b[1] - a[1]);

  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Statewise EV Distribution</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">State</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">EV Count</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">% of Total</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {sortedStates.map(([state, count]) => (
              <tr key={state}>
                <td className="px-6 py-4 whitespace-nowrap text-gray-800">{state}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-700">{count}</td>
                <td className="px-6 py-4 whitespace-nowrap text-gray-600">
                  {((count / totalCount) * 100).toFixed(2)}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StatewiseDistribution;

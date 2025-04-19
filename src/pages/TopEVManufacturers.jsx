import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const TopEVManufacturers = ({ data }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!data || data.length === 0) {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
      return;
    }


    const manufacturerCounts = data.reduce((acc, curr) => {
      const make = curr.Make;
      if (make) {
        acc[make] = (acc[make] || 0) + 1;
      }
      return acc;
    }, {});

 
    const sorted = Object.entries(manufacturerCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    const labels = sorted.map(([make]) => make);
    const values = sorted.map(([_, count]) => count);

    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.data.labels = labels;
      chartInstance.current.data.datasets[0].data = values;
      chartInstance.current.update();
    } else {
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Number of EVs',
              data: values,
              backgroundColor: 'rgba(59, 130, 246, 0.7)',
              borderColor: 'rgba(59, 130, 246, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Top EV Manufacturers',
              font: { size: 18 }
            },
            legend: {
              display: false
            }
          },
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: 'EV Count'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Manufacturer'
              }
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
        chartInstance.current = null;
      }
    };
  }, [data]);

  return (
    <div className="bg-white p-4 rounded shadow" style={{ height: '400px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default TopEVManufacturers;

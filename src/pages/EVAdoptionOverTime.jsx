import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const EVAdoptionOverTime = ({ data }) => {
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

    const canvas = chartRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const yearCounts = data.reduce((acc, curr) => {
      const year = parseInt(curr["Model Year"]);
      if (!isNaN(year)) {
        acc[year] = (acc[year] || 0) + 1;
      }
      return acc;
    }, {});

    const sortedYears = Object.keys(yearCounts).sort((a, b) => a - b);
    const values = sortedYears.map(year => yearCounts[year]);

    if (chartInstance.current) {
      chartInstance.current.data.labels = sortedYears;
      chartInstance.current.data.datasets[0].data = values;
      chartInstance.current.update();
    } else {
      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: sortedYears,
          datasets: [
            {
              label: 'EV Registrations',
              data: values,
              fill: true,
              borderColor: 'rgba(34, 197, 94, 1)',
              backgroundColor: 'rgba(34, 197, 94, 0.2)',
              tension: 0.3,
              pointRadius: 4,
              pointBackgroundColor: 'rgba(34, 197, 94, 1)',
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'EV Adoption Over Time',
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
                text: 'Number of EVs'
              }
            },
            x: {
              title: {
                display: true,
                text: 'Model Year'
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
    <div className="bg-white p-4 rounded shadow" style={{ position: 'relative', height: '400px' }}>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default EVAdoptionOverTime;

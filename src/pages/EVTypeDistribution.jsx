import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const EVTypeDistribution = ({ data }) => {
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
    const typeCounts = data.reduce((acc, curr) => {
      const type = curr["Electric Vehicle Type"];
      if (type) {
        acc[type] = (acc[type] || 0) + 1;
      }
      return acc;
    }, {});

    const labels = Object.keys(typeCounts);
    const values = Object.values(typeCounts);
    const colors = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

    const ctx = chartRef.current.getContext('2d');

    if (chartInstance.current) {
      chartInstance.current.data.labels = labels;
      chartInstance.current.data.datasets[0].data = values;
      chartInstance.current.update();
    } else {
      chartInstance.current = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels,
          datasets: [
            {
              data: values,
              backgroundColor: colors.slice(0, labels.length),
              borderWidth: 1,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'EV Type Distribution',
              font: { size: 18 }
            },
            legend: {
              position: 'bottom',
              labels: {
                boxWidth: 20,
                padding: 15
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

export default EVTypeDistribution;

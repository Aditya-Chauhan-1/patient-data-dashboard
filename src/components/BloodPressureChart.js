import React, { useEffect, useRef } from 'react';
import { Chart, LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip } from 'chart.js';


Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, Tooltip);

const BloodPressureChart = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = document.getElementById('bpChart');

    if (chartRef.current) {
      chartRef.current.destroy();
    }
    const labels = data.map((item) => `${item.month} ${item.year}`);
    const systolicValues = data.map((item) => item.blood_pressure.systolic.value);
    const diastolicValues = data.map((item) => item.blood_pressure.diastolic.value);
    chartRef.current = new Chart(ctx, {
      type: 'line',
      data: {
        labels,
        datasets: [
          {
            label: 'Systolic Blood Pressure',
            data: systolicValues,
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: 'rgba(75, 192, 192, 1)',
          },
          {
            label: 'Diastolic Blood Pressure',
            data: diastolicValues,
            borderColor: 'rgba(192, 75, 75, 1)',
            borderWidth: 2,
            fill: false,
            pointBackgroundColor: 'rgba(192, 75, 75, 1)',
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Blood Pressure Trends',
          },
          tooltip: {
            enabled: true,
            callbacks: {
              label: function (tooltipItem) {
                const { dataset, parsed } = tooltipItem;
                const label = dataset.label || '';
                const value = parsed.y;
                return `${label}: ${value} mmHg`;
              },
            },
          },
        },
        hover: {
          mode: 'nearest',
          intersect: true,
        },
      },
    });

    // Cleanup chart instance on unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]);

  return <canvas id="bpChart"></canvas>;
};

export default BloodPressureChart;

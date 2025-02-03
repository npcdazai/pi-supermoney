import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


const BarChart  = ({
  data,
  labels,
  title = '',
  backgroundColor = '#00CD52',
 
}) => {
  const chartData = {
    labels,
    datasets: [
      {
        label: title,
        data,
        backgroundColor : backgroundColor,
        barThickness: 8,
        borderRadius: {
          topLeft: 10, // Curvature on top left corner
          topRight: 10, // Curvature on top right corner
        },
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        // position: 'top' as const,
      },
      title: {
        display: false,
        text: title,
      },
    },
    scales: {
      x: {
        grid: {
          color: '#00CD52', // Green grid lines for X-axis
        },
      },
      y: {
        grid: {
          color: '#00CD52', // Green grid lines for Y-axis
          // borderDash: [5, 5], // Dotted vertical lines
        },
      },
    },
  };
  
  

  return <Bar data={chartData} options={options} />;
};

export default BarChart;

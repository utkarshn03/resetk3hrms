import React from "react";
import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
const labels = ["Kiit", "Kims", "Kiss", "Temple", "Hospitality"];
const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: [
        '#17d059',
        '#39d6e1',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
      data: [12, 10, 5, 2, 20],
    },
  ],
};

const h1style = {border: '2px solid green'}
const piestyle = {height: '100px', width: '100px'}

const PieChart = () => {
  return (
    <div>
        <h1 style={h1style}>Test h1</h1>
        <Doughnut style={piestyle} data={data}></Doughnut>
    </div>
  );
};
export default PieChart;
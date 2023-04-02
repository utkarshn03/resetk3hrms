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
        '#987b5a',
        '#2e3192',
        '#1be1f8',
        '#d4ebd0',
      ],
      data: [12, 10, 5, 2, 20],
    },
  ],
};

const h1style = {border: '0.5px solid white', backgroundColor: '#c7c8c9', height: '40%', width: '40%', paddingbelow:'50px'}
const piestyle = {height: '50px', width: '50px'}

const PieChart = () => {
  return (
    <>
      <div>
        {/* <h1>Test h1</h1> */}
        <Doughnut data={data}></Doughnut>
      </div>
    </>
  );
};

export default PieChart;
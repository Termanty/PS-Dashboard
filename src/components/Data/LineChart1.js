import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

export const LineChart1 = ({ chartData })=> {
  return <Line data={chartData} />;
}



export const BarChart = ({chartData, options}) => {
  return (
      < Bar data={chartData} options={options}/>
  );
};

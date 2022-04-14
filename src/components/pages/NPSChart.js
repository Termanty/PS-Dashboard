import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

export const DoughnutChart = ({chartData, option}) => {
    return (
        < Doughnut data={chartData} options={option}/>
    );
};

// export default DoughnutChart;


export const BarChart = ({chartData,option}) => {
    return (
        < Bar data={chartData}options={option}/>
    );
};

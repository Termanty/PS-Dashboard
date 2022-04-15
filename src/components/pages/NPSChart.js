import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

export const DoughnutChart = ({chartData}) => {
    return (
        < Doughnut data={chartData} />
    );
};

// export default DoughnutChart;


export const BarChart = ({chartData}) => {
    return (
        < Bar data={chartData}/>
    );
};

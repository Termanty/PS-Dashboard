import { Paper } from "@mui/material";
import { Bar} from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import "chartjs-adapter-date-fns";
import moment from "moment";

function reducer(accumulator, day) {
  if (!accumulator[moment(day).format("")])
    accumulator[moment(day).format("")] = 0;
  accumulator[moment(day).format("")]++;
  return accumulator;
}
function toTime(response) {
  const time = response.created_at;
  const parts = time.slice(0, -1).split("T");
  const dateTime = parts[0];
  return dateTime;
}

const BarChart = ({ chartData, options }) => {
  return <Bar data={chartData} options={options} />;
};

function ResponsesChart({ dateFrom, dateTo }) {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchResponses()), []);
  let responses = useSelector((state) => state.responses);

  let dateToValue = moment.utc(dateTo).add(1, 'day').format("");
  if (dateFrom !== "" && dateToValue !== "") {
    responses = responses.filter((res) => {
      return res.created_at >= dateFrom && res.created_at <= dateToValue;
    });
  }

  const responsesPerDay = responses.map(toTime).reduce(reducer, {});
  const detractorsPerDay = responses
    .filter((r) => r.score <= 6)
    .map(toTime)
    .reduce(reducer, {});

  const passivesPerDay = responses
    .filter((r) => r.score >= 7 && r.score <= 8)
    .map(toTime)
    .reduce(reducer, {});
  const promotersPerDay = responses
    .filter((r) => r.score >= 9)
    .map(toTime)
    .reduce(reducer, {});

  const NPSPerDay = {};
    Object.keys(responsesPerDay).forEach((day) => {
      const promoters = promotersPerDay[day] || 0;
      const detractors = detractorsPerDay[day] || 0;
      const all = responsesPerDay[day];
      const NPS = Math.round(((promoters - detractors) / all) * 100);
      NPSPerDay[day] = Math.min(Math.max(parseInt(NPS), -100), 100);
  });


  const data = {
    labels: "",
    datasets: [
      {
        label: `NPS`,
        data: NPSPerDay,
        showLine: true,
        type: "line",
        order: 0,
        borderColor: " #ED6930",
        tension: 0.2,
        hoverPointRadius: 1,
        backgroundColor: ["#ED6930"],
        yAxisID: 'NPS',
      },
      {
        label: "Detractors",
        data: detractorsPerDay,
        backgroundColor: ["#E26060"],
        categoryPercentage: 1,
        barPercentage: 0.8,
        yAxisID: 'y',
        type: 'bar',
      },
      {
        label: "Passives",
        data: passivesPerDay,
        backgroundColor: ["#F3C934"],
        categoryPercentage: 1,
        barPercentage: 0.8,
        yAxisID: 'y',
        type: 'bar',
      },
      {
        label: "Promoters",
        data: promotersPerDay,
        backgroundColor: ["#52A569"],
        categoryPercentage: 1,
        barPercentage: 0.8,
        yAxisID: 'y',
        type: 'bar',
      },
      {
        label: "Total Responses",
        data: responsesPerDay,
        backgroundColor: ["#162667"],
        borderColor: " #ffffff",
        borderWidth: 1,
        order: 1,
        showLine: false,
        pointRadius: 4,
        tension: 0.7,
        yAxisID: 'y',
        type: "line",
      },
      
      
    ],
  };
  
  const options = {
    maintainAspectRatio: false,
    layout: {
      padding: 30,
    },
    plugins: {
      tooltip: { yAlign: "bottom" },
      legend: {
        position: "top",
        display: true,
        labels: {
          font: {
            size: 15,
          },
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      title: {
        display: true,
        text: "Response volume",
        align: "center",
        padding: {
          bottom: 10,
        },
        font: {
          size: 15,
        },
      },
    },

    scales: {
      x: {
        type: "time",
        time: {
          unit: "day",
          displayFormats: {
            day: "MMM d, yy",
          },
        },
        stacked: true,
        offset: true,
        ticks: {
          maxRotation: 30,
          minRotation: 30,
          font: {
            size: 15,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Responses/day",
          font: {
            size: 15,
          },
        },
        stacked: true,
        beginAtZero: true,
        type:'linear',
        position:'left',
        
        ticks: {
          font: {
            size: 15,
          },
        },
      },
      NPS: {
        title: {
          display: true,
          text: "NPS Score/day ",
          font: {
            size: 15,
          },
        },
        stacked: true,
        beginAtZero: true,
        type:'linear',
        position:'right',
        grid:{
          drawOnChartArea:false,
        },
        ticks: {
          font: {
            size: 15,
          },
        },
      },
    },
    responsive: true,
  };

  return (
    <Paper
      elevation={0}
      sx={{
        borderColor:"#F6F7F9",
        boxShadow: 2,
        width: "100%",     
        borderRadius: 5,
        margin: 6,
        height: '80%', 
      }}
    >
      <BarChart
        chartData={data}
        options={options}
        dateTo={dateTo}
        dateFrom={dateFrom}
      />
    </Paper>
  );
}
export default ResponsesChart;

import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import moment from "moment";

function reducer(accumulator, day) {
  if (!accumulator[moment(day).format('DD-MM-YYYY')]) accumulator[moment(day).format('DD-MM-YYYY')] = 0;
  accumulator[moment(day).format('DD-MM-YYYY')]++;
  return accumulator;
}

function toTime(response) {
  const time = response.created_at
  return time.slice(0, 10).split("-").join("");
 
}

const BarChart = ({chartData, options}) => {
    return (
        < Bar data={chartData} options={options}/>
    );
  }; 

function ResponsesChart() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchResponses()), []);
  const responses = useSelector((state) => state.responses);

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

  const data = {
    labels: "",
    datasets: [
      {
        label: "Detractors",
        data: detractorsPerDay,
        backgroundColor: [
          '#E26060',
        ],
      },
      {
        label: "Passives",
        data: passivesPerDay,
        backgroundColor: [
          '#F3C934',
        ],
      },
      {
        label: "Promoters",
        data: promotersPerDay,
        backgroundColor: [
          '#52A569',
        ],
      },
      {
        label: "Total Response",
        data: responsesPerDay,
        backgroundColor: [
          '#162639',
        ],
        type: 'line',
        order: 1,
        tension:0.5
      },
       
       
    ],
    }
    const options = {
      layout: {
        padding: 20
    },
      plugins: {
        tooltip:{yAlign:'bottom'},
        legend: {
          position: 'bottom',
          display: true,
          labels:{
            font:{
                size:20,
            },
            usePointStyle:true,
            pointStyle: 'circle',
              
          }
        },
        title: {
          display: true,
          text: 'Response volume',
          align:'center',
          padding:{
            bottom:40
          },
          font:{
            size:25
          }
        }
    },
  
      scales: {
        x: {
          stacked:true,
          offset: true,
          ticks: {
            maxRotation: 30,
            minRotation: 30,
            font: {
              size: 20,
          },
        },
      
        },
        y: {
          title: {
            display: true,
            text: 'Response',
            font: {
              size: 25,
          },
          },
          stacked: true,
          beginAtZero: true,
          ticks: {
            font: {
              size: 20,
          },
        },
      }
    },
   responsive:true
  };

  return (
   <Paper elevation={0}>
        <Box sx={{ 
          boxShadow: 10,
          width:900, 
          border: "solid 1px #162639",
          borderRadius:2,
          margin:10}}>
          <BarChart 
          chartData={data}
          options={options}
          />
        </Box>
    </Paper>
  );
}
export default ResponsesChart;

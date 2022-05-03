import { Box } from "@mui/material";
import { Paper } from "@mui/material";

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

import React, { useEffect} from "react";
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


const LineChart = ({chartData, options}) => {
    return (
        < Line data={chartData} options={options}/>
    );
  };



  

function NPSgraph() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchResponses()), []);

  const responses = useSelector((state) => state.responses);

  const responsesPerDay = responses.map(toTime).reduce(reducer, {});


  const detractorsPerDay = responses
    .filter((r) => (r.score >= 9 )) 
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

//   console.log(responsesPerDay);
  console.log(detractorsPerDay);
//   console.log(passivesPerDay);
//   console.log(promotersPerDay);

//   let NPS = promotersPerDay-detractorsPerDay
//   console.log(NPS)


const data = {
    labels: "",
    datasets: [
        {
            label: "Response/Day",
            data: responsesPerDay,
            backgroundColor: [
            '#306830',
            ],
                
        },   
    ],
}
    const options = {
      layout: {
        padding: 20
    },
      plugins: {
        legend: {
          position: 'bottom',
            display: true,
            labels:{
              font:{
                size:20
              }
            }
        },
        title: {
          display: true,
          text: 'Response volume',
          font:{
            size:20
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
          border: "solid 1px #282c34",
          borderRadius:2,
          margin:10}}>
          <LineChart 
          chartData={data}
          options={options}
          />
        </Box>
    </Paper>
  );
}

export default NPSgraph;

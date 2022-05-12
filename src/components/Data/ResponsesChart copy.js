import { Box } from "@mui/material";
import { Paper } from "@mui/material";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import 'chartjs-adapter-date-fns';

function reducer(accumulator, day) {
  if (!accumulator[day]) accumulator[day] = 0;
  accumulator[day]++;
  return accumulator;
}

function toTime(response) {
  const time = response.created_at
  const parts = time.slice(0, -1).split('T');
  const dateTime = parts[0]
  return dateTime;

}

const BarChart = ({chartData, options}) => {
    return (
        < Bar data={chartData} options={options}/>
    );
  }; 

function ResponsesChart({ dateFrom , dateTo}) {
  // console.log(`dateFrom:${(props.dateFrom)}`, props.dateTo);

  // let dateFromValue = (props.dateFrom);
  // let dateToValue = (props.dateTo)
  // console.log(dateToValue)

  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchResponses()), []);
  let responses = useSelector((state) => state.responses);

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

    if (dateFrom !== "" && dateTo !=="") {
      responses=responses.filter(res=>{
        return (res.created_at >= dateFrom && res.created_at <= dateTo)
      })
    }

  const data = {
    labels: "",
    datasets: [
      {
        label: "Detractors",
        data: detractorsPerDay,
        backgroundColor: [
          '#E26060',
        ],
        categoryPercentage: 0.8,
        barPercentage: 0.8,
            
      },
      {
        label: "Passives",
        data: passivesPerDay,
        backgroundColor: [
          '#F3C934',
        ],
        categoryPercentage: 0.8,
        barPercentage: 0.8,
      },
      {
        label: "Promoters",
        data: promotersPerDay,
        backgroundColor: [
          '#52A569',
        ],
        categoryPercentage: 0.8,
        barPercentage: 0.8,
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
                size:15,
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
            bottom:20
          },
          font:{
            size:0
          }
        }
    },
  
      scales: {
        x: {
        type: 'time',
        time: {
          unit: 'day',
          displayFormats: {
            day: 'MMM d, yy'
          }
        },
          stacked:true,
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
            text: 'Response',
            font: {
              size: 20,
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
    <Box sx={{ 
        boxShadow: 10,
        width:'80%', 
        border: "solid 1px #162639",
        borderRadius:1,
        margin:5}}>
        <BarChart 
          chartData={data}
          options={options}
          dateTo={dateTo} 
          dateFrom={dateFrom}
        />
    </Box>
  );
}
export default ResponsesChart;
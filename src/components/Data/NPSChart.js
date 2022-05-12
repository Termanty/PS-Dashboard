import { Box , Paper} from "@mui/material";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";



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

const LineChart = ({chartData, options}) => {
    return (
        < Line data={chartData} options={options} />
    );
  };

function NPSChart({dateFrom , dateTo}) {
  
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchResponses()), []);
 let responses = useSelector((state) => state.responses);

 if (dateFrom !== "" && dateTo !=="") {
  responses=responses.filter(res=>{
    return (res.created_at >= dateFrom && res.created_at <= dateTo)
  })
}
  const responsesPerDay = responses.map(toTime).reduce(reducer, {});
  const detractorsPerDay = responses
    .filter((r) => (r.score <=6 )) 
    .map(toTime)
    .reduce(reducer, {});

  const promotersPerDay = responses
    .filter((r) => r.score >= 9)
    .map(toTime)
    .reduce(reducer, {});

const NPSPerDay={};
Object.keys(responsesPerDay).forEach((day)=>{
  const promoters = promotersPerDay[day] || 0;
  const detractors = detractorsPerDay[day] || 0;
  const all = responsesPerDay[day] ;
  const NPS = Math.round((promoters-detractors)/all * 100)
  NPSPerDay[day] =  Math.min(Math.max(parseInt(NPS),-100),100);
})

const data = {
    datasets: [
        {
            label: `NPS`,
            data:NPSPerDay,
            showLine: true,
            type: 'line',
            order: 0,
            borderColor:" #532469",
            tension:0.2,
            hoverPointRadius:1,
        }, 
        {
          label: "Responses",
          data: responsesPerDay,
          backgroundColor: [
          '#FFFFFF',
          ],
          order: 1,
          showLine:false,
          pointRadius:0,
          tension:0.7,
        },  
    ],
}
    const options = {
      layout: {
        padding: 25
    },
      plugins: {
        tooltip:{
          yAlign:'bottom',
          callbacks:{
            afterTitle:function(context){
              return context.responsesPerDay
            }
          }
        },
        legend: {
          position: 'bottom',
            display: false,
            labels:{
              font:{
                size:20
              },
              usePointStyle:true,
              pointStyle: 'circle',
           }
        },
        title: {
          display: true,
          text: 'NPS Score',
          align:'center',
          padding:{
            bottom:30
          },
          font:{
            size:20
          }
        }
    },
    interaction: {
      mode: 'index',
      axis: 'x',
      intersect: false
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
          stacked: true,
          grid: {
            drawBorder: false, 
            lineWidth:0,
        },
          offset: true,
          ticks: {
            maxRotation: 35,
            minRotation: 35,
            font: {
              size: 15,
          },
        },
      
        },
        y: {
          stacked: true,
          title: {
            display: true,
            text: 'Score',
            font: {
              size: 20,
          },
          },
          grid:{
            borderWidth:0,
            lineWidth:2,
            autoPadding:true
          },
          min:-100,
          max:100,
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
    <Paper sx={{ 
        boxShadow: 10,
        width:'80%', 
        border: "solid 1px #282c34",
        borderRadius:2,
        margin:5,
        bgcolor:"white"
    }}>
        <LineChart 
          chartData={data}
          options={options}
          dateFrom={dateFrom} dateTo={dateTo}
        />
    </Paper>
  );
}

export default NPSChart;

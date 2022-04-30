
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from '../../store/responses/reducer';

import moment from 'moment';
import { Line } from 'react-chartjs-2';
import Plot from 'react-plotly.js';
import { LineChart1 } from "./LineChart1";
import { BarChart } from "./LineChart1";

import { Chart as ChartJS } from "chart.js/auto";
import { Box } from "@mui/system";
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'


const LineChart = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchResponses()), []);
    const responses = useSelector((state) => state.responses);


    const [selectedDate, setSelectedDate] = useState(null)
    const data = {
      labels: responses.filter(scores=>scores.score >=9).map((date) => (moment(date.created_at).utc().format('DD-MM-YYYY'))),
      datasets: [
        {
          label: "Promoters",
          data: responses.filter(scores=>scores.score >=9).map((dat) => dat.score),
          backgroundColor: [
            '#00ff00',
          ],
          // borderColor: "black",
          },
          {
            label: "Passives",
            data: responses.filter(scores=>scores.score>=7 && scores.score <=8).map((dat) => dat.score),
            backgroundColor: [
              '#F3C934',
            ],
            // borderColor: "black",
            },
          {
            label: "Detractors",
            data: responses.filter(scores=>scores.score<=6).map((dat) => dat.score),
            backgroundColor: [
              '#CE672E',
            ],
          // borderColor: "black",
         },
      ],
      }
     const options = {
        // categoryPercentage: 0.9,
        // barPercentage: 0.5,
        scales: {
          x: {
            stacked:true,
            offset: true,
            ticks: {
              maxRotation: 45,
              minRotation: 45
          }
          },
          y: {
            stacked: true,
            beginAtZero: true,
            // offset: false,
          
        }
      },
     
        // barThickness:45,
        responsive:true
    };
      // });
    return (
        <div>
             <div style={{ width: 500 }}>
        <LineChart1 chartData={data} 
        
        />
      </div>
      <div >
       
      </div>
      <Box sx={{ width: 800, display: 'flex', flexDirection: 'row', m:3}}>
      <BarChart chartData={data}
        options={options}
        />
      </Box>

      <Box>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        placeholderText={'dd/mm/yyyy'}
        filterDate={date => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
        showYearDropdown // year show and scrolldown alos
        scrollableYearDropdown
      />
      </Box>
        </div>
    );
};

export default LineChart;
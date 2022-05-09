import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import Plot from 'react-plotly.js';
import Responses from './Responses';
import { Doughnut } from 'react-chartjs-2';
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";

import { Chart } from "chart.js";
Chart.register(ChartDataLabels);


const DoughnutChart = ({chartData, options}) => {
  
  return (
      < Doughnut data={chartData} options={options}/>
  );
};

const DoughnutNPS = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchResponses()), []);
    const responses = useSelector((state) => state.responses);

        let detractor=0
        let promoter = 0;
        let passive = 0
        
          for (let i=0; i< responses.length;  i++){
            if (responses[i].score>=9) promoter++;
            if (responses[i].score>=7 && responses[i].score <=8) ++ passive;
            if(responses[i].score <=6) detractor++;
          };
        
        let PR= promoter++
        let DE = detractor++
        let PA = passive++
        const All = PR+DE+PA
        const NPScore= Math.round((PR-DE)/All * 100)
        
        const NPS = Math.min(Math.max(parseInt(NPScore),-100),100);


        //
        
        //

        const data = {
          labels:["Detractors", "Passives", "Promoters"],
          datasets:[{
            label:"Net Promoter Score",
            data:[DE,PA,PR],
            // data:[
            //   {score: {Nps:DE}},
            //   {score:{Nps:PA}},    
            //   {score:{Nps:PR}}
            // ],
            borderRadius:20,
            borderWidth: 1,
            // borderAlign:'inner',
            backgroundColor: [
              '#E26060',
              '#F3C934',
              '#52A569',
            ],
            text:'23%',
            hoverOffset: 4,
            circumference:360,
            rotation:-90,
          },
        ], 
      }
      const options = {
       
        responsive: true,
        maintainAspectRatio: false,
        tooltips:{
          
        },
        cutout: 100,
        // animation:{animateRotate:false},
        plugins: {
          parsing:{
            key:'score.NPs'
          },
          
          datalabels: {
            display: true,
            color: "white",
            formatter: (val) => {
              return val;
            },
            labels: {
              title: {
                font: {
                  weight: "bold",
                  size:20
                }
              },
            },
          },
          //
          centerText: {
            display: true,
            text: "280"
        },
          //
          legend: {
            position: 'bottom',
              display: true,
              labels:{
                font:{
                  size:15
                },
                usePointStyle:true,
                pointStyle: 'circle',
             }
          },
          title: {
            display: true,
            text: 'Net ',
            align:'center',
            padding: {
              top: 0,
              bottom: 10
          },
            font:{
              size:20
            }
          }
      },

      }


        return (
           <div>
                <Box  sx={{ marginLeft: 40}}>
                   <Typography  
                       variant="h4" 
                       component="div" 
                       sx={{m:3}}>
                       NET PROMOTER SCORE
                   </Typography>
               </Box>
               <Box sx={{ display: 'flex', flexDirection: 'row'}}>
               <Box 
                sx={{color:"black", 
                 width:400, 
                justifyContent: 'center',
                marginTop:1,
                marginRight:2
              }} 
                align = "center" 
                variant="h3"  
                component="div" 
               >
              <DoughnutChart chartData={data} options={options}/>
            </Box>
             <Responses/>
           </Box>
         </div>
       );     
};
export default DoughnutNPS;

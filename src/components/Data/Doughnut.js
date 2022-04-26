import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import Plot from 'react-plotly.js';
import moment from 'moment';
import Responses from './Responses';


const Doughnut = () => {
    const dispatch = useDispatch();
  
    useEffect(() => dispatch(fetchResponses()), []);
  
    const responses = useSelector((state) => state.responses);
    // const responsesList = responses.map((response) => (

        const timeStamp= [];
        for (let i = 0; i < responses.length; i += 1) {
          timeStamp.push(new Date(responses[i].created_at).toLocaleDateString());
        }
        // console.log(timeStamp)
        
        
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
        
        const Promoters= Math.round((PR/All)*100)
        const Detractors = Math.round((DE/All)*100)
        const Passives= Math.round((PA/All)*100)
        const NPScore= Math.round((Promoters - Detractors))
        
        const NPS = Math.min(Math.max(parseInt(NPScore),-100),100);
        
        const [userData, setUserData]= useState({
          labels:["Detractors", "Passives", "Promoters"],
          datasets:[{
            label:"Net Promoter Score",
            data:[Detractors,Passives,Promoters],
            borderWidth: 0,
            backgroundColor: [
              '#E26060',
              '#F3C934',
              '#52A569',
            ],
            hoverOffset: 4,
            circumference:180,
            rotation:-90,
            options:{
              legend:"bottom",
              font: {
                size: 50
            },
             
            }
          },
          
        
        ],
          
        },
        );
        
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
              {/* <ul>{responsesList}</ul> */}
              
            
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                <Plot
                  data={[
                    {
                      values: [Detractors ,Passives, Promoters],
                      labels: ["Detractors", "Passives", "Promoters"],
                      domain: {column: 0},
                      hoverinfo: 'label+percent',
                      rotation:90,
                      marker:{
                        colors: [
                          '#CE672E', 
                          '#F3C934', 
                          '#00ff00'],   
                      },
                      textposition: 'inside',
                      hole: .4,
                      type: 'pie',
                      
                    },
                    ]}
                    layout={ { height:500, width: 550, title: 'Net Promoter Score',
                    font:{
                      size: 20,
                    },
                    
                    legend: {
                      x: 0.1,
                      y: -0.1,
                      orientation: "h",
                      font:{
                        size: 15
                      },
                      bgcolor: '#E2E2E2',
                      bordercolor: '#FFFFFF',
                      borderwidth: 1,
                      borderradius:1,
                    },
                    annotations: [
                      {
                        font: {
                          size: 20
                        },
                        showarrow: false,
                        text:`NPS`,
                        x: 0.5,
                        y: 0.55
                      },
                        {
                          font: {
                            size: 40
                          },
                          showarrow: false,
                          text:`${NPS}`,
                          x: 0.5,
                          y: 0.45
                        }
                    ]
                  }} 
                />
                <Responses/>
            </Box>
          </div>
        );
};

export default Doughnut;
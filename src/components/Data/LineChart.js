import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import {Card} from '@mui/material';
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import { Paper } from "@mui/material";
import { Bar } from "react-chartjs-2";
import { Chart } from "chart.js";

import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

const LineChart = () => {
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
        const Promoters= Math.round((PR/All)*100)
        const Detractors = Math.round((DE/All)*100)
        const Passives= Math.round((PA/All)*100)
        const NPScore= Math.round((Promoters - Detractors))
      
        const NPS = Math.min(Math.max(parseInt(NPScore),-100),100);

        const LineChart = ({chartData, options}) => {
            return (
                < Bar data={chartData} options={options}/>
            );
        }; 

        const data = {
            labels: [`${PR}  Promoters`, ` ${PA}  Passives`,`${DE} Detractors`],
            type: 'bar',
            datasets: [{
              axis: 'x',
              label: 'NPS Score',
              data: [Promoters,Passives, Detractors ],
              datalabels: {
                align:'end',
                anchor: 'end',
                offset: 20
              },
              backgroundColor: [
                '#52A569',
                '#F3C934', 
                '#E26060',   
              ],
                borderWidth: 1,
                barPercentage: 0.8,
            }]
          };
  
    const options = {
        indexAxis: 'y',
        layout: {
            padding: 20
        },
        plugins: {
            tooltip:{xAlign:'left'},
            legend: {
              display: false
            },
            datalabels: {
              display: true,
              color: "black",
              formatter: (val) => {
                return val + '%';
              },
              labels: {
                title: {
                  font: {
                    weight: "bold",
                  }
                },
              },
            }
          },
        scales: {
            x: {
                display:false,
                ticks: {
                font: {
                    size: 20,
                    },
                },
            
            },
            y: {
                ticks: {
                font: {
                    size: 15,
                    },
                },
                grid: {
                    drawBorder: false, 
                    lineWidth:0,
                },
            }
        },
    responsive:true
    };

    return (
        <Paper elevation={0}>
            <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                <Box sx={{ 
                    display: 'flex', flexDirection: 'row',
                    boxShadow: 0,
                    width:600, 
                    // border: "solid 1px #282c34",
                    borderRadius:2,
                    marginLeft:5,
                    marginTop:5}}>
                    <Box
                    sx={{marginTop:5, paddingLeft:2,}}
                    >
                        <Card sx={{ 
                            width:200,
                            m:0, 
                            marginBottom:-3,
                            marginTop:-3,
                           }} 
                        >
                            <Typography 
                            align = "center" 
                            variant="h3" 
                            sx={{fontSize: 40, 
                                fontWeight:"bold",
                                borderBottom: "solid 1px #E5E9c9",
                                }}
                            component="div"
                            marginBottom={-4} 
                            >
                                 {` ${NPS}`}
                               
                            </Typography>
                            <Typography 
                              sx={{color:"black", 
                              m:5, 
                            width:200
                            }} 
                              variant="p"  
                              component="div"
                             > 
                            Net promoter Score
                            </Typography>
                            <Typography 
                              sx={{color:"black", 
                              width:250, fontSize: 20, 
                            }} 
                                variant="p"  
                                component="div"
                                marginTop={-3}
                                marginLeft={1.5}
                             > 
                          Total Responses {All}
                            </Typography>
                    </Card>
                    </Box>
                    <Box>
                        <LineChart 
                        chartData={data}
                        options={options}
                        /> 
                    </Box>
                </Box>
        </Box>
        
        
    </Paper>
    );
};

export default LineChart;
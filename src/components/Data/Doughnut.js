import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import Responses from './Responses';
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import moment from 'moment';
import { PieChart, Pie, Label, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Chart } from "chart.js";
import 'chartjs-adapter-date-fns';
Chart.register(ChartDataLabels);



const DoughnutNPS = (props) => {
  console.log(`dateFrom:${new Date(props.dateFrom).toDateString()}`, props.dateTo);

  let dateFromValue = new Date(props.dateFrom).toDateString();
  let dateToValue = new Date(props.dateTo).toDateString()
  console.log(dateToValue)

  const [selection, setSelection]=useState('all');
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchResponses()), []);
    const responses = useSelector((state) => state.responses);

        let detractor=0
        let promoter = 0;
        let passive = 0
        
          for (let i=0; i< responses.length;  i++){
            if(props.dateFrom==="" || props.dateTo===""){
            if (responses[i].score>=9) promoter++;
            if (responses[i].score>=7 && responses[i].score <=8) ++ passive;
            if(responses[i].score <=6) detractor++;
          }else{
            let respDate= new Date(responses[i].created_at).toDateString();
            console.log(respDate)
            if(respDate >=dateFromValue || respDate <=dateToValue){
              if (responses[i].score>=9) promoter++;
            if (responses[i].score>=7 && responses[i].score <=8) ++ passive;
            if(responses[i].score <=6) detractor++;
            }
          }
          };
        
        let PR= promoter++
        let DE = detractor++
        let PA = passive++
        const All = PR+DE+PA
        const NPScore= Math.round((PR-DE)/All * 100)
        
        const NPS = Math.min(Math.max(parseInt(NPScore),-100),100);
        
        const data=[
          {name: 'Detractors', value: DE},
          {name:'Passives', value: PA},    
          {name:'Promoters', value: PR}
        ]
        const COLORS = [ '#E26060','#F3C934','#52A569',];
        
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({cx,cy,midAngle,innerRadius,outerRadius,index
         }) => {
             const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
             const x = cx + radius * Math.cos(-midAngle * RADIAN);
             const y = cy + radius * Math.sin(-midAngle * RADIAN);
       
       return (
       <text
         x={x}
         y={y}
         fontSize='25' 
         fill="white"
         textAnchor={x > cx ? "start" : "end"}
         dominantBaseline="central"
       >
         {data[index].value}
       </text>
       );
       };
      return (
          <Box>
              <Box  sx={{ marginLeft: 40}}>
                <Typography  
                  variant="h4" 
                  component="div" 
                  sx={{m:0}}>
                  NET PROMOTER SCORE
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                <Box 
                  sx={{color:"black", 
                  width:700, 
                  justifyContent: 'center',
                  marginTop:0,
                  marginLeft:-15,
                  paddingRight:-25
                }} 
                  align = "center" 
                  variant="h3"  
                  component="div" 
                >
            <ResponsiveContainer width="100%" height="100%">
              <PieChart >
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  innerRadius={70}
                  outerRadius={150}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                      onClick={() => setSelection(data[index].name) }
                    />
                  ))}

                  <Label
                    value={NPS}
                    position="center"
                    fontFamily="Rubik"
                    fontWeight={500}
                    fontSize='40' 
                    fill="#2E282A"
                  />
					      </Pie>
				        <Tooltip/>
                <Legend 
                height={36}
                color={'#000000'}/>
				      </PieChart>
            </ResponsiveContainer>
          </Box>
             <Responses selection={selection}/>
        </Box>
       </Box> 
       );     
};
export default DoughnutNPS;

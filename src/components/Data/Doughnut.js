import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import Responses from './Responses';
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import moment from 'moment';
import 'chartjs-adapter-date-fns';
import { addSeconds, format} from 'date-fns'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { PieChart, Pie, Label, Tooltip, Cell, ResponsiveContainer, Legend,fontSize } from 'recharts';
import { Chart } from "chart.js";
Chart.register(ChartDataLabels);




const DoughnutNPS = (props) => {
  
  console.log(`dateFrom:${(props.dateFrom)}`, props.dateTo);
  let dateFromValue =(props.dateFrom);
  let dateToValue =(props.dateTo)
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
          
        } else {
          let respDate= (responses[i].created_at);
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
        const DetractorV= responses.slice(scores=>scores.score<=6).map((res)=>(
          <li key={res.id}>   
              <p>{res.score}</p>  
              <p>{res.comment}</p>  
          </li> 
      ))
      console.log(<li>{DetractorV}</li>)
      const data=[
          {name: 'Detractors', value: DE},
          {name:'Passives', value: PA},    
          {name:'Promoters', value: PR}
        ]
      const COLORS = [ '#E26060','#F3C934', '#52A569',];
        

        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx,cy, midAngle,innerRadius,outerRadius,index}) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);
       
       return (
       <text
         x={x}
         y={y}
         tick={{fontSize: 30}}
         fill="white"
         textAnchor={x > cx ? "start" : "end"}
         dominantBaseline="central"
       >
         {data[index].value}
       </text>
       );
       };

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
                     <ResponsiveContainer width="100%" height="100%">
              <PieChart width={400} height={400}>
					<Pie
						data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
						innerRadius={80}
						outerRadius={150}
						paddingAngle={2}
						dataKey="value"
					>
						{data.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
                onClick={() => setSelection(data[index].name)  }
							/>
              
						))}

						<Label
							value={NPS}
							position="center"
							fontFamily="Rubik"
							fontWeight={500}
							fontSize="2rem"
              
							fill="#2E282A"
						/>
					</Pie>
				<Tooltip/>
        <Legend />
				</PieChart>
        </ResponsiveContainer>
            </Box>
             <Responses selection={selection}/>
           </Box>
         </div>
       );     
};
export default DoughnutNPS;

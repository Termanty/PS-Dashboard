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
import { Button } from '@mui/material';
import moment from 'moment';

import { PieChart, Pie, Sector, Label, Tooltip, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Chart } from "chart.js";
Chart.register(ChartDataLabels);



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
        const data=[
          {name: 'Detractors', value: DE},
          {name:'Passives', value: PA},    
          {name:'Promoters', value: PR}
        ]
        const COLORS = [ 
          '#E26060',
          '#F3C934',
          '#52A569',];
        
        const RADIAN = Math.PI / 180;
        const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
          const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
          const x = cx + radius * Math.cos(-midAngle * RADIAN);
          const y = cy + radius * Math.sin(-midAngle * RADIAN);

          return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
              {`${(percent * 100).toFixed(0)}%`}
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
             <Responses/>
               {/* <div className="nps-categories">
					<div className="nps-one-category">
						<div className="nps-category-circle-promoters"></div>
						<div className="sum-number">{PR}</div>
						<div className="nps-category-name">Promoters</div>
					</div>
					<div className="nps-one-category">
						<div className="nps-category-circle-passives"></div>
						<div className="sum-number">{PA}</div>
						<div className="nps-category-name">Passives</div>
					</div>
					<div className="nps-one-category">
						<div className="nps-category-circle-detractors"></div>
						<div className="sum-number">{DE}</div>
						<div className="nps-category-name">Detractors</div>
					</div>
					<div className="nps-category-line"></div>
					<div className="nps-one-category">
						<div className="nps-category-circle-total"></div>
						<div className="sum-number">{NPS}</div>
						<div className="nps-category-name">Total responses</div>
					</div>
				</div> */}
           </Box>
         </div>
       );     
};
export default DoughnutNPS;

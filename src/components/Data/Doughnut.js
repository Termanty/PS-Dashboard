import {Box, Card} from '@mui/material';
import {Typography} from '@mui/material';
import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import Responses from './Responses';
import "chartjs-plugin-datalabels";
import ChartDataLabels from "chartjs-plugin-datalabels";
import moment from 'moment';
import { PieChart, Pie, Label, Tooltip, Cell, ResponsiveContainer, Legend} from 'recharts';
import { Chart } from "chart.js";
import 'chartjs-adapter-date-fns';
Chart.register(ChartDataLabels);

const DoughnutNPS = ({dateFrom, dateTo}) => {

  let dateFromValue = moment(dateFrom).format('YYYY-MM-DD');
  let dateToValue = moment(dateTo).format('YYYY-MM-DD');
  console.log(dateToValue)

  const [selection, setSelection]=useState('all');
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchResponses()), []);
    const responses = useSelector((state) => state.responses);

        let detractor=0
        let promoter = 0;
        let passive = 0
        
        if(dateFrom==="" || dateTo===""){
          for (let i = 0; i < responses.length;  i++){
            if (responses[i].score>=9) promoter++;
            if (responses[i].score>=7 && responses[i].score <=8) ++ passive;
            if(responses[i].score <=6) detractor++;
          }
        }
           else {
            for (let i = 0; i < responses.length;  i++){
            let respDate=moment(responses[i].created_at).format('YYYY-MM-DD');
            if(respDate >= dateFromValue && respDate <= dateToValue){
              console.log(respDate)
              if (responses[i].score>=9) promoter++;
            if (responses[i].score>=7 && responses[i].score <=8) ++ passive;
            if(responses[i].score <=6) detractor++;
            }
          }
          }
        
        let PR= promoter++
        let DE = detractor++
        let PA = passive++
        const All = PR+DE+PA
        const NPScore= Math.round((PR-DE)/All * 100)
        console.log(All)
        
        const NPS = Math.min(Math.max(parseInt(NPScore),-100),100);
        
        const data=[
          {name: 'Detractors', value: DE},
          {name:'Passives', value: PA},    
          {name:'Promoters', value: PR}
        ]
        const data2=[
          {name: 'NPS', value: NPS},
          
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
          <Box width='85%'
          sx={{ boxShadow: 10,
          margin:1}}>
              <Box  sx={{ marginLeft: 40}}>
                  <Typography  
                    variant="h4" 
                    component="div" 
                    sx={{paddingTop:2}}>
                    NET PROMOTER SCORE
                  </Typography>
                  <Box  sx={{ marginLeft: -30, marginBottom:-5}}>
                    <Card sx={{ maxWidth: 230,   
                          background:"#E5E5E5", 
                          '&:hover': {
                          backgroundColor: 'white'},
                        }} 
                    >
                        <Typography  
                          variant="h5" 
                          component="div" 
                          sx={{m:1}}>
                        Total Responses {All}
                        </Typography>
                    </Card>
                  
                </Box>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'row'}}>
                <Box 
                  sx={{color:"black", 
                  width:400, 
                  marginTop:0,
                  // marginLeft:5,
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
                  cy="60%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  innerRadius={80}
                  outerRadius={160}
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

                  {data2.map((entry, index) => (<Label
                   key={`cell-${index}`}
                    value={`NPS ${NPS}`}
                    position="center"
                    fontFamily="Rubik"
                    fontWeight={300}
                    fontSize='40' 
                    fill="#2E282A"
                    onClick={() => setSelection(data2[index].name)}
                  />))}
                  
					      </Pie>
				        <Tooltip/>
                <Legend 
                height={60}
                iconType='circle'
                align="center"
                />
				      </PieChart>
            </ResponsiveContainer>
          </Box>
             <Responses dateFrom={dateFrom} dateTo={dateTo} selection={selection}/>
        </Box>
       </Box> 
       );     
};
export default DoughnutNPS;

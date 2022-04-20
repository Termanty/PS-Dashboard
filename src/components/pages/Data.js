import {Box} from '@mui/material';
import {Card} from '@mui/material';

import {Typography} from '@mui/material';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import Plot from 'react-plotly.js';
import moment from 'moment';


function Data() {
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchResponses()), []);

  const responses = useSelector((state) => state.responses);
  // const responsesList = responses.map((response) => (
  //   <li key={response.id}>
  //     <p>
  //       score: {response.score}, comment: {response.comment}
  //     </p>
      
      
  //   </li>
  // ));

const timeStamp= [];
for (let i = 0; i < responses.length; i += 1) {
  timeStamp.push(new Date(responses[i].created_at).toLocaleDateString());
}
console.log(timeStamp)


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
       <Typography  
        variant="h4" 
        component="div" 
        sx={{m:3}}>
          NET PROMOTER SCORE
        </Typography>
    
      {/* <ul>{responsesList}</ul> */}
      
    
     <Box  sx={{ marginLeft: 70}}>
      <Card sx={{ maxWidth: 500, m:2, 
        display: 'flex',  
        background:"#E5E5E5", 
        '&:hover': {
        backgroundColor: 'white'},
      }} 
      >
        <Typography 
        align = "center" 
        variant="h3" 
        component="div" 
        sx={{color:"black", 
        m:3, width:800, 
     
        }} 
        
        > {`Total Responses ${All}`}
        </Typography>
      </Card>
     </Box>

    
    <Box  
        sx={{ display: 'flex', flexDirection: 'row',  marginLeft: 1, height:300, marginBottom:10 }}>

      <Card sx={{ 
            maxWidth: 350, 
            m:3, color:"#E26060", 
            background:"#E5E5E5",
            '&:hover': {
              backgroundColor: 'white'}
          }} >
              <Typography   
                  sx={{color:"black", 
                  m:3, width:800, 
                  paddingRight:60}} 
                  align = "center" 
                  variant="h3"  
                  component="div" >
                    Detractors % 
              </Typography>
              <Typography 
                align = "center" 
                variant="h3" 
                sx={{fontSize: 60, fontWeight:"bold"}}
                component="div"
                marginTop={7} > 
                {`${Detractors}`} 
              </Typography>
      </Card>

      <Card sx={{ 
        maxWidth: 350, 
        m:3, 
        background:"#E5E5E5",  
        color:"#F3C934",
        '&:hover': {
            backgroundColor: 'white'}
      }}
      >
          <Typography   
            sx={{color:"black", 
            m:3, width:600, 
            paddingRight:40,
            justifyContent: 'center'}} 
            align = "center" 
            variant="h3"  
            component="div" >
              Passives %
          </Typography>
          <Typography 
          align = "center" 
          variant="h3" 
          sx={{fontSize: 60, fontWeight:"bold"}}
          component="div" 
          marginTop={7} > 
          {` ${Passives}`} 
          </Typography>

      </Card>

      <Card sx={{ 
        maxWidth: 350, 
        m:3, 
        color:"#52A569", 
        background:"#E5E5E5", 
        '&:hover': {
            backgroundColor: 'white'},
            
      }} >
          <Typography   
          sx={{color:"black", 
          m:3, width:600, 
          paddingRight:40}} 
          align = "center" 
          variant="h3"  
          component="div" >
            Promoters % 
          </Typography>
          <Typography   
          align = "center" 
          variant="h3"
          sx={{fontSize: 60, fontWeight:"bold"}}
          marginTop={7} > 
          {` ${Promoters} `}
          </Typography>
      </Card>
      <Card sx={{ 
        borderRadius:"50%",
        maxWidth: 250,
        m:3,  
        background:"#E5E5E5",
        '&:hover': {
          backgroundColor: 'white'}}} 
      >
        <Typography   
          sx={{color:"black", 
          m:5, 
          width:200,
          paddingRight:5}} 
          align = "center" 
          variant="h4"  
          component="div" >
            NPS
        </Typography>
        <Typography 
          align = "center" 
          variant="h2" 
          sx={{fontSize: 60, fontWeight:"bold"}}
          component="div"
          marginTop={-3}  > 
          {` ${NPS}`}
        </Typography>
      </Card>
    </Box>
    <Box>
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
            layout={ { height:700, width: 700, title: 'Net Promoter Score',
            font:{
              size: 30,
            },
            
            legend: {
              x: 0.1,
              y: -0.1,
              orientation: "h",
              font:{
                size: 25
              },
              bgcolor: '#E2E2E2',
              bordercolor: '#FFFFFF',
              borderwidth: 1,
              borderradius:1,
            },
            annotations: [
              {
                font: {
                  size: 30
                },
                showarrow: false,
                text:`NPS`,
                x: 0.5,
                y: 0.55
              },
                {
                  font: {
                    size: 30
                  },
                  showarrow: false,
                  text:`${NPS}`,
                  x: 0.5,
                  y: 0.45
                }
            ]
          }} 
      />

      <Plot
          data={[
            {
              y: [Detractors ,Passives, Promoters],
              x: ["Detractors", "Passives", "Promoters"],
              hoverinfo: 'label+percent',
              marker:{
                color:[
                  '#ED6930',
                  '#ED6930',
                  '#ED6930'
                ],
                opacity: 0.9,
                size:10
              },
              type: 'bar'
            },
            ]}
          layout={ {height:700, title: 'Net Promoter Score',  font:{
            size: 25
            },
          } }

      />
    </Box>
  </div>
  );
}

export default Data;

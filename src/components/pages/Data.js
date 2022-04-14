import {Box} from '@mui/material';
import {Card} from '@mui/material';

import {Typography} from '@mui/material';
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";


function Data() {
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchResponses()), []);

  const responses = useSelector((state) => state.responses);
  console.log(responses);


  const responsesList = responses.map((response) => (
    <li key={response.id}>
      <p>
        score: {response.score}, comment: {response.comment}
      </p>
      
      
    </li>
  ));

let scores = responses.map((res)=>(Number((res.score))))
let detractor=0
let promoter = 0;
let passive = 0
  for (let i=0; i< scores.length;  i++){
    if (scores[i]>=9) promoter++;
    if (scores[i]>=7 && scores[i] <8) passive++;
    if(scores[i] <=6) detractor++;
  };
let PR= promoter++
let DE = detractor++
let PA = passive++

const All = PR+DE+PA

const Promoters=(PR/All)*100
const Detractors =(DE/All)*100
const Passives=(PA/All)*100
const NPS=(Promoters - Detractors)


  return (
    <div>
      <h1>NET PROMOTER SCORE</h1>
      <p>Scores</p>
      <ul>{responsesList}</ul>
    
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
        sx={{ display: 'flex', flexDirection: 'row',  marginLeft: 1, height:300 }}>

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
          marginTop={7} > 
          {` ${Promoters} `}
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
          component="div" 
          marginTop={7} > 
          {` ${Passives}`} 
          </Typography>

      </Card>

    <Card sx={{ 
      maxWidth: 350, 
      m:3, color:"red", 
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
          component="div"
          marginTop={7} > 
          {`${Detractors}`} 
        </Typography>
    </Card>
    <Card sx={{ 
      borderRadius:"50%",
      maxWidth: 350,
      m:3,  
      background:"#E5E5E5",
      '&:hover': {
        backgroundColor: 'white'}}} 
    >
      <Typography   
        sx={{color:"black", 
        m:3, 
        width:800,
        paddingRight:60}} 
        align = "center" 
        variant="h3"  
        component="div" >
          NPS
      </Typography>
      <Typography 
        align = "center" 
        variant="h3" 
        component="div"
        marginTop={7}  > 
        {` ${NPS}`}
      </Typography>
    </Card>
    </Box>
   
    </div>
  );
}

export default Data;

import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import { Link } from 'react-router-dom';
import Plot from 'react-plotly.js';
import moment from 'moment';



const StackedBar = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchResponses()), []);
    const responses = useSelector((state) => state.responses);

    // let detractor = responses.filter(scores=>(scores.score<=6)).map((scores, i)=>(
    //     <li key={scores.id}> 
        
    //    <p>{ moment(scores.created_at).utc().format('DD-MM-YYYY')} </p>
        
        
    //     <p> {scores.score}</p>
      
    //     </li>
    //     ));

        let abc = responses.filter(scores=>scores.score >=9).map((scores)=>(moment(scores.created_at).utc().format('DD-MM-YYYY')))
        let dcb = responses.filter(scores=>scores.score >=9).map((scores)=>(scores.score))


   const  data3 = 
    {
            x: ['07-04-2022', '07-04-2022', '08-04-2022', '08-04-2022', '22-04-2022', '22-04-2022', '22-04-2022', '22-04-2022', '22-04-2022', '22-04-2022', '22-04-2022', '22-04-2022', '27-04-2022', '27-04-2022'],
            y: [9, 10, 10, 9, 9, 10, 9, 9, 10, 10, 9, 9, 10, 10],
          type: 'bar',
          name: 'Promoters',
          marker:{
            colors: [
              '#CE672E', 
              '#F3C934', 
              '#00ff00'],   
          }
    }
  const data2 = 
    {
            x: ['07-04-2022', '08-04-2022', '22-04-2022', '22-04-2022', '22-04-2022', '22-04-2022', '22-04-2022'],
            y: [7, 7, 8, 7, 8, 8, 7],
          type: 'bar',
          name: 'Passives',
          mmarker:{
            colors: [
              '#CE672E', 
              '#F3C934', 
              '#00ff00'],   
          }
    }

    const data1 = 
    {
            x: ['07-04-2022', '07-04-2022', '07-04-2022', '08-04-2022'],
            y: [1, 6, 2, 5],
          type: 'bar',
          name: 'Detractors',
          marker:{
            colors: [
              '#CE672E', 
              '#F3C934', 
              '#00ff00'],   
          }
    }

 

    return (
        <div>
            {/* {detractor} */}
            <Box sx={{ display: 'flex', flexDirection: 'row', m:3}}>
              <Plot
                data={[data1, data2, data3]}
                layout={{width:600, barmode: 'stack'}}
              />
            </Box>
            <Box>
              <Plot
              data={[{
                x:[abc],
                y:[dcb],
                marker:{
                  color:[
                    '#ED6930',
                    '#ED6930',
                    '#ED6930'
                  ],
                  opacity: 0.9,
                  size:10
                },
                type:'bar'
              }]}
              layout={{height:500, width: 500, title: 'Net Promoter Score',  font:{size: 20}} }
              />
            </Box>
       
            
        </div>
    );
};

export default StackedBar;
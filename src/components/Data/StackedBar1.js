import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import { Link } from 'react-router-dom';
import Plot from 'react-plotly.js';
import moment from 'moment';



const StackedBar1 = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchResponses()), []);
    const responses = useSelector((state) => state.responses);


        let abc = responses.filter(scores=>scores.score >=9).map((scores)=>(moment(scores.created_at).utc().format('DD-MM-YYYY')))
        let dcb = responses.filter(scores=>scores.score >=9).map((scores)=>(scores.score))


   function removeDuplicate(array, key){
     return array.reduce((accumulator, element)=>{
       if(!accumulator.find(el=>el[key]===element[key]))
       {
         accumulator.push(element);
       }
       return accumulator;
     }, []);
   }

 

    return (
        <div>
            {/* {detractor} */}
            <Box sx={{ display: 'flex', flexDirection: 'row', m:3}}>
            {removeDuplicate(responses, 'score').filter(scores=>scores.score >=9).map(item=>(
              <div key={item.score}>
               <li>{item.score} </li> 
               <li>{(moment(item.created_at).utc().format('DD-MM-YYYY'))}</li>  </div>
              
              
            ))}
            </Box>
       
            
        </div>
    );
};

export default StackedBar1;
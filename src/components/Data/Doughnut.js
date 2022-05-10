import {Box} from '@mui/material';
import {Typography} from '@mui/material';
import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import Plot from 'react-plotly.js';
import Responses from './Responses';
import moment from "moment";
import 'chartjs-adapter-date-fns';
const Doughnut = (props) => {
  let dateFromValue = moment(props.dateFrom).format('YYYY-MM-DD');
  let dateToValue = moment(props.dateTo).format('YYYY-MM-DD');
  console.log(dateToValue)

    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchResponses()), []);
    const responses = useSelector((state) => state.responses);
    console.log(responses)

        let detractor = 0
        let promoter = 0;
        let passive = 0

        if(props.dateFrom==="" || props.dateTo===""){
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

        const NPS = Math.min(Math.max(parseInt(NPScore),-100),100);
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
               <Plot
                 data={[
                   {
                     values: [DE,PA, PR],
                     labels: ["Detractors", "Passives", "Promoters"],
                     text: [
                       [` <a href="/MySurveys"  target="_top"> 😞 </a>`],
                       [`<a href="/"  target="_top">😀</a>`],
                       [`<a href="/data"  target="_top">😁</a>`]],
                     domain: {column: 0},
                     hoverinfo: 'label+percent',
                     textinfo:'value',
                     rotation:90,
                     marker:{
                       colors: [
                         '#E26060',
                         '#F3C934',
                         '#52A569'],
                     },
                     textposition: 'inside',
                     hole: .4,
                     type: 'pie',
                     textfont:{'size': [25, 25, 25], 'color': ['#FFFFFF', '#FFFFFF', '#FFFFFF']}

                   },
                   ]}
                   layout={ { height:400, width: 450, title: 'Net Promoter Score',
                   font:{
                     size: 20,
                   },

                   legend: {
                     x: 0,
                     y: -0.1,
                     orientation: "h",
                     font:{
                       size: 10,
                     },
                     bgcolor: '#C4C4C4',
                     bordercolor: '#FFFFFF',
                     borderwidth: 1,
                     borderpad:20,
                   },
                   annotations: [
                     {
                       font: {
                         size: 20
                       },
                       showarrow: false,
                       text:`NPS`,
                       x: 0.5,
                       y: 0.6,

                     },
                       {
                         font: {
                           size: 30
                         },
                         showarrow: false,
                         text:`${NPS}`,
                         x: 0.5,
                         y: 0.45
                       },
                   ]
                 }}
               />
               <Responses/>
           </Box>
         </div>
       );
};
export default Doughnut;

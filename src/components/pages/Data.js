import Doughnut from "../Data/Doughnut";
import ResponsesChart from "../Data/ResponsesChart";
import NPSChart from "../Data/NPSChart";
import React, { useState } from "react";
import { Box, Grid, TextField, Paper} from "@mui/material";


function Data() {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
   <> 
      <Box>
        <Grid container  alignItems="flex-end" direction="column" sx={{marginTop:5, marginLeft:-32}}>
            <Grid sx={{margin: 0, display: "inline-flex", columnGap: 1}}>
              <TextField 
                inputProps={{style: {fontSize: 20}}}  
                helperText="select start Date" 
                color="success" 
                sx={{ m: 1, width: '200px' }} 
                type="date"  
                id="dateFrom" 
                value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
              <TextField 
                inputProps={{style: {fontSize: 20}}} 
                sx={{ m: 1, width: '200px' }} 
                color="success" 
                helperText="select end Date"  
                type="date" 
                id="dateTo" 
                value={dateTo} onChange={(e) =>
                setDateTo(e.target.value)}
              />
            </Grid>
        </Grid>

      </Box>
      <Doughnut dateFrom={dateFrom} dateTo={dateTo}/>
      <Box>
       <NPSChart dateFrom={dateFrom} dateTo={dateTo}/> 
      </Box>
      <Box>
      <ResponsesChart dateFrom={dateFrom} dateTo={dateTo}/>
      </Box>
      </>
  );
}

export default Data;

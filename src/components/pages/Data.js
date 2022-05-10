import Doughnut from "../Data/Doughnut";
import ResponsesChart from "../Data/ResponsesChart";
import NPSChart from "../Data/NPSChart";
import React, { useState } from "react";
import { Box, Grid} from "@mui/material";
import { Paper } from "@mui/material";


function Data(props) {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <Paper elevation={0}>
      <Box>
        <Grid item container xs={10} alignItems="flex-end" direction="column" sx={{marginTop:5}}>
            <Grid  sx={{margin: 0, display: "inline-flex", columnGap: 0}}>
              <input placeholder="Start Date" type="date" id="dateFrom" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
              <input type="date" id="dateTo" value={dateTo} onChange={(e) =>
              setDateTo(e.target.value)}
              />
            </Grid>
        </Grid>

      </Box>
      <Doughnut dateFrom={dateFrom} dateTo={dateTo}/>
      <NPSChart dateFrom={dateFrom} dateTo={dateTo}/> 
      <ResponsesChart dateTo={dateTo} dateFrom={dateFrom}/>
  </Paper>
  );
}

export default Data;

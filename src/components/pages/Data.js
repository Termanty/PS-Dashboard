import Doughnut from "../Data/Doughnut";
import ResponsesChart from "../Data/ResponsesChart";
import NPSChart from "../Data/NPSChart";
import Responses from "../Data/Responses";
import React, { useState } from "react";
import { Box, Grid, TextField, styled, Paper} from "@mui/material";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function Data({selection}) {
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  return (
    <>
      <Box elevation={0} sx={{ marginLeft:5}} maxWidth="90%">
        <Box sx={{ marginTop:2}}>
          <Grid
            container
            alignItems="flex-end"
            direction="column"
            sx={{ marginBottom:-10, marginLeft: -20 }}
          >
            <Grid sx={{ margin: 0, display: "inline-flex", columnGap: 1,}}>
              <TextField
                inputProps={{ style: { fontSize: 20 } }}
                helperText="select start Date"
                color="success"
                sx={{ m: 1, width: "200px", }}
                type="date"
                id="dateFrom"
                value={dateFrom}
                onChange={(e) => setDateFrom(e.target.value)}
              />
              <TextField
                inputProps={{ style: { fontSize: 20 } }}
                sx={{ m: 1, width: "200px" }}
                color="success"
                helperText="select end Date"
                type="date"
                id="dateTo"
                value={dateTo}
                onChange={(e) => setDateTo(e.target.value)}
              />
            </Grid>
          </Grid>
      
        </Box>
        <Doughnut dateFrom={dateFrom} dateTo={dateTo}/>
        <Grid container spacing={-3}>
          <Grid item xs={3} md={10} sx={{marginTop:-1,  marginLeft:-10}}>
            <ResponsesChart dateFrom={dateFrom} dateTo={dateTo} />
          </Grid>
       
        </Grid>
      </Box>
    </>
  );
}

export default Data;

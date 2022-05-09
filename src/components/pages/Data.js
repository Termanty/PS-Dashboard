import Doughnut from "../Data/Doughnut";
import ResponsesChart from "../Data/ResponsesChart";
import NPSChart from "../Data/NPSChart";
import React, { useState } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

function Data() {
  const [dateFrom, setDateFrom] = useState(new Date);
const [dateTo, setDateTo] = useState(new Date());

  return (
    <div>
       <div>
       {/* <div style={{margin: 50}}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DesktopDatePicker
          label="From"
          value={dateFrom}
          minDate={new Date('2021-01-10')}
          onChange={(newValue) => {
            setDateFrom(newValue);
          }}
          renderInput={(params) =>
          <React.Fragment>
            <TextField {...params} />
          </React.Fragment>}
        />
        <DesktopDatePicker
          label="To"
          value={dateTo}
          onChange={(newValue) => {
            setDateTo(newValue);
          }}
          renderInput={(params) =>
            <React.Fragment>
          <TextField {...params} />
          </React.Fragment>}
        />
  </LocalizationProvider> */}
    </div>
  <div>
  <div style={{margin: 50, display: "inline-flex", columnGap: 20}}>
  <input type="date" id="dateFrom" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
  <input type="date" id="dateTo" value={dateTo} onChange={(e) =>
  setDateTo(e.target.value)}
   />
  </div>
  </div>
      <Doughnut dateTo={dateTo} dateFrom={dateFrom}/>
      <NPSChart/> 
      <ResponsesChart/>
  </div>
  );
}

export default Data;

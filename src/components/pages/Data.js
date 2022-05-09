import { useState } from "react";
import Doughnut from "../Data/Doughnut";
import ResponsesChart from "../Data/ResponsesChart";
import NPSChart from "../Data/NPSChart";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import moment from "moment";
import React from "react";

function Data() {
const [dateFrom, setDateFrom] = useState(new Date);
const [dateTo, setDateTo] = useState(new Date());
console.log(dateFrom);
  return (
    <div>
      <div style={{margin: 50}}>
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
  </LocalizationProvider>
  </div>
      <Doughnut dateTo={dateTo} dateFrom={dateFrom}/>
      <NPSChart/>
      <ResponsesChart/>
  </div>
  );
}

export default Data;

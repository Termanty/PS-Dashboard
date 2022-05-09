import { useState } from "react";
import Doughnut from "../Data/Doughnut";
import ResponsesChart from "../Data/ResponsesChart";
import NPSChart from "../Data/NPSChart";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import moment from "moment";
import React from "react";

function Data() {
const [dateFrom, setDateFrom] = useState("");

const [dateTo, setDateTo] = useState("");

  return (
    <div>
      <div>
      {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
          label="From"
          format="DD-MM-YYYY"
          value={dateFrom}
          onChange={(newValue) => {
            setDateFrom(newValue);
          }}
          renderInput={(params) =>
          <React.Fragment>
            <TextField {...params} />
          </React.Fragment>}
        />
        <DatePicker
          label="To"
          format="DD-MM-YYYY"
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
  <div style={{margin: 50, display: "inline-flex", columnGap: 20}}>
  <input type="date" id="dateFrom" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
  <input type="date" id="dateTo" value={dateTo} onChange={(e) =>
  setDateTo(e.target.value)}
   />
  </div>
     <Doughnut dateFrom={dateFrom} dateTo={dateTo}/>
      <NPSChart/>
      <ResponsesChart/>
  </div>
  );
}

export default Data;

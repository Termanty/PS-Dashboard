import { useState } from "react";
import Doughnut from "../Data/Doughnut";
import ResponsesChart from "../Data/ResponsesChart";
import NPSChart from "../Data/NPSChart";
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { TextField } from "@mui/material";
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React from "react";

function Data() {

const [dateFrom, setDateFrom] = useState("");
const [dateTo, setDateTo] = useState("");

  return (
    <div>
  <div style={{margin: 50, display: "inline-flex", columnGap: 10, fontSize:"40px"}}>
    <label style={{width:200}}>From
  <input type="date" id="dateFrom" value={dateFrom}
  onChange={(e) => setDateFrom(e.target.value
  )}
  />
  </label>
  <label style={{width:200}}>To
  <input type="date" id="dateTo" value={dateTo}
  onChange={(e) => setDateTo(e.target.value
  )}
   />
   </label>
  </div>
     <Doughnut dateFrom={dateFrom} dateTo={dateTo}/>
      <NPSChart/>
      <ResponsesChart/>
  </div>
  );
}

export default Data;

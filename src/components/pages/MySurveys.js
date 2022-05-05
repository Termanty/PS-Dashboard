import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../store/surveys/reducer";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import { PagesStyle } from './Pages.style.js';
import moment from "moment";
import OutlinedInput from '@mui/material/OutlinedInput';
import Paper from "@mui/material/Paper";
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from "@mui/material/InputAdornment";

function Dashboard() {
  const [searchedSurvey, setSearchedSurvey] = useState("");
  const dispatch = useDispatch();
  const classes = PagesStyle();
  useEffect(() =>
  dispatch(fetchSurveys()), []);

  const surveys = useSelector((state) => state.surveys);
  console.log(surveys);

  const surveysList = surveys.map((survey) => {
    return (
      <li key={survey.id}>
        <h3>{survey.name}</h3>
        <p>{survey.question_text}</p>
      </li>
    );
  });

  return (
    <>
    <Paper sx={{height: 100, justifyContent: "center", textAlign: "center", paddingTop: 3}}>
      <>
    <OutlinedInput
      type = "text"
       placeholder = "Search survey name..."
       sx = {{ width: 500, height: 55, backgroundColor: "#F3F6F9", borderRadius: 5 }}
       onChange = {(e)=>setSearchedSurvey(e.target.value)}
      />
      </>
      </Paper>
      <Paper>
    <TableContainer sx={{marginTop:10}}>
      <Table sx={{minWidth: 650}}>
      <TableHead>
        <TableRow>
            <TableCell
            align = "left"
            sx={{fontSize: 20, paddingBottom: 5, color: "gray"}}
            >Name
            </TableCell>
            <TableCell
            align = "left"
            sx={{fontSize: 20, paddingBottom: 5, color: "gray"}}
            >Date created
            </TableCell>
            <TableCell
            align = "left"
            sx={{fontSize: 20, paddingBottom: 5, color: "gray"}}
            >Status
            </TableCell>
            <TableCell
            align = "left"
            sx={{fontSize: 20, paddingBottom: 5, color: "gray"}}
            >Open
            </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          { !searchedSurvey ?
          surveys.map((survey) => (
            <TableRow
            key={ survey.id }
            sx={{ '&:last-child td, &:last-child th': {border: 0} }}
            >
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:18}}>
                {survey.name}
              </TableCell>
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:18}}>
                {moment(survey.created_at).utc().format('DD.MM.YYYY')}
              </TableCell>
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:18}}>
                <div style={{display: "flex"}}>
                {"Ongoing"}<div className={classes.circle} />
                </div>
              </TableCell>
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:18}}>
              <Button className={classes.openButton} key={survey.id} variant = "contained" href = {`/${survey.name}`}>Open</Button>
              </TableCell>
            </TableRow>
          )):
          surveys.filter((srv) => srv.name.toLowerCase()
          .includes(searchedSurvey.toLowerCase()
          ))
          .map((survey) => (
            <TableRow
            key={ survey.id }
            sx={{ '&:last-child td, &:last-child th': {border: 0} }}
            >
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:18}}>
                {survey.name}
              </TableCell>
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:18}}>
                {moment(survey.created_at).utc().format('DD.MM.YYYY')}
              </TableCell>
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:18}}>
                <div style={{display: "flex"}}>
                {"Ongoing"}<div className={classes.circle} />
                </div>
              </TableCell>
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:18}}>
              <Button className={classes.openButton} key={survey.id} variant = "contained" href = {`/${survey.name}`}>Open</Button>
              </TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </>
  );
}

export default Dashboard;

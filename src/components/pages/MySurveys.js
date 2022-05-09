import React, { useEffect } from "react";
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


function Dashboard() {
  const dispatch = useDispatch();
  const classes = PagesStyle();
  useEffect(() =>
  dispatch(fetchSurveys()), []);

  const surveys = useSelector((state) => state.surveys);
  

  const surveysList = surveys.map((survey) => {
    return (
      <li key={survey.id}>
        <h3>{survey.name}</h3>
        <p>{survey.question_text}</p>
      </li>
    );
  });

  return (
    <TableContainer sx={{marginTop:5}}>
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
          {surveys.map((survey) => (
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
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Dashboard;

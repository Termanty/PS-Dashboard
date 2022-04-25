import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../store/surveys/reducer";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Dashboard() {
  const dispatch = useDispatch();
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
    // <div>
    //   <h1>My surveys</h1>
    //   <ul>{surveysList}</ul>
    // </div>
    <TableContainer sx={{marginTop:5}}>
      <Table sx={{minWidth: 650}}>
      <TableHead>
        <TableRow>
            <TableCell
            align = "left"
            sx={{fontSize: 18, paddingBottom: 5, color: "gray"}}
            >Name
            </TableCell>
            <TableCell
            align = "left"
            sx={{fontSize: 18, paddingBottom: 5, color: "gray"}}
            >Survey question
            </TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
          {surveys.map((survey) => (
            <TableRow
            key={ survey.id }
            sx={{ '&:last-child td, &:last-child th': {border: 0} }}
            >
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:16}}>
                {survey.name}
              </TableCell>
              <TableCell component = "th" scope = "row" sx={{borderBottom: "none", fontSize:16}}>
                {survey.question_text}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Dashboard;

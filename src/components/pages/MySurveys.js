import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSurveys } from "../../store/surveys/reducer";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import OutlinedInput from "@mui/material/OutlinedInput";
import Divider from "@mui/material/Divider";
import moment from "moment";
import { PagesStyle } from "./Pages.style.js";

function Dashboard() {
  const [searchedSurvey, setSearchedSurvey] = useState("");
  const dispatch = useDispatch();
  const classes = PagesStyle();
  useEffect(() => dispatch(fetchSurveys()), []);

  const surveys = useSelector((state) => state.surveys);
  const theme = useSelector((state) => state.theme);

  const colorToggle = (theme) => {
    return theme.darkTheme ? "black" : "#F3F6F9";
  };

  return (
    <>
      <Box sx={{ padding: 5 }}>
        <OutlinedInput
          type="text"
          placeholder="Search survey name..."
          sx={{
            width: 400,
            height: 62,
            backgroundColor: colorToggle(theme),
            borderRadius: 5,
          }}
          onChange={(e) => setSearchedSurvey(e.target.value)}
        />
      </Box>
      <Divider />
      <TableContainer sx={{ marginTop: 5 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell
                align="left"
                sx={{ fontSize: 20, paddingBottom: 5, color: "gray" }}
              >
                Name
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 20, paddingBottom: 5, color: "gray" }}
              >
                Date created
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 20, paddingBottom: 5, color: "gray" }}
              >
                Status
              </TableCell>
              <TableCell
                align="left"
                sx={{ fontSize: 20, paddingBottom: 5, color: "gray" }}
              >
                Open
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!searchedSurvey
              ? surveys.map((survey) => (
                  <TableRow
                    key={survey.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: "none", fontSize: 18 }}
                    >
                      {survey.name}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: "none", fontSize: 18 }}
                    >
                      {moment(survey.created_at).utc().format("DD.MM.YYYY")}
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: "none", fontSize: 18 }}
                    >
                      <div style={{ display: "flex" }}>
                        {"Ongoing"}
                        <div className={classes.circle} />
                      </div>
                    </TableCell>
                    <TableCell
                      component="th"
                      scope="row"
                      sx={{ borderBottom: "none", fontSize: 18 }}
                    >
                      <Button
                        className={classes.openButton}
                        key={survey.id}
                        variant="contained"
                        href={`/${survey.name}`}
                      >
                        Open
                      </Button>
                    </TableCell>
                  </TableRow>
                ))
              : surveys
                  .filter((srv) =>
                    srv.name
                      .toLowerCase()
                      .includes(searchedSurvey.toLowerCase())
                  )
                  .map((survey) => (
                    <TableRow
                      key={survey.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ borderBottom: "none", fontSize: 18 }}
                      >
                        {survey.name}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ borderBottom: "none", fontSize: 18 }}
                      >
                        {moment(survey.created_at).utc().format("DD.MM.YYYY")}
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ borderBottom: "none", fontSize: 18 }}
                      >
                        <div style={{ display: "flex" }}>
                          {"Ongoing"}
                          <div className={classes.circle} />
                        </div>
                      </TableCell>
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ borderBottom: "none", fontSize: 18 }}
                      >
                        <Button
                          className={classes.openButton}
                          key={survey.id}
                          variant="contained"
                          href={`/${survey.name}`}
                        >
                          Open
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default Dashboard;

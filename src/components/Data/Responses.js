import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TablePagination from "@mui/material/TablePagination";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from "../../store/responses/reducer";
import "chartjs-adapter-date-fns";
import moment from "moment";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.text.disabled,
    color: theme.palette.common.white,
    fontSize: 30,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
    border: "solid 1px #ED6930",
    borderRight: 0,
    fontFamily:'sans-serif'
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
    border: 1,
    borderColor: theme.palette.common.primary,
  },
  "&:nth-of-type(even)": {
    backgroundColor: theme.palette.common.gray,
    color: theme.palette.common.white,
  },
  "&:last-child td, &:last-child th": {
    borderRight: 0,
  },
}));

// For descending and ascending order
function descendingComparator(a, b, orderby) {
  if (b[orderby] < a[orderby]) {
    return -1;
  }
  if (b[orderby] > a[orderby]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderby) {
  return order === "asc"
    ? (a, b) => descendingComparator(a, b, orderby)
    : (a, b) => -descendingComparator(a, b, orderby);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}
// For ending title
const headCells = [
  {
    id: "created_at",
    label: "Date Created",
    minWidth: 170,
    align: 'right',
  },
  {
    id: "score",
    label: "Score",
    minWidth: 170,
    align: 'right',
  },
  {
    id: "comment",
    label: "Comments",
    minWidth: 170,
    align: 'right',
  },
];
// end here

const Responses = ({ selection, dateFrom, dateTo }) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(4);

  const [order] = useState("asc");
  const [orderby] = useState("created_at");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect(() => dispatch(fetchResponses()), []);
  let responses = useSelector((state) => state.responses);

  let dateToValue = moment.utc(dateTo).add(1, 'day').format("");

  if (dateFrom !== "" && dateToValue !== "") {
    responses = responses.filter((res) => {
      return res.created_at >= dateFrom && res.created_at <= dateToValue;
    });
  }

  if (selection === "Promoters") {
    responses = responses.filter((res) => res.score >= 9);
  }
  if (selection === "Passives") {
    responses = responses.filter((res) => res.score >= 7 && res.score <= 8);
  }
  if (selection === "Detractors") {
    responses = responses.filter((res) => res.score <= 6);
  }
  return (
    <Paper
      sx={{
        width: "100%",
        border: "solid 2px #ED6930",
      }}
    >
        <TableContainer sx={{ maxHeight: 350 }}>
          <Table stickyHeader aria-label="sticky table">
             <TableHead  
              order={order}
              orderby={orderby}>
            <TableRow>
              {headCells.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ top: 0, minWidth: column.minWidth , fontSize: 20,}}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
            <TableBody>
              {stableSort(responses, getComparator(order, orderby))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((response) => (
                  <StyledTableRow key={response.id}>
                    <StyledTableCell align="center">
                      {new Date(response.created_at).toDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {response.score}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {response.comment}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[4, 10, 25, 50, 100]}
          component="div"
          count={responses.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
  );
};

export default Responses;

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from '../../store/responses/reducer';
import moment from 'moment';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.text.disabled,
      color: theme.palette.common.white,
      fontSize:25
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 16,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

const Responses = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

  useEffect(() => dispatch(fetchResponses()), []);
  const responses = useSelector((state) => state.responses);

    return (
        <Paper sx={{ width: '50%', overflow: 'hidden', marginTop:"20px", marginLeft:"50px" }}>
            <TableContainer>
            <Table  aria-label="customized table">
                <TableHead>
                <TableRow >
                    {/* <StyledTableCell align="center">S/NO</StyledTableCell> */}
                    <StyledTableCell align="center">Date Created</StyledTableCell>
                    <StyledTableCell align="center">Score</StyledTableCell>
                    <StyledTableCell align="left">Comments</StyledTableCell>
                </TableRow>
                </TableHead>
                <TableBody >
                {responses.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((response) => (
                    <StyledTableRow key={response.id} >
                        {/* <StyledTableCell align="center">{response.id}</StyledTableCell> */}
                    <StyledTableCell align="center">
                        {moment(response.created_at).utc().format('DD-MM-YYYY')}
                    </StyledTableCell>
                    <StyledTableCell align="center">{response.score}</StyledTableCell>
                    <StyledTableCell align="left">{response.comment}</StyledTableCell>
                    
                    </StyledTableRow>
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5,10, 25, 50, 100]}
            component="div"
            count={responses.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    </Paper>);
};

export default Responses;
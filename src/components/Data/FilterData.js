import React, { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from '../../store/responses/reducer';
import moment from 'moment';
import {Typography} from '@mui/material'; 
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import Moment from "react-moment";


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


function FilterData() {
    const dispatch = useDispatch();
  
    useEffect(() => dispatch(fetchResponses()), []);
  
    const responses = useSelector((state) => state.responses);

  return (
  <Paper elevation={0}>
        <Paper sx={{ width: '70%', overflow: 'hidden', marginTop:"20px", marginLeft:"50px" }}>
            <TableContainer>
                <Table  aria-label="customized table">
                    <TableHead>
                    <TableRow>
                    <StyledTableCell align="center">S/NO</StyledTableCell>
                        <StyledTableCell align="center">Date Created</StyledTableCell>
                        <StyledTableCell align="center">Score</StyledTableCell>
                        <StyledTableCell align="left">Comments</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {responses.filter(date => moment(date.created_at).utc().format('DD-MM-YYYY') <='07-04-2022').map((response) => (
                        <StyledTableRow key={response.id}>
                            <StyledTableCell align="center">{response.id}</StyledTableCell>
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
        </Paper>

        <Paper sx={{ width: '70%', marginTop:"10px", marginLeft:"50px" }}>  
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper',}}>      
                <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{m:1}}> 
                    Detractors
                </Typography> 
                    {responses.filter(scores=>(scores.score<=6) ).map((res, i)=>(
                    <ListItem key={res.id}>  
                        <ListItemText  spacing={5} primary ={`${res.score} ${" "} ${"  "}${moment(res.created_at).utc().format('DD-MM-YYYY')} ${" "}${res.comment} ` } />
                    </ListItem>  
                    ))}
                <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{m:1}}> 
                    Passives
                </Typography>
                    {responses.filter(scores=>scores.score>=7 && scores.score<=8).map((res, i)=>(
                    <ListItem key={res.id}>   
                        <ListItemText  spacing={5} primary ={`${res.score} ${" "}${moment(res.created_at).utc().format('DD-MM-YYYY')} ${res.comment}` } />
                    </ListItem> 
                    ))}
                <Typography 
                    variant="h5" 
                    component="div" 
                    sx={{m:1}}> 
                    Promoters
                </Typography>
                    {responses.filter(scores=>scores.score>=9).map((res, i)=>(
                        <ListItem key={res.id}>   
                            <ListItemText  spacing={5} primary ={`${res.score} ${" "}${moment(res.created_at).utc().format('DD-MM-YYYY')} ${" "}${res.comment} ` } />
                        </ListItem> 
                    ))}
            </List>   
        </Paper>
    </Paper> 
  
  );
}
export default FilterData;

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';
import TablePagination from '@mui/material/TablePagination';
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResponses } from '../../store/responses/reducer';
import { Typography } from '@mui/material';
import 'chartjs-adapter-date-fns';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.text.disabled,
      color: theme.palette.common.white,
      fontSize:30,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 15,
      color:"#000000"
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      // backgroundColor: theme.palette.action.hover,
      backgroundColor:"gray",
      color:"#FFFFFF"
      
    },
    '&:nth-of-type(even)': {
      // backgroundColor: theme.palette.action.hover,
      backgroundColor:"white",
      color:"#FFFFFF"
      
    },
    '&:last-child td, &:last-child th': {
      border: 5,
    
    },
  }));

// For descending and ascending order
function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'asc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
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
    id: 'created_at',
    label: 'Date Created',
    
  },
  {
    id: 'score',
    label: 'Score',
  },
  {
    id: 'comment',
    label: 'Comments',
  },
  
];

function EnhancedTableHead(props) {
  const {  order, orderBy,  onRequestSort } =
    props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };


  return (
    <TableHead>
      <TableRow>
        
        {headCells.map((headCell) => (
          <TableCell
          sx={{backgroundColor:'#25384F', fontSize:25, color:"white"}}
          align="center"
          key={headCell.id}
          >
          
          <TableSortLabel 
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
            </TableSortLabel>
         
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}
// end here

const Responses = ({selection, dateFrom , dateTo}) => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('created_at');
    
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };
    
    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };
    const handleRequestSort = (event, property) => {
      const isAsc = orderBy === property && order === 'desc';
      setOrder(isAsc ? 'asc' : 'desc');
      setOrderBy(property);
    };

  useEffect(() => dispatch(fetchResponses()), []);
  let responses = useSelector((state) => state.responses);
  
  if (dateFrom !== "" && dateTo !=="") {
    responses=responses.filter(res=>{
      return (res.created_at >= dateFrom && res.created_at <= dateTo)
    })
  }


    if(selection ==='Promoters'){
      responses=responses.filter(res=>(res.score>=9))
    }
    if(selection ==='Passives'){
      responses=responses.filter(res=>(res.score>=7 && res.score<=8 ))
    }
    if(selection ==='Detractors'){
      responses=responses.filter(res=>(res.score<=6))
    }
    return (
      
        <Paper sx={{ width: '60%', overflow: 'hidden', marginTop:"10px" }}>
          <Typography sx={{m:2, bgcolor:"white"}}>Click on each arc to view the results</Typography>
            <TableContainer>
            <Table >
                <EnhancedTableHead
                  order={order}
                  orderBy={orderBy}
                  onRequestSort={handleRequestSort}
                />
                
                <TableBody >
                {stableSort(responses, getComparator(order, orderBy)).slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((response) => (
                    <StyledTableRow key={response.id} >
                    <StyledTableCell align="center">
                        {new Date(response.created_at).toDateString()}
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
      
   </Paper>
    );
};

export default Responses;

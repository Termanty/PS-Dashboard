import React,{useState} from 'react';
import { Box, Grid, TextField } from "@mui/material";

export const DateFormat = () => {
    const [dateFrom, setDateFrom] = useState("");
    const [dateTo, setDateTo] = useState("");


    return (
        <div>
            <Box>
        <Grid
          container
          alignItems="flex-end"
          direction="column"
          sx={{ marginTop: 5, marginLeft: -32 }}
        >
          <Grid sx={{ margin: 0, display: "inline-flex", columnGap: 1 }}>
            <TextField
              inputProps={{ style: { fontSize: 20 } }}
              helperText="select start Date"
              color="success"
              sx={{ m: 1, width: "200px" }}
              type="date"
              id="dateFrom"
              value={dateFrom}
              onChange={(e) => setDateFrom(e.target.value)}
            />
            <TextField
              inputProps={{ style: { fontSize: 20 } }}
              sx={{ m: 1, width: "200px" }}
              color="success"
              helperText="select end Date"
              type="date"
              id="dateTo"
              value={dateTo}
              onChange={(e) => setDateTo(e.target.value)}
            />
          </Grid>
        </Grid>
      </Box>
        </div>
    );
};

// export default DateFormat;
import React from 'react';
import HomeCard from './homePage/HomeCard';
import {items} from './homePage/HomePageData';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper'

function Home() {

  return (
    <>
    <div style={{textAlign: "center", marginBottom:"50px",marginTop:"50px"}}>
      <h1>Net Promoter Score Evaluation</h1>
      <h2 style={{fontWeight: 600}}>Online tools for your product and service evaluation</h2>
      </div>
      <Paper sx={{padding: "3%"}}>
      <Box sx={{flexGrow: 1}}>
      <Grid container spacing={2} >
      {items.map((item) => (
        <Grid item xs={6} md={4}>
        <HomeCard
        key={item.id}
        name={item.name}
        description={item.description} />
        </Grid>
      ))}
      </Grid>
      </Box>
      </Paper>
    </>
  )
}

export default Home

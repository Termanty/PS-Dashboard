import React from 'react';
import HomeCard from './homePage/HomeCard';
import {items} from './homePage/HomePageData';
import Grid from '@mui/material/Grid';

function Home() {

  return (
    <>
    <div style={{textAlign: "center", marginBottom:"50px",marginTop:"50px"}}>
      <h1>Net Promoter Score Evaluation</h1>
      <h2 style={{fontWeight: 600}}>Online tools for your product and service evaluation</h2>
      </div>
      <Grid container spacing={{ xs: 2, md: 3}}>
      {items.map((item) => (
        <Grid display= "table-row" marginLeft="4%" item xs={2} sm={3} md={3} key={item.id}>
        <HomeCard
        key={item.id}
        name={item.name}
        description={item.description} />
        </Grid>
      ))}

      </Grid>
    </>
  )
}

export default Home

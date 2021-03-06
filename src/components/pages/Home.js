import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import HomeCard from "./homePage/HomeCard";
import { items } from "./homePage/HomePageData";

function Home() {
  return (
    <Box>
      <div
        style={{ textAlign: "center", marginBottom: "50px", marginTop: "50px" }}
      >
        <div style={{ fontSize: "3.5rem", fontWeight: "bold" }}>
          Net Promoter Score Evaluation
        </div>
        <h2 style={{ fontWeight: 600 }}>
          Online tools for your product and service evaluation
        </h2>
      </div>
      <Paper sx={{ padding: "3%", backgroundColor: "#EFF0F3" }}>
        <Paper sx={{ padding: "2%" }}>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              {items.map((item) => (
                <Grid item xs={6} md={4}  key={item.id}>
                  <HomeCard
                    key={item.id}
                    name={item.name}
                    description={item.description}
                    link={item.link}
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Paper>
      </Paper>
    </Box>
  );
}

export default Home;

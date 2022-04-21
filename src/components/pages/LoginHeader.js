import React from 'react';
import {AppBar} from '@mui/material';
import {Box }from '@mui/material';
import {Typography} from '@mui/material';
import { Container } from '@mui/material';


const LoginHeader = () => {
    return (
        <Box sx={{m:-3}} >
            <Box>
                <AppBar position="sticky"
                sx={{
                    height: "95px",
                    backgroundColor: "#162639",
                    marginTop:"-90px",
                }} 
                >
                     <Typography align = "center" 
                    variant="h4" 
                    component="div" 
                    sx={{color:"#ED6930", 
                    m:3 }}  >
                    HAPPY
                    </Typography>
                </AppBar>
            </Box>
            <Box sx={{ marginTop: "150px", textAlign:"center" }}>
                <Container maxWidth="m">
                <Typography  variant="h4" component="div">Welcome to the PHZ Net Promoter Score service </Typography>
                <Typography  sx={{ marginTop: "30px"}}variant="h5" component="div">Start using the service now! </Typography>
               
                </Container>
            </Box>
            <Box>
            </Box>
            
    </Box>
    );
};

export default LoginHeader;


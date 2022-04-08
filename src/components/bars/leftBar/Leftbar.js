import React from 'react';
import Drawer from '@mui/material/Drawer';
import {leftbarStyle} from "./Leftbarstyle";

function Leftbar() {
  const classes = leftbarStyle();
  return (
    <div>
     <nav className= {classes.root}>
       <Drawer
       variant="permanent"
       open
       anchor="left"
       className={ classes.drawerPaper}>
         I am the first left.
       </Drawer>
     </nav>
    </div>
  )
}

export default Leftbar

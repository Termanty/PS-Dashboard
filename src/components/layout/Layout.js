import React from 'react';
import Leftbar from '../bars/leftSidebar/Leftbar';
import { Layoutstyle } from "./Layoutstyle";

function Layout({children}) {
  const classes = Layoutstyle();
  return (
    <div className={classes.root}>
      <Leftbar />
      <main>
        {children}
      </main>
    </div>
  )
}

export default Layout;

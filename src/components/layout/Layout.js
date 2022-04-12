import React from "react";
import Leftbar from "../bars/leftSidebar/Leftbar";
import { layoutstyle } from "./Layout.style.js";

function Layout({ children }) {
  const classes = layoutstyle();
  return (
    <div className={classes.root}>
      <Leftbar />
      <main>{children}</main>
    </div>
  );
}

export default Layout;

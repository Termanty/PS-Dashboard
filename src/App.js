import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

//
import { useSelector, useDispatch } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { Paper} from "@mui/material";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import IconButton from '@mui/material/IconButton';
import { darkTheme, lightTheme } from "./components/LeftBar/Leftbar.style";
import { toggleTheme } from "./store/theme/themeSlice";




//
const Home = lazy(() => import("./components/pages/Home"));
const MySurveys = lazy(() => import("./components/pages/MySurveys"));
const Layout = lazy(() => import("./components/Layout"));
const CreateNewSurvey = lazy(() =>
  import("./components/pages/CreateNewSurvey")
);
const Data = lazy(() => import("./components/pages/Data"));


function App() {
  const theme = useSelector((state) => state.theme);

  const dispatch = useDispatch();
  const ToggleSwitch = () => {
    return (
      <div
        style={{
          position: "absolute",
          top: "100px",
          right: "10px",
        }}
      >

      {theme.darkTheme}
      <IconButton sx={{ ml: 1 }} onClick={() => dispatch(toggleTheme())} color="inherit">
        {theme.darkTheme === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
      </IconButton>
      </div>
    );
  };

  return (

    <ThemeProvider theme={theme.darkTheme ? darkTheme : lightTheme}>
      <Paper
        style={{
          minHeight: "100vh",
         width:'100%',
          borderRadius: "0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToggleSwitch />
  
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/MySurveys" element={<MySurveys />} />
              <Route path="/:name" element={<Data />} />
              <Route path="/CreateNewSurvey" element={<CreateNewSurvey />} />
              <Route path="/Data" element={<Data />} />
              <Route  path="login" element={<Login/>} />
              <Route  path="signup" element={<SignUp />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
 
    </Paper>
    </ThemeProvider>
  );
}

export default App;

import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/pages/Login";
import SignUp from "./components/pages/SignUp";

const Home = lazy(() => import("./components/pages/Home"));
const MySurveys = lazy(() => import("./components/pages/MySurveys"));
const Layout = lazy(() => import("./components/Layout"));
const CreateNewSurvey = lazy(() =>
  import("./components/pages/CreateNewSurvey")
);
const Data = lazy(() => import("./components/pages/Data"));


function App() {
  return (
    <div className="app">
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/MySurveys" element={<MySurveys />} />
              {/* <Route path="/:survey.name" element={<Data />} /> */}
              <Route path="/:name" element={<Data />} />
              {/* </Route> */}
              <Route path="/CreateNewSurvey" element={<CreateNewSurvey />} />
              <Route path="/Data" element={<Data />} />
              <Route  path="login" element={<Login/>} />
              <Route  path="signup" element={<SignUp />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

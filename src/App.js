import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = lazy(() => import("./components/pages/Home"));
const MySurveys = lazy(() => import("./components/pages/MySurveys"));
const Layout = lazy(() => import("./components/layout/Layout"));
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
              <Route path="/CreateNewSurvey" element={<CreateNewSurvey />} />
              <Route path="/Data" element={<Data />} />
            </Routes>
          </Layout>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;

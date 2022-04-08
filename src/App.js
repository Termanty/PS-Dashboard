import React from "react";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import {
  BrowserRouter as
  Router,
  Routes,
  Route,
} from "react-router-dom";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div className="app">
      <Router>
      <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
      </Layout>
      </Router>
    </div>
  );
}

export default App;

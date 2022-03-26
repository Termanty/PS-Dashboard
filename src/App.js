import React from "react";
import "./App.css";

import{BrowserRouter,Routes, Route, Navigate} from "react-router-dom";
import useAuthContext from "./hooks/useAuthContext";

//From components folder
import Navbar from './components/Navbar';

//From pages folder
import Home from "./pages/home/Home";
import Login from './pages/login/Login';
import SignUp from "./pages/signup/SignUp"
import Dashboard from "./pages/home/Dashboard";


function App() {
  const {authIsReady, user}=useAuthContext();
  return (
    <div className="App">
        {authIsReady && (
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route path='dashboard' element={(!user && <Navigate to="/login" />)||(user && <Dashboard/>)} />
            
            <Route path="login" element={(user && <Navigate to="dashboard"/>) || (!user && <Login/>)} />
            
            <Route path="signup" element={(user && <Navigate to="dashboard"/>) || (!user && <SignUp/>)} />
          </Routes>
        </BrowserRouter>
      )}
      
    </div>
  );
}

export default App;

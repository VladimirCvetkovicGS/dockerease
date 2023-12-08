import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import SignUp from "./components/signup";

import './style/App.css';


function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/Home" element={<Home />}/>
      <Route path="/SignUp" element={<SignUp />}/>
    </Routes>
  </Router>
  );
}

export default App;

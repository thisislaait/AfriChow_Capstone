import React from "react";
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import Home from "./pages/Home";
import './App.css'
import Profile from "./pages/User-profile";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/profile" exact Component={Profile} />

      </Routes>
    </Router>
  )
}

export default App

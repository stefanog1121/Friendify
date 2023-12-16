import "./index.css";
import React from "react";
import Main from "./Main";
import Compare from "./Compare";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/compare" element={<Compare />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

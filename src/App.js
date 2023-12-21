import React from "react";
import { ThemeProvider } from '@mui/material/styles';
import mainTheme from './themes'; 
import NavBar from "./NavBar";
import Home from "./Home";
import Compare from "./Compare";
import About from "./About";
import { Routes, Route } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <ThemeProvider theme={mainTheme}>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </ThemeProvider>
  );
}

export default App;


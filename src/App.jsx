import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "../components/Home";
import SoftwareApp from "../components/SoftwareApp";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/software" element={<SoftwareApp/>} />
    </Routes>
    </BrowserRouter>
    
    </>
  )
};

export default App;

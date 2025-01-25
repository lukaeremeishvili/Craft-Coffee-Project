import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../front-pages/Home"; 
import About from "../front-pages/About";
import Front from "../components/Front";
const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Front />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  };

export default Router;
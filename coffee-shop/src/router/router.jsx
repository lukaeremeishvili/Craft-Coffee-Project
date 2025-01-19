import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../front-pages/Home"; 
import About from "../front-pages/About";

const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    );
  };

export default Router;
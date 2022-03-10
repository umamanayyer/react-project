import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Admin from "./Admin";
import Navigation from "./Navigation";

function App() {
  return(
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );
};

export default App;


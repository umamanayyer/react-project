import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Product,
  Admin,
} from "./";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  );

}

export { default as Navigation } from "./Navigation";
export { default as Product } from "./Product";
export { default as Admin } from "./Admin";


export default App;
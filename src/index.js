import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Product,
  Admin,
} from "./";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);

export { default as Navigation } from "./Navigation";
export { default as Product } from "./Product";
export { default as Admin } from "./Admin";


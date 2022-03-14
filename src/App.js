import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./Product";
import Admin from "./Admin";
import Navigation from "./Navigation";

function App() {
  const [items, setItems] = useState([])

  const sendDatatoParent = (index) => {
    // console.log("its the callback function's data", index)
    setItems(index);
  }
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Product itemsFromApp={items} />} />
        <Route path="/admin" element={<Admin sendDatatoParent={sendDatatoParent} />} />
      </Routes>
    </Router>
  );
};

export default App;


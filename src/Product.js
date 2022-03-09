import React, { useState } from "react";
import "./App.css";

function Product() {

  let itemsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [cartItems, setCartItems] = useState([])

  function renderItems() {
    return (
      <div style={{ display: "flex", marginRight: "200px" }}>
        {itemsList.map((i) =>
          <div
            key={i}
            onClick={() => setCartItems([...cartItems, i])}
            style={{ width: "100px", height: "100px", backgroundColor: "gray", margin: "5px", display: "flex", justifyContent: "center", alignItems: "center" }}>
            item {i}
          </div>
        )}
      </div>
    )
  }

  function removeItem(item) {
    const newCartItemList = cartItems.filter(cartItem => cartItem !== item);
    setCartItems(newCartItemList);
  }

  function renderCart() {
    return (
      <div style={{ width: "30%", height: "500px" }}>
        <h2> Cart Items </h2>
        <ul>
          {cartItems.map((item) => {
            return <li>item {item}  <span style={{ cursor: "pointer", color: "red", fontWeight: "bold" }} onClick={() => removeItem(item)}>x</span></li>
          }
          )}
        </ul>
        <button onClick={() => setCartItems([])}>Clear Cart</button>
      </div>
    )
  }

  return (
    <div style={{ display: "flex", height: "100%", width: "100%" }}>
      {renderItems()}
      {renderCart()}
    </div>
  );
}

export default Product;

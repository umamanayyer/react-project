import React, { useState, useEffect } from "react";
import "./App.css";

function Product({ itemsFromApp }) {

  let itemsList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  const [stockItems, setStockItems] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    setStockItems(itemsFromApp)
  }, []);

  function addItemsToCart(i) {
    let newItem = { cartItemName: i.itemName, cartItemPrice: i.itemPrice };
    let newArray = cartItems.concat(newItem);
    setCartItems(newArray);
  }

  function sum(cart) {
    const total = cart.reduce(
      (prevValue, currentValue) => prevValue + currentValue.cartItemPrice,
      0
    );
    // let total2 = 0;
    // for (let i = 0; i < cart.length; i++) {
    //   total2 = (total2) + (cart[i].cartItemPrice);
    //   console.log("in loop checking price", total2)
    // }
    return <p>Total Price: {total}</p>;
  }

  function renderItems() {
    return (
      <div style={{ display: "flex", marginRight: "200px", backgroundColor: "antiquewhite", width: "1200px" }}>
        {stockItems.map((i) =>
          <div
            key={i}
            onClick={() => addItemsToCart(i)}
            style={{ width: "100px", height: "100px", backgroundColor: "gray", margin: "5px" }}>
            <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> {i.itemName} </h4>
            <h4 style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> {i.itemPrice} Rs. </h4>
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
      <div style={{ width: "500px", height: "500px", backgroundColor: "aquamarine" }}>
        <h2> Cart Items </h2>
        <ul>
          {cartItems.map((item) => {
            return <li> {item.cartItemName} ({item.cartItemPrice} Rs.)
              <span style={{ cursor: "pointer", color: "red", fontWeight: "bold" }} onClick={() => removeItem(item)}>x</span></li>
          }
          )}
        </ul>
        <hr />
        {sum(cartItems)}
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

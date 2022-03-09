import React, { useState } from "react";
import "./App.css";
import { Product } from "./";

function Admin() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [items, setItems] = useState([])
  const [displayUpdation, setDisplayUpdation] = useState(false);
  const [passCurrentData, setPassCurrentData] = useState([]);
  const [itemNameToUpdate, setItemNameToUpdate] = useState("")
  const [itemPriceToUpdate, setItemPriceToUpdate] = useState(0)

  function addItemHandler() {
    let newItem = { itemName: name, itemPrice: price };
    let newArray = items.concat(newItem);
    setItems(newArray);
  }

  function updateItemHandler(i) {
    items.map(item => {
      if (item === i) {
        console.log(item)
        item.itemName = itemNameToUpdate;
        item.itemPrice = itemPriceToUpdate;
        console.log("item.itemName", item.itemName);
        console.log("item.itemPrice", item.itemPrice)
      }
    }
    )
    setDisplayUpdation(false);
  }

  function removeItem(i) {
    const newItemList = items.filter(item => item !== i);
    setItems(newItemList);
  }

  function setUpdateForm(i) {
    setDisplayUpdation(true);
    // removeItem(i)
    setPassCurrentData(i);
    console.log("update item that is:", i)
    setItemNameToUpdate(i.itemName)
    setItemPriceToUpdate(i.itemPrice)
  }

  return (
    < div >
      <h2>Admin Page</h2>
      <label>Item Name: </label>
      <input
        type="text"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <label>Item Price:</label>
      <input
        type="number"
        value={price}
        onChange={e => setPrice(e.target.value)}
      />
      <button onClick={() => addItemHandler()}>Add Item</button>
      <div className="table">
        <h2>Availabe Stock</h2>
        <table>
          <thead>
            <tr>
              <th>Item Name</th>
              <th>Item Price</th>
              <th>Delete Item</th>
              <th>Modify Item</th>
            </tr>
          </thead>
          <tbody>
            {items.map(i => (
              <tr>
                <td>{i.itemName}</td>
                <td>{i.itemPrice}</td>
                <td style={{ color: "red", cursor: "pointer" }} onClick={() => removeItem(i)}>x</td>
                <td><button onClick={() => setUpdateForm(i)}>Update Item</button></td>
              </tr>
            )
            )}
          </tbody>
        </table>
      </div>
      {displayUpdation &&
        <div>
          <label>Item Name: </label>
          <input
            type="text"
            value={itemNameToUpdate}
            onChange={e => setItemNameToUpdate(e.target.value)}
          />
          <label>Item Price:</label>
          <input
            type="number"
            value={itemPriceToUpdate}
            onChange={e => setItemPriceToUpdate(e.target.value)}
          />
          <button onClick={() => updateItemHandler(passCurrentData)}>Update Item</button>
        </div>
      }
    </div >
  );


}
export default Admin;

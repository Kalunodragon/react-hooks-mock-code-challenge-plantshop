import React, { useState } from "react";

function PlantCard({ id, image, name, price }) {
  const [state, setState] = useState(true)

  function handleInStockClick(e){
    state === true ? setState(false) : setState(true)
  }

  return (
    <li className="card" id={id}>
      <img src={`http://localhost:6001/${image}`} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {state ? (
        <button value={true} onClick={handleInStockClick} className="primary">In Stock</button>
      ) : (
        <button value={false} onClick={handleInStockClick}>Out of Stock</button>
      )}
    </li>
  );
}

/*
id: 1
image: "./images/aloe.jpg"
name: "Aloe"
price: 15.99
*/

export default PlantCard;

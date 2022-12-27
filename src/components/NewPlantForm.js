import React, { useState } from "react";

function NewPlantForm() {
  const [formData, setFormData] = useState({
    "name": "",
    "image": "",
    "price": ""
  })

  // Work on getting the set Data for the form to reflect the current state of the input on the form data
  function handleOnChange(e){
    e.preventDefault()
    let keyName = e.target.name
    let inputValue = e.target.value
    setFormData({...formData, [keyName]: inputValue })
  }

  function handleSubmit(e){
    e.preventDefault()
    
    fetch(`http://localhost:6001/plants/`, {
      method: "POST",
      headers:{
        'Content-type':'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(r => r.json())
    .then(() => {
      setFormData({
        "name": "",
        "image": "",
        "price": ""
      })
    })

  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleOnChange}/>
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleOnChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleOnChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

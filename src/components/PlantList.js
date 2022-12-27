import React, { useEffect, useState } from "react";
import PlantCard from "./PlantCard";

function PlantList() {
  const [plants, setPlants] = useState([])

  useEffect(() => {
    initial()
  }, [])

  function initial() {
    fetch(`http://localhost:6001/plants/`)
    .then(r => r.json())
    .then(data => setPlants(data))
  }

  const plantsForList = plants.map(plant => {
    return (
      <PlantCard 
        key={plant.name}
        id={plant.id}
        image={plant.image}
        name={plant.name}
        price={plant.price}
      />
    )
  })

  return (
    <ul className="cards">
      {/* render PlantCards components in here */}
      {plantsForList}
    </ul>
  );
}

export default PlantList;

import React, { useState } from "react";
import Tours from "./components/Tours";
import data from "./data";
import './index.css'

const App = () => {
  
  const[tours,setTours]=useState(data)

  const removeTour=(id)=>{
    const newTour=tours.filter(tour=>tour.id !==id )
    setTours(newTour);
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;

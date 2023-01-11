import React, { useState, useEffect } from 'react';
import axios from "axios";
import CarCard from './CarCard/CarCard';
import "./CarsList.css";
import AddCarForm from './AddCarForm/AddCarForm';

const CarsList = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/cars").then(result => setCars(result.data))
  }, [])

  const handleSubmit = (event, newCar) => {
    event.preventDefault();
    setCars([newCar, ...cars])
  };
  return (
    <div className='cars-list'>
      <AddCarForm handleSubmit={handleSubmit}/>
      {
        cars ? cars.map(car => (
          <CarCard key={car.id} car={car} />
        )) : null
      }
    </div>
  )
}

export default CarsList;
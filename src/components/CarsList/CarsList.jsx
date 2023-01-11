import React, { useState, useEffect } from 'react';
import axios from "axios";
import CarCard from './CarCard/CarCard';
import "./CarsList.css";

const CarsList = () => {
  const [cars, setCars] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/cars").then(result => setCars(result.data))
  }, [])

  return (
    <div className='cars-list'>
      {
        cars ? cars.map(car => (
          <CarCard key={car.id} car={car} />
        )) : null
      }
    </div>
  )
}

export default CarsList
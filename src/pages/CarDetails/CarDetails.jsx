import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from "axios";
import "./CarDetails.css";

const CarDetails = () => {
  const [car, setCar] = useState([]);
  const {name, company_name, number_passengers, number_doors, gear_box, Km, Price, available, image} = car;
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const getCars = async () => {
    let cars = await axios
      .get(`http://localhost:5000/cars/${id}`)
      setCar(cars.data);
  };

  useEffect(() => {
    getCars();
    setLoading(true);
  }, [id])

  return (
    <div>
      {loading ? (
        <>
          <h1>{name}</h1>
          <img className='car-image' src={image} alt={name} />
          <p>{company_name}</p>
          <p>{number_passengers}</p>
          <p>{number_doors}</p>
          <p>{gear_box}</p>
          <p>{Km}</p>
          <p>{Price}</p>
          {available ? <p>{available}</p> : null }
        </>
      ) : <p>Loading...</p>}
    </div>
  )
}

export default CarDetails
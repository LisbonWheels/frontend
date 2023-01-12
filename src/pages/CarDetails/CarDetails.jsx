import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./CarDetails.css";

const CarDetails = () => {
  const [car, setCar] = useState([]);
  const {
    name,
    company_name,
    number_passengers,
    number_doors,
    gear_box,
    Km,
    Price,
    available,
    image,
  } = car;
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  const getCars = async () => {
    let cars = await axios.get(`http://localhost:5001/cars/${id}`);
    setCar(cars.data);
  };

  useEffect(() => {
    getCars();
    setLoading(true);
  }, [id]);

  return (
    <div>
      <div className="car-container">
        {loading ? (
          <>
            <div className="container-left">
              <h1>{name}</h1>
              <img className="car-image" src={image} alt={name} />
            </div>
            <div className="container-right">
              <p>
                <strong>Company Name:</strong> {company_name}
              </p>
              <p>
                <strong>Number of Passengers:</strong> {number_passengers}
              </p>
              <p>
                <strong>Number of Doors: </strong>
                {number_doors}
              </p>
              <p>
                <strong>Gear Box: </strong>
                {gear_box}
              </p>
              <p>
                <strong>Kilometers: </strong>
                {Km}
              </p>
              <p>
                <strong>Price: </strong>
                {Price}
              </p>
              {available ? (
                <p>
                  <strong>Availability:</strong> {available}
                </p>
              ) : null}
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default CarDetails;

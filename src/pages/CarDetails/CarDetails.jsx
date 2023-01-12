import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "./CarDetails.css";
import Navbar from "../../components/Navbar/Navbar";

const CarDetails = () => {
  const [car, setCar] = useState([]);
  const {
    name,
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
    let cars = await axios.get(`http://localhost:5000/cars/${id}`);
    setCar(cars.data);
  };

  useEffect(() => {
    getCars();
    setLoading(true);
  }, [id]);

  return (
    <div>
      <Navbar />
      <div className="car-container">
        {loading ? (
          <>
            <div className="container-left">
              <h1>{name}</h1>
              <img className="car-image" src={image} alt={name} />
            </div>
            <div className="container-right">
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
              <Link to="/" className="car-button">
                &larr; BACK
              </Link>
              <button className="rent-button">RENT NOW!</button>
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

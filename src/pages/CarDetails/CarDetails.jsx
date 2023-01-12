import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
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
  const [colors, setColors] = useState(['#3001D4','#CD1E1D','	#0d1116','#637380','#a0a199','#304c7e','#5870a1']);
  const [colorsDisplay, setColorsDisplay] = useState([]);


  const getCars = async () => {
    let cars = await axios.get(`http://localhost:5000/cars/${id}`);
    setCar(cars.data);
  };

  const randColor = (colorNumber) =>  {
    let array = []
    for (let i = 1; i <= colorNumber; i++){
      array.push(colors[Math.floor(Math.random() * (7 - 1 + 1)) + 1])
    }
    setColorsDisplay(array)
  }

  useEffect(() => {
    getCars();
    const colorNumber = Math.floor(Math.random() * (5 - 2 + 1)) + 2;
    randColor(colorNumber)
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
                <strong>Colors Available: </strong>
                <div className="color-display">
                {colorsDisplay.map((color)=> <div style={{height:"20px", width:"20px",backgroundColor:color}}></div>)}
                </div>
              </p>
              <p>
                <strong>Kilometers: </strong>
                {Km}
              </p>
              <p>
                <strong>Price: </strong>
                {Price} €/day
              </p>
              {/* {available ? (
                <p>
                  <strong>Availability:</strong> {available}
                </p>
              ) : null} */}
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

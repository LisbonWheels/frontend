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
      <Navbar />
      <Link to="/">
        <button className="car-button">
          &larr; BACK
        </button>
      </Link>
      <div className="car-container">
        {loading ? (
          <>
            <div className="container-left">
              <h1>{name}</h1>
              <img className="car-image" src={image} alt={name} />
            </div>
            <div className="container-right">
              <p>
                <strong>Number of passengers: </strong> {number_passengers}
              </p>
              <p>
                <strong>Number of doors: </strong>
                {number_doors}
              </p>
              <p>
                <strong>Gear box: </strong>
                {gear_box}
              </p>
              <p>
                <strong>Colors available: </strong>
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

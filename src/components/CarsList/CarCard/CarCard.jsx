import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import "./CarCard.css";
import UserContext from '../../../context/UserContext';
import CarContext from '../../../context/CarContext';
import axios from "axios";
import { useEffect } from 'react';

const CarCard = ( props ) => {
  const {id, name, number_passengers, Price, available, image} = props.car;
  const setIsAvailable = props.setIsAvailable;
  const { userDetails } = useContext(UserContext);
  // const { cars, setCars, getCars } = useContext(CarContext);


  const updateAvailability = () => {
    axios.put(`http://localhost:5000/cars/${id}`, available === "True" ? {"id": id, "available": "False"} : {"id": id, "available": "True"});
    setIsAvailable((prevState) => !prevState);
  }

  const deleteCar = (id) => {
    axios.delete(`http://localhost:5000/cars/${id}`).then(results => {
      console.log("id",id)
      // console.log(cars.filter(car => car.id !== id))
      // setCars((prevState) => console.log(prevState))
    })
  }

  // useEffect(() => {
  //   getCars()
  // }, [])

  return (
    <>
        <div className='car-card' style={userDetails?.role === "admin" ? {"minHeight":"225px"} : {"minHeight":"250px"} }>
          <img src={image} alt={name} className="car-photo"/>
          <div className='car-info-container'>
            <h2 className='car-name'>{name}</h2>
            <p className='passenger-nb'>For {number_passengers} persons</p>
            <div className='price-container'>
              <p className='price'>{Price} €/day</p>
              <p className={available === "True" ? "available-car" : "car-not-available"}>
                {available === "True" ? "Available" : "Not available"}
              </p>
            </div>
          </div>
          {userDetails === null || userDetails?.role === "user" ? (
            <Link className="link-car-details" to={`/car-details/${id}`}  style={available === "False" ? {pointerEvents: 'none'} : null}>
              <button style={available === "False" ? {"backgroundColor":"rgb(236,79,82, 0.8)"} : {"backgroundColor":"rgb(72,147,163, 0.8)"}}
                      className="change-availability">
                        {available === "True" ? "Rent here" : "Unavailable to rent"}
              </button>
            </Link > )
          : null}
          {userDetails?.role === "admin" ? 
            <button className="change-availability" onClick={updateAvailability}>
              {available === "True" ? "Change to unavailable" : "Change to available" }
            </button>
          : null}
          {userDetails?.role === "ford" ? (
            <button style={{"backgroundColor":"rgb(236,79,82, 0.8)"}}
                    className="change-availability"
                    onClick={()=>deleteCar(id)}>
                      Delete
            </button>
          ) : null}
        </div>

    </>
  )
}

export default CarCard
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import "./CarCard.css";
import UserContext from '../../../context/UserContext';
import axios from "axios";

const CarCard = ( props ) => {
  const {id, name, number_passengers, Price, available, image} = props.car;
  const { userDetails } = useContext(UserContext);

  const updateAvailability = () => {
    axios.put(`http://localhost:5000/cars/${id}`, available === "True" ? {"id": id, "available": "False"} : {"id": id, "available": "True"})
  }

  return (
    <>

        <div className='car-card' style={userDetails?.role === "admin" ? {"minHeight":"225px"} : {"minHeight":"190px"} }>
          <img src={image} alt={name} className="car-photo"/>
          <div className='car-info-container'>
            <h2 className='car-name'>{name}</h2>
            <p className='passenger-nb'>For {number_passengers} adults</p>
            <div className='price-container'>
              <p className='price'>{Price} €/day</p>
              <p className={available === "True" ? "available-car" : "car-not-available"}>{available === "True" ? "Available" : "Not available"}</p>
            </div>
          </div>
          <Link style={available === "False" ? {pointerEvents: 'none'} : null} className="link-car-details" to={`/car-details/${id}`}>
            <button style={available === "False" ? {"backgroundColor":"rgb(236,79,82, 0.8)"} : {"backgroundColor":"rgb(72,147,163, 0.8)"}} className={userDetails?.role === "admin" ? "gone-button" : "change-availability"}>
              {available === "True" ? "Rent here" : "Unavailable to rent"}
            </button>
          </Link >
          {userDetails?.role === "admin" ? <button className="change-availability" onClick={updateAvailability}>{available === "True" ? "Change to unavailable" : "Change to available" }</button> : null}
        </div>

    </>
  )
}

export default CarCard
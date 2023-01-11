import React from 'react';
import { Link } from 'react-router-dom';
import "./CarCard.css";

const CarCard = ( props ) => {
  const {id, name, number_passengers, Price, available, image} = props.car;

  return (
    <Link className="link-car-details" to={`/car-details/${id}`}>
      <div className='car-card'>
        <img src={image} alt={name} className="car-photo"/>
        <div className='car-info-container'>
          <h2 className='car-name'>{name}</h2>
          <p className='passenger-nb'>For {number_passengers} adults</p>
          <div className='price-container'>
            <p className='price'>{Price} €/day</p>
            <p className={available === "True" ? "available-car" : "car-not-available"}>{available === "True" ? "Available" : "Not available"}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default CarCard
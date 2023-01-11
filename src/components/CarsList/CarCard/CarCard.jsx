import React from 'react';
import "./CarCard.css";

const CarCard = ( props ) => {
  const {name, number_passengers, number_doors, gear_box, km, price, available, image} = props.car;
  console.log(name)

  return (
    <div>
      <img src={image} alt={name} className="car-photo"/>
      <h2>{name}</h2>
      <p>{number_passengers}</p>
      <p>{number_doors}</p>
      <p>{gear_box}</p>
      <p>{km}Km</p>
      <p>{price}€</p>
      <p>{available}</p>
    </div>
  )
}

export default CarCard
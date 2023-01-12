import React, { useContext } from "react";
import CarCard from "./CarCard/CarCard";
import "./CarsList.css";
import CarContext from "../../context/CarContext";

const CarsList = () => {
  const { cars } = useContext(CarContext);
  console.log(cars);

  return (
    <div className="cars-list">
      {cars ? cars.map((car) => <CarCard key={car.id} car={car} />) : null}
    </div>
  );
};

export default CarsList;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CarsList.css";
import CarCard from "./CarCard/CarCard";
import Modal from "./Modal/Modal";

const CarsList = () => {
  const [cars, setCars] = useState(null);
  const [newCar, setNewCar] = useState({});
  const [show, setShow] = useState(false);

  const showModal = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((result) => setCars(result.data));
  }, [newCar]);
  const handleSubmit = (event, newCar) => {
    event.preventDefault();
    setNewCar(newCar);
  };

  useEffect(() => {
    console.log("new car", newCar);
    axios.post("http://localhost:5000/cars", newCar).then((results) => {
      console.log(results);
    });
  }, [newCar]);

  return (
    <div>
      <img
      className="img-add-car"
        src="https://hotemoji.com/images/dl/d/heavy-plus-sign-emoji-by-twitter.png"
        alt="add-car"
        onClick={(e) => showModal(e)}
      />
      <Modal showModal={showModal} show={show} handleSubmit={handleSubmit} />
      <div className="cars-list">
      {cars ? cars.map((car) => <CarCard key={car.id} car={car} />) : null}
    </div>
    </div>
  );
};

export default CarsList;

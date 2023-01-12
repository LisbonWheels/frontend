import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./CarsList.css";
import CarCard from "./CarCard/CarCard";
import Modal from "./Modal/Modal";
import UserContext from "../../context/UserContext";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({});
  const [show, setShow] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
  const {userDetails} = useContext(UserContext);

  const showModal = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((result) => setCars(result.data));
  }, [isAvailable, newCar]);
  
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
      {userDetails?.role === "ford" ? (
        <>
          <div className="add-car-icon-container">
            <img
              className="img-add-car"
              src="https://hotemoji.com/images/dl/d/heavy-plus-sign-emoji-by-twitter.png"
              alt="add-car"
              onClick={(e) => showModal(e)}
            />
            <h1 className="add-car-title">Add a car</h1>
          </div>
          <Modal showModal={showModal} show={show} handleSubmit={handleSubmit} />
        </>
      ): null}
      <div className="cars-list">
        {cars ? cars.map((car) => <CarCard key={car.id} car={car} setIsAvailable={setIsAvailable} />) : null}
      </div>
    </div>
  );
};

export default CarsList;

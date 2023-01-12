import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./CarsList.css";
import CarCard from "./CarCard/CarCard";
import Modal from "./Modal/Modal";
import CarContext from "../../context/CarContext";

const CarsList = () => {
  const [cars, setCars] = useState([]);
  const [newCar, setNewCar] = useState({});
  const [show, setShow] = useState(false);
  const { search, price } = useContext(CarContext);
  const { available } = cars;

  const showModal = (e) => {
    e.preventDefault();
    setShow(!show);
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((result) => setCars(result.data));
  }, [available, newCar]);

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
        {cars
          ? cars
              .filter((car) =>
                search !== ""
                  ? car.name.toLowerCase().startsWith(search.toLowerCase())
                  : car
              )
              .filter((car) => (price !== "" ? car.Price < price : car))
              .map((car) => <CarCard key={car.id} car={car} />)
          : null}
      </div>
    </div>
  );
};

export default CarsList;

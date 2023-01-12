/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-bitwise */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

const CarContext = createContext();

export default CarContext;

export function CarContextProvider({ children }) {
  const [cars, setCars] = useState([]);

  const getCars = () => {
    axios
    .get("http://localhost:5000/cars")
    .then((result) => setCars(result.data));
  }

  useEffect(() => {
    getCars()
  }, []);

  return (
    <CarContext.Provider
      value={{
        cars,
        setCars,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

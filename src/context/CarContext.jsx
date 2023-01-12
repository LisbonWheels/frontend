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
  const [search, setSearch] = useState("");
  const [price, setPrice] = useState("");
  const [startDate, setStartDate] = useState(new Date("2023/01/12"));
  const [endDate, setEndDate] = useState(new Date("2023/01/13"));

  const getCars = () => {
    axios
      .get("http://localhost:5000/cars")
      .then((result) => setCars(result.data));
  };

  useEffect(() => {
    getCars();
  }, []);

  return (
    <CarContext.Provider
      value={{
        cars,
        setCars,
        setSearch,
        search,
        price,
        setPrice,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

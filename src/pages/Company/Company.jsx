import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AddCarForm from "../../components/CarsList/AddCarForm/AddCarForm";
import CarsList from "../../components/CarsList/CarsList";

const Company = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <CarsList />
      <AddCarForm />
    </div>
  );
};

export default Company;

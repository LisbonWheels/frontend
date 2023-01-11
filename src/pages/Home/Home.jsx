import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CarsList from "../../components/CarsList/CarsList";
import AddCarForm from '../../components/CarsList/AddCarForm/AddCarForm';

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <CarsList />
      <AddCarForm />
    </div>
  )
}

export default Home
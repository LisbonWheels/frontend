import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import CarsList from "../../components/CarsList/CarsList";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1>Home</h1>
      <CarsList />
    </div>
  )
}

export default Home
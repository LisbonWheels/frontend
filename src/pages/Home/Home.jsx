import React from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CarsList from "../../components/CarsList/CarsList";


const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <CarsList />
    </div>
  );
};

export default Home;

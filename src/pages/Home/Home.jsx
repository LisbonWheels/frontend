import React, {useContext} from "react";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";
import CarsList from "../../components/CarsList/CarsList";
import Admin from "../../components/Admin/Admin";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {userDetails} = useContext(UserContext);
  const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <Header />
      {userDetails?.role && userDetails?.role === "admin" ? <Admin/> : !userDetails ? navigate("/login") : <CarsList />}
    </div>
  );
};

export default Home;

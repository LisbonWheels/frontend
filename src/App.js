import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import CarDetails from "./pages/CarDetails/CarDetails";
import Company from "./pages/Company/Company";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/car-details" element={<CarDetails />} />
      </Routes>
    </>
  );
}

export default App;

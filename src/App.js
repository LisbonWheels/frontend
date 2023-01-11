import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import CarDetails from "./pages/CarDetails/CarDetails";
import {CarContextProvider} from "./context/CarContext"

function App() {
  return (
    <>
      <CarContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/car-details/:id" element={<CarDetails />} />
        </Routes>
      </CarContextProvider>
    </>
  );
}

export default App;

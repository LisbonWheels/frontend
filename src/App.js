import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import CarDetails from "./pages/CarDetails/CarDetails";
import { UserContextProvider } from "./context/UserContext";
import {CarContextProvider} from "./context/CarContext"
import CarsList from './components/CarsList/CarsList';

function App() {
  return (
    <>
      <UserContextProvider>
        <CarContextProvider>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cars-list" element={<CarsList />} />
            <Route path="/car-details/:id" element={<CarDetails />} />
          </Routes>
      </CarContextProvider>
      </UserContextProvider>
    </>
  );
}

export default App;

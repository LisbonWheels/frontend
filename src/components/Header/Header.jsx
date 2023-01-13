import React from "react";
import "./Header.css";
import Filters from "../Filters/Filters";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header-text">
        <h2 className="Header-text-h2">Lisbon Rental Cars</h2>
        <p>Choose your new way of transportation now!</p>
        <Filters />
      </div>
    </div>
  );
};

export default Header;

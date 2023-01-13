/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import CarContext from "../../context/CarContext";
import DatePicker from "react-datepicker";
import "./Filters.css";
import "react-datepicker/dist/react-datepicker.css";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Filters = () => {
  const {userDetails} = useContext(UserContext);
  const { search, setSearch } = useContext(CarContext);
  const { price, setPrice } = useContext(CarContext);
  const { startDate, setStartDate } = useContext(CarContext);
  const { endDate, setEndDate } = useContext(CarContext);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const navigate = useNavigate()
  return (
    <>
    {userDetails?.role && userDetails?.role !== "admin" ? 

    <div className="filter-container">
      <div className="filter-sub-container">
        <h2 className="filter-title">Car name</h2>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by car name"
          required
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="filter-input"
        />
      </div>
      <div className="filter-sub-container">
        <h2 className="filter-title">Price</h2>
        <input
          type="text"
          name="Price"
          id="Price"
          placeholder="Search by maximum price"
          required
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="filter-input"
        />
      </div>
      <div className="filter-sub-container">
        <h2 className="filter-title">Date of availability</h2>
        <div className="calendar-container">
          <DatePicker
            dateFormat="dd/MM/yyyy"
            closeOnScroll={true}
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            minDate={new Date()}
            showDisabledMonthNavigation
            placeholderText="dd/MM/yyyy"
          />
        </div>
      </div>
    </div>:  !userDetails ? navigate("/login") : null}
    </>
  );
};

export default Filters;

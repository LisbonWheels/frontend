/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import CarContext from "../../context/CarContext";
import DatePicker from "react-datepicker";
import "./Filters.css";
import "react-datepicker/dist/react-datepicker.css";

const Filters = () => {
  const { search, setSearch } = useContext(CarContext);
  const { price, setPrice } = useContext(CarContext);
  const { startDate, setStartDate } = useContext(CarContext);
  const { endDate, setEndDate } = useContext(CarContext);
  return (
    <div className="filter-container">
      <div>
        <h2 className="filter-title">Name</h2>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by Name"
          required
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          className="filter-by-title"
        />
      </div>
      <div>
        <h2 className="filter-title">Price</h2>
        <input
          type="text"
          name="Price"
          id="Price"
          placeholder="Search by price"
          required
          value={price}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          className="filter-by-title"
        />
      </div>
      <div>
        <h2 className="filter-title">Date</h2>
        <div className="calendars-container">
          <h3>Start date: </h3>
          <DatePicker
            closeOnScroll={true}
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            selectsStart
            startDate={startDate}
            endDate={endDate}
          />
          <h3>End date: </h3>
          <DatePicker
            closeOnScroll={true}
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
          />
        </div>
      </div>
      <div>
        <button className="clear-filters-button" type="button">
          Clear
        </button>
      </div>
      <button type="button" className="closing-button"></button>
    </div>
  );
};

export default Filters;

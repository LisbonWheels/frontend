/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import CarContext from "../../context/CarContext";
import DatePicker from "react-datepicker";
import "./Filters.css";
import "react-datepicker/dist/react-datepicker.css";

const Filters = () => {
  const { search, setSearch } = useContext(CarContext);
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
        <select className="toggle-status">
          <option value="">---</option>
        </select>
      </div>
      <div>
        <h2 className="filter-title">Date</h2>
        <div className="calendars-container">
          <DatePicker
            placeholderText="Start"
            dateFormat="yyyy-MM-dd"
            closeOnScroll={(e) => e.target === document}
            showYearDropdown
            scrollableMonthYearDropdown
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

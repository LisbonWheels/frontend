/* eslint-disable react/prop-types */
import React from "react";
import DatePicker from "react-datepicker";
import "./Filters.css";
import "react-datepicker/dist/react-datepicker.css";

const Filters = () => {
  return (
    <div className="filter-container">
      <div>
        <h2 className="filter-title">Document title</h2>
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search by document title"
          required
          className="filter-by-title"
        />
      </div>
      <div>
        <h2 className="filter-title">Status</h2>
        <select
          className="toggle-status"
        >
          <option value="">---</option>
        </select>
      </div>
      <div>
        <h2 className="filter-title">Date</h2>
        <div className="calendars-container">
        </div>
      </div>
      <div>
        <button
          className="clear-filters-button"
          type="button"
        >
          Clear
        </button>
      </div>
      <button
        type="button"
        className="closing-button"
      ></button>
    </div>
  )
}

export default Filters;
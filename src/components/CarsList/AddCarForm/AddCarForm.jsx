import React, { useState } from "react";

const AddCarForm = ({ handleSubmit }) => {
  const [addCar, setAddCar] = useState({
    company_name: "ME",
    name: "",
    number_passengers: "",
    number_doors: "",
    gear_box: "",
    km: "",
    price: "",
    available: "",
    image: "",
  });

  const handleChange = (e) => {
    const newValue = e.target.value;
    const newName = e.target.name;
    setAddCar({ ...addCar, [newName]: newValue });
  };

  return (
      <div>
        <form onSubmit={(e) => handleSubmit(e, addCar)}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              name="name"
              id="name"
              type="text"
              placeholder="Name of the car"
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="form-group">
            <label htmlFor="number_passengers">Number of passengers</label>
            <input
              name="number_passengers"
              id="number_passengers"
              type="text"
              placeholder="Number of passengers"
              onChange={handleChange}
            />
            <br />
          </div>

          <div className="form-group">
            <label htmlFor="number_doors">Number of doors</label>
            <input
              name="number_doors"
              id="number_doors"
              type="text"
              placeholder="Number of doors"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="gear_box">Gear box</label>
            <input
              name="gear_box"
              id="gear_box"
              type="text"
              placeholder="Manual or Automatic"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="km">Km of the car</label>
            <input
              name="km"
              id="kms"
              type="text"
              placeholder="Km"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="price">Price</label>
            <input
              name="price"
              id="prices"
              type="text"
              placeholder="€\days"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="available">Available</label>
            <input
              name="available"
              id="available"
              type="text"
              placeholder="True or False"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              name="image"
              id="image"
              type="text"
              placeholder="URL"
              onChange={handleChange}
            />
            <br />
          </div>
          <div className="text-center">
            <button className="btn btn-primary mt-3" type="submit">
              Submit Car
            </button>
          </div>
        </form>
        <br />
      </div>
  );
};

export default AddCarForm;

import React, { useState } from "react";

const AddCarForm = ({ handleSubmit }) => {
  const [addCar, setAddCar] = useState({
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
      <form onSubmit={(e) => handleSubmit(e, addCharacter)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="name"
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="number_passengers">Number of Passengers</label>
          <input
            name="number_passengers"
            id="number_passengers"
            type="text"
            placeholder="Number of Passengers"
            onChange={handleChange}
          />
          <br />
        </div>

        <div className="form-group">
          <label htmlFor="number_doors">Number of Doors</label>
          <input
            name="number_doors"
            id="number_doors"
            type="text"
            placeholder="number_doors"
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="gear_box">Gear Box</label>
          <input
            name="gear_box"
            id="gear_box"
            type="text"
            placeholder="gear_box"
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
            placeholder="km"
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="price">Price €\day</label>
          <input
            name="price"
            id="prices"
            type="text"
            placeholder="Price €\days"
            onChange={handleChange}
          />
          <br />
        </div>
        <div className="form-group">
          <label htmlFor="available">Price €\day</label>
          <input
            name="available"
            id="available"
            type="text"
            placeholder="available"
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
            placeholder="image"
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

export default AddForm;

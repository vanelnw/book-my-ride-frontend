import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../../redux/car/carActions';
import '../../assets/stylesheets/Car.css';

const AddCar = () => {
  const dispatch = useDispatch();
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [dailyRate, setDailyRate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const car = {
      make,
      model,
      year,
      daily_rate: parseInt(dailyRate, 10),
      image,
      description,
    };
    dispatch(addCar(car));
  };

  return (
    <div className="addForm">

      <div className="innercontainer">
        <div className="add-heading"><h2>Add a new car</h2></div>
        <form onSubmit={handleSubmit} className="add-form">
          <label htmlFor="make" className="add-form-field">
            Make:
            <input
              className="addInput"
              type="text"
              id="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
          </label>

          <label htmlFor="model" className="add-form-field">
            Model:
            <input
              className="addInput"
              type="text"
              id="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
          </label>

          <label htmlFor="year" className="add-form-field">
            Year:
            <input
              className="addInput"
              type="text"
              id="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
          </label>

          <label htmlFor="image" className="add-form-field">
            Image:
            <input
              type="file"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </label>

          <label htmlFor="description" className="add-form-field">
            Description:
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <label htmlFor="daily-rate" className="add-form-field">
            Daily Rate:
            <input
              type="number"
              id="daily-rate"
              value={dailyRate}
              onChange={(e) => setDailyRate(e.target.value)}
            />
          </label>

          <button type="submit" className="btn-add-car">Add Car</button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;

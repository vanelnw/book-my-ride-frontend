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
        <div className="add-heading">
          <h2>Add a new car</h2>
        </div>
        <form onSubmit={handleSubmit} className="add-form">
          <input
            className="addInput"
            type="text"
            id="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="Make"
          />

          <input
            className="addInput"
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            placeholder="Model"
          />

          <input
            className="addInput"
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            placeholder="Year"
          />

          <input
            className="addInput"
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            placeholder="Image-url"
          />

          <textarea
            className="addInput"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descriptions"
          />

          <input
            className="addInput"
            type="number"
            id="daily-rate"
            value={dailyRate}
            onChange={(e) => setDailyRate(e.target.value)}
            placeholder="Daily Rate"
          />

          <button type="submit" className="btn-add-car">
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCar;

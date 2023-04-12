import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../../features/car/carActions';
import './Car.css';

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
    console.log(car);
    dispatch(addCar(car));
  };

  return (
    <div className="innercontainer">
      <form onSubmit={handleSubmit}>
        <label htmlFor="make">
          Make:
          <input
            type="text"
            id="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
          />
        </label>

        <label htmlFor="model">
          Model:
          <input
            type="text"
            id="model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
        </label>

        <label htmlFor="year">
          Year:
          <input
            type="text"
            id="year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </label>

        <label htmlFor="image">
          Image:
          <input
            type="file"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>

        <label htmlFor="description">
          Description:
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label htmlFor="daily-rate">
          Daily Rate:
          <input
            type="number"
            id="daily-rate"
            value={dailyRate}
            onChange={(e) => setDailyRate(e.target.value)}
          />
        </label>

        <button type="submit">Add Car</button>
      </form>
    </div>
  );
};

export default AddCar;

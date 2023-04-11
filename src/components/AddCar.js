import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addCar } from '../features/car/carActions';

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
    const formData = new FormData();
    formData.append('car[make]', make);
    formData.append('car[model]', model);
    formData.append('car[year]', year);
    formData.append('car[dailyRate]', dailyRate);
    formData.append('car[image]', image);
    formData.append('car[description]', description);
    const car = {
      make,
      model,
      year,
      dailyRate,
      image,
      description,
    };
    // console.log(car);
    dispatch(addCar(car));
  };

  return (
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
  );
};

export default AddCar;

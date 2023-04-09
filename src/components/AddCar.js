import React, { useState } from 'react';

const AddCar = () => {
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [price, setPrice] = useState('');

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onSubmit(
  //     {
  //       make,
  //       model,
  //       year,
  //       price,
  //     },
  //   );
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('car[make]', make);
    formData.append('car[model]', model);
    formData.append('car[car_year]', year);
    formData.append('car[price', price);

    // dispatch(addCar(formData));
    // Navigate('/cars');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="make">
        Make:
        <input type="text" value={make} onChange={(event) => setMake(event.target.value)} />
      </label>
      <label htmlFor="model">
        Model:
        <input type="text" value={model} onChange={(event) => setModel(event.target.value)} />
      </label>
      <label htmlFor="year">
        Year:
        <input type="number" value={year} onChange={(event) => setYear(event.target.value)} />
      </label>
      <label htmlFor="price">
        Price:
        <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
      </label>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default AddCar;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/stylesheets/Deletescreen.css';
import { deleteCar, fetchItems } from '../../redux/car/carActions';
import { removeCar } from '../../redux/car/carSlice';

function DeleteScreen() {
  const { cars } = useSelector((state) => state.cars);
  const dispatch = useDispatch();

  const handleDeleteItem = (id) => {
    dispatch(deleteCar({ id })).then(() => {
      dispatch(removeCar(id));
    });
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <div className="deleteContainer">
      <h2>Deleted Items:</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id} className="delete-item">
            <div className="car-Container">
              <img src={car.image} alt="car" />
            </div>
            <p>{car.make}</p>
            <p>{car.model}</p>
            <p>{car.daily_rate}</p>
            {' '}
            <button type="button" onClick={() => handleDeleteItem(car.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeleteScreen;

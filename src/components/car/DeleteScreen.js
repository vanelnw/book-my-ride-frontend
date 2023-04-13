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
            <div className="description">

              <strong>
                {car.make}
                {' '}
                {car.model}
              </strong>
              <p>
                {' '}
                {car.description.length > 200
                  ? `${car.description.substring(0, 40)}...`
                  : car.description}
              </p>

            </div>

            <span>{car.daily_rate}</span>
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

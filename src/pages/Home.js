import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../features/auth/authSlice';
import { fetchCars } from '../features/car/carActions';

function Home() {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.cars);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  useEffect(() => {
    const token = localStorage.getItem('userToken');
    if (token) {
      dispatch(fetchCars(token));
    }
  }, [dispatch]);

  return (
    <div>
      Home
      <button type="button" className="button" onClick={handleLogout}>
        Logout
      </button>

      {cars.map((car) => (
        <Link href={`/car/${car.id}`} to={`/car/${car.id}`} key={car.id} className="delete-item">
          <div className="carContainer">
            <img src={car.image} alt="car" />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Home;

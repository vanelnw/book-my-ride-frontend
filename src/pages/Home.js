import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';
import { fetchCars } from '../features/cars/carActions';

function Home() {
  const dispatch = useDispatch();
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
    </div>
  );
}

export default Home;

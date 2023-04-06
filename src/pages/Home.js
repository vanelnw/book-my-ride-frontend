import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../features/auth/authSlice';

function Home() {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
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

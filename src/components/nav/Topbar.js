import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './nav.css';
import logo from '../../assets/logo.png';
import { logout } from '../../features/auth/authSlice';

const TopNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const data = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };

  return (
    <div className="topnav">
      <div className="logo-cont">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <div className="auth">
        {
        isAuthenticated ? (
          <div className="userInfo">
            <span>
              Hi
              {' '}
              {data.username}
            </span>

            <span>
              {' '}
              {data.email}
            </span>
            <button type="button" className="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <>
            <button type="button" className="button">
              <NavLink to="/login" className="login">Login</NavLink>
            </button>
            <button type="button" className="button">
              <NavLink to="/register" className="signup">Register</NavLink>
            </button>

          </>
        )
      }
      </div>
    </div>
  );
};

export default TopNav;

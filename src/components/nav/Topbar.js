import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import '../../assets/stylesheets/nav.css';
import logo from '../../assets/images/logo.png';
import { logout } from '../../redux/auth/authSlice';

const TopNav = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);
  // const isLoggedIn = localStorage.getItem('isLoggedIn');
  const data = JSON.parse(localStorage.getItem('user'));
  const dispatch = useDispatch();

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    navigate('/login');
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
              <Link to="/login" className="login">Login</Link>
            </button>
            <button type="button" className="button">
              <Link to="/register" className="signup">Register</Link>
            </button>

          </>
        )
      }

      </div>
    </div>
  );
};

export default TopNav;

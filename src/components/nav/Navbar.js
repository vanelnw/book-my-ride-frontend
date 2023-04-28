/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaVimeoV,
} from 'react-icons/fa';
import { TiSocialGooglePlus, TiThMenu, TiTimes } from 'react-icons/ti';
import '../../assets/stylesheets/nav.css';

const adminLinks = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/addReservation', text: 'RESERVE' },
  { id: 3, path: '/reservationList', text: 'RESERVATIONS' },
  { id: 4, path: '/addCar', text: 'ADD CAR' },
  { id: 5, path: '/delete', text: 'DELETE' },
];

const links = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/addReservation', text: 'RESERVE' },
  { id: 3, path: '/reservationList', text: 'MY RESERVATION' },
];

const SocialMedia = () => (
  <div className="position-absolute bottom-0 start-0 sosial-icons">
    <div className="socialmedia">
      <FaTwitter className="icons" />
      <FaFacebookF className="icons" />
      <TiSocialGooglePlus className="icons" />
      <FaVimeoV className="icons" />
      <FaPinterestP className="icons" />
    </div>
    <p className="footer">&copy; 2023 BookMyRide</p>
  </div>
);

const SideNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const data = JSON.parse(localStorage.getItem('user'));
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-light">
      <div className={`sidebar ${isMenuOpen ? 'open' : ''}`}>
        <button
          className="btn btn-light d-md-none hum"
          type="button"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <TiTimes className="icons" />
          ) : (
            <TiThMenu className="icons" />
          )}
        </button>
        <ul className={`navlinks ${isMenuOpen ? 'open' : ''}`}>
          {data.role === 'admin' && isAuthenticated
            ? adminLinks.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="btn btn-light"
                  onClick={handleLinkClick}
                  style={({ isActive }) => (isActive
                    ? {
                      color: '#fff',
                      backgroundColor: '#97bf0e',
                      width: '100%',
                      padding: '10px',
                    }
                    : { color: '#3a3a3a', width: '100%' })}
                >
                  {link.text}
                </NavLink>
              </li>
            ))
            : links.map((link) => (
              <li key={link.id}>
                <NavLink
                  to={link.path}
                  className="btn btn-light"
                  onClick={handleLinkClick}
                  style={({ isActive }) => (isActive
                    ? {
                      color: '#fff',
                      backgroundColor: '#97bf0e',
                      width: '100%',
                      padding: '10px',
                    }
                    : { color: '#3a3a3a', width: '100%' })}
                >
                  {link.text}
                </NavLink>
              </li>
            ))}
        </ul>
        <SocialMedia />
      </div>
    </div>
  );
};

export default SideNav;

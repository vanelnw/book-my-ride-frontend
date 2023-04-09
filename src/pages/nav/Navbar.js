import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  FaTwitter, FaFacebookF, FaPinterestP, FaVimeoV,
} from 'react-icons/fa';
import { TiSocialGooglePlus } from 'react-icons/ti';
import './nav.css';

const adminLinks = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/reserve', text: 'RESERVE' },
  { id: 3, path: '/reservation', text: 'RESERVATIONS' },
  { id: 4, path: '/add-car', text: 'ADD CAR' },
  { id: 5, path: '/delete', text: 'DELETE' },
];

const links = [
  { id: 1, path: '/', text: 'MODELS' },
  { id: 2, path: '/reserve', text: 'RESERVE' },
  { id: 3, path: '/reservation', text: 'MY RESERVATION' },
];

const SocialMedia = () => (
  <div className="position-absolute bottom-0 start-0">
    <div className="socialmedia">
      <FaTwitter className="icons" />
      <FaFacebookF className="icons" />
      <TiSocialGooglePlus className="icons" />
      <FaVimeoV className="icons" />
      <FaPinterestP className="icons" />
    </div>
    <div>
      <p className="footer">&copy; 2023 BookMyRide</p>
    </div>
  </div>
);

const SideNav = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const data = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="bg-light">
      <div className="sidebar">
        <ul className="navlinks">
          {data && isAuthenticated ? (adminLinks.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="btn btn-light"
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
          ))) : links.map((link) => (
            <li key={link.id}>
              <NavLink
                to={link.path}
                className="btn btn-light"
                style={({ isActive }) => (isActive
                  ? {
                    color: '#fff',
                    backgroundColor: '#97bf0e',
                    width: '100%',
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

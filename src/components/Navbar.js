import React from 'react';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/AddCar">Form</Link>
        </li>
        {/* Add more navigation links as needed */}
      </ul>
    </nav>
  );
}
export default NavigationBar;

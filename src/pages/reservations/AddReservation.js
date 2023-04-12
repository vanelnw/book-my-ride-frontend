import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { createReservation } from '../../features/reservations/addReservationSlice';
import './AddReservation.css';

const ReservationForm = () => {
  const location = useLocation();
  const car = location?.state?.car;
  const user = localStorage.getItem('user');
  const [reservationData, setReservationData] = useState({
    reservationDate: '',
    dueDate: '',
    carId: car.id,
  });

  const dispatch = useDispatch();
  const reservation = useSelector((state) => state.addReservation.reservation);
  const { message, success } = reservation;

  // const cars = useSelector((state) => state.car.cars);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createReservation(reservationData));
  };

  return (
    <div className="add-reservation-page">
      <div className="add-reservation-container">
        <div className={`message ${success ? 'success' : 'error'}`}>
          {message && <p>{message}</p>}
        </div>
        <div className="add-heading"><h2>Book the Car</h2></div>
        <form onSubmit={handleSubmit} className="add-reservation-form">
          <label htmlFor="username" className="reservation-item">
            User Name:
            <input
              type="text"
              id="username"
              name="username"
              defaultValue={JSON.parse(user).name}
              readOnly
              required
            />
          </label>
          <label htmlFor="carName" className="reservation-item">
            Car Name:
            <input
              type="text"
              id="carName"
              name="carName"
              defaultValue={`${car.make} ${car.model}`}
              readOnly
              required
            />
          </label>
          <label htmlFor="reservationDate" className="reservation-item">
            Select Start Date:
            <input
              type="date"
              id="reservationDate"
              name="reservationDate"
              value={reservationData.reservationDate}
              onChange={(e) => setReservationData({
                ...reservationData,
                reservationDate: e.target.value,
              })}
            />
          </label>
          <label htmlFor="dueDate" className="reservation-item">
            Select End Date:
            <input
              type="date"
              id="dueDate"
              name="dueDate"
              value={reservationData.dueDate}
              onChange={(e) => setReservationData({
                ...reservationData,
                dueDate: e.target.value,
              })}
            />
          </label>
          <button type="submit" className="book-btn">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;

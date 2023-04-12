import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation } from '../../features/reservations/addReservationSlice';
import './AddReservation.css';

const ReservationForm = () => {
  const user = localStorage.getItem('user');
  const [reservationData, setReservationData] = useState({
    reservationDate: '',
    dueDate: '',
    carId: 1,
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
        {/* {error && <p className="message-style">{error}</p>} */}
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
          {/* <label>
            Car:
            <select
              value={reservationData.car_id}
              onChange={(e) =>
                setReservationData({
                  ...reservationData,
                  car_id: e.target.value,
                })
              }
            >
              <option value="">Select a car</option>
              {cars.map((car) => (
                <option key={car.id} value={car.id}>
                  {car.make} {car.model} ({car.year})
                </option>
              ))}
            </select>
          </label> */}
          <button type="submit" className="book-btn">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default ReservationForm;

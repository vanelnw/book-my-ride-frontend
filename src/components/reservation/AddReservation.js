import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReservation } from '../../redux/reservation/addReservationSlice';
import '../../assets/stylesheets/AddReservation.css';

const ReservationForm = () => {
  const reservation = useSelector((state) => state.addReservation.reservation);
  const { cars } = useSelector((state) => state.cars);
  const { id } = useParams();

  const car = cars.find((car) => car.id === +id);

  const { message, success } = reservation;
  const user = localStorage.getItem('user');
  const [reservationData, setReservationData] = useState({
    reservationDate: '',
    dueDate: '',
    carId: car?.id || null,
  });

  const dispatch = useDispatch();

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
              required
            />
          </label>
          <label htmlFor="carName" className="reservation-item">
            Car Name:
            <select
              defaultValue={car?.id === undefined ? '' : car?.id}
              onChange={(e) => setReservationData({
                ...reservationData,
                carId: e.target.value,
              })}
              className="custom-select"
              required
            >
              <option value="">Select</option>
              {
                cars?.map((c) => (
                  <option
                    value={c?.id}
                    key={c?.id}
                  >
                    {`${c.make} ${c.model}`}
                  </option>
                ))
              }
            </select>
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

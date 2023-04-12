/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineSetting, AiOutlineRightCircle } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import circular from '../../assets/3LkGs.png';
import './CarDetails.css';
import { selectCarById } from '../../features/car/carSlice';

function CarDetails() {
  const { id } = useParams();
  const car = useSelector((state) => selectCarById(state, parseInt(id, 10)));

  const addReservation = () => {
    window.location.href = '/addReservation';
  };

  return (
    <div className="car-details">
      <div className="img-container">
        <img src={car?.image} alt="car" />
      </div>
      <div className="details-infos">
        <div className="title">
          <h2>{car.make}</h2>
          <p>
            $350 deposit upon any
            {' '}
            {car.make}
            {' '}
            Purchase
          </p>
        </div>
        <div className="fees">
          <div className="fee">
            Model
            {' '}
            <span>{car.model}</span>
          </div>
          <div className="fee">
            Description
            {' '}
            <span>{car.description}</span>
          </div>
          <div className="fee">
            Daily Rate
            {' '}
            <span>
              $
              {car.daily_rate}
            </span>
          </div>
          <div className="fee">
            Year
            {' '}
            <span>{car.year}</span>
          </div>
        </div>
        <div className="apr">
          <b> 5.9% APR </b>
          {' '}
          <span style={{ color: 'black' }}> Representative</span>
        </div>

        <button type="button" className="more-btn">
          DISCOVER MORE MODELS
          {' '}
          <BiChevronRight />
        </button>

        <img src={circular} alt="colorPicker" className="colorPicker" />

        <button type="button" className="reserve-btn" onClick={() => addReservation()}>
          <AiOutlineSetting />
          {' '}
          Reserve
          {' '}
          <AiOutlineRightCircle />
          {' '}
        </button>
      </div>
    </div>
  );
}

export default CarDetails;

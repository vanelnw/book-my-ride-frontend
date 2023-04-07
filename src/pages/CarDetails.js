/* eslint-disable import/no-extraneous-dependencies */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AiOutlineSetting, AiOutlineRightCircle } from 'react-icons/ai';
import { BiChevronRight } from 'react-icons/bi';
import circular from '../assets/3LkGs.png';
import Car from '../assets/voiture.png';
import { getCarDetails } from '../features/car/carActions';

function CarDetails() {
  const dipatch = useDispatch();

  useEffect(() => {
    dipatch(getCarDetails());
  }, [dipatch]);

  return (
    <div className="car-details">
      <div className="img-container">
        <img src={Car} alt="car" />
      </div>
      <div className="details-infos">
        <div className="title">
          <h2>VESPA 946</h2>
          <p>$350 deposit upon any Vespa Purchase</p>
        </div>
        <div className="fees">
          <div className="fee">
            Finance fee
            {' '}
            <span>350</span>
          </div>
          <div className="fee">
            Option to purshase fee
            {' '}
            <span>#350</span>
          </div>
          <div className="fee">
            Total ammount payable
            {' '}
            <span>#9,879</span>
          </div>
          <div className="fee">
            Duration
            {' '}
            <span>48 Months</span>
          </div>
        </div>
        <div>
          <b>5.9% APR</b>
          {' '}
          Representative
        </div>

        <button type="button" className="more-btn">
          DISCOVER MORE MODELS
          {' '}
          <BiChevronRight />
        </button>

        <img src={circular} alt="colorPicker" className="colorPicker" />

        <button type="button" className="reserve-btn">
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

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../../redux/reservation/reservationsListSlice';

const ReservationList = () => {
  const dispatch = useDispatch();
  const { loading, error, items } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="circle" />
        <h1 className="loading">Loading...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div className="my-reservations-container">
      <div className="heading"><h1>My Reservations</h1></div>
      {items.map((item) => (
        <div className="reservation" key={item.id}>
          <div className="image-container skeleton">
            <img className="car-image" src={item.car_image} alt="img" />
          </div>
          <div className="reserved-car-details">
            <p className="skeleton-text">
              Reserved at:
              {item.reservation_date}
            </p>
            <p className="skeleton-text">
              Due to:
              {item.due_date}
            </p>
            <p className="skeleton-text">
              Name:
              {item.car_make}
            </p>
            <p className="skeleton-text">
              Model:
              {item.car_model}
            </p>
            <p className="skeleton-text">
              Year:
              {item.car_year}
            </p>
            <p className="skeleton-text">
              Price:
              {item.car_price}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReservationList;

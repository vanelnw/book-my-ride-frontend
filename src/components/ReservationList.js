import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchItems } from '../redux/reservationsList/reservationsListSlice';

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
      {items.map((item) => (
        <div className="reservation" key={item.id}>
          <div className="img-container skeleton">
            <img className="img" src={item.car_image} alt="img" />
          </div>
          <div className="details">
            <p>
              Reserved at:
              {item.reservation_date}
            </p>
            <p>
              Due to:
              {item.due_date}
            </p>
            <p>
              Name:
              {item.car_make}
            </p>
            <p>
              Model:
              {item.car_model}
            </p>
            <p>
              Year:
              {item.car_year}
            </p>
            <p>
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

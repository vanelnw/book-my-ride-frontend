/* eslint-disable react/jsx-one-expression-per-line */
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
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="my-reservations-container">
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <h1>Reserved at: {item.reservation_date}</h1>
            <h1>Due to: {item.due_date}</h1>
            <h1>Name: {item.car_make}</h1>
            <h1>Model: {item.car_model}</h1>
            <h1>Year: {item.car_year}</h1>
            <h1>Price: {item.car_price}</h1>
            <div className="img-container skeleton">
              <img className="img" src={item.car_image} alt="img" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

  //   <h1>My Reservations</h1>
  //   <div className="reservation">
  //     <div className="img-container skeleton">
  //       <img
  //         className="img"
  //         src="https://th.bing.com/th/id/OIP.tuX3smXJ04DD_flNISF0kwHaFj?w=249&h=187&c=7&r=0&o=5&dpr=1.3&pid=1.7"
  //         alt="img"
  //       />
  //     </div>
  //     <div className="details">
  //       <p className="text skeleton-text">Reserved at:12/02/2023</p>
  //       <p className="text skeleton-text">Model:model-1</p>
  //       <p className="text skeleton-text">Year:2022</p>
  //     </div>
  //     <div className="descriptions">
  //       <p>
  //         heh kj dkkkk slkejr ertj rtj kjk ljkj kjlkjk kjrj jj. heh kj dkkkk
  //         slkejr ertj rtj kjk ljkj kjlkjk kjrj jj, heh kj dkkkk slkejr ertj rtj
  //         kjk ljkj kjlkjk kjrj jj. heh kj dkkkk slkejr ertj rtj kjk ljkj kjlkjk
  //         kjrj jj. heh kj dkkkk slkejr ertj rtj.
  //       </p>
  //     </div>
  //   </div>
};

export default ReservationList;

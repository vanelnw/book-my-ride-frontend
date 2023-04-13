/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CarDetails from '../pages/carDetails/CarDetails';

jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useParams: jest.fn(),
}));

describe('CarDetails component', () => {
  it('should display the car details', () => {
    const carId = '1';
    const car = {
      id: 1,
      make: 'Toyota',
      model: 'Corolla',
      description: 'A reliable car',
      daily_rate: 50,
      year: 2021,
      image: 'https://example.com/corolla.jpg',
    };
    useSelector.mockReturnValueOnce(car);
    useParams.mockReturnValueOnce({ id: carId });
    render(<CarDetails />);
    expect(screen.getByText(`${car.make} Purchase`)).toBeInTheDocument();
    expect(screen.getByText(`Model ${car.model}`)).toBeInTheDocument();
    expect(screen.getByText(`Description ${car.description}`)).toBeInTheDocument();
    expect(screen.getByText(`Daily Rate $${car.daily_rate}`)).toBeInTheDocument();
    expect(screen.getByText(`Year ${car.year}`)).toBeInTheDocument();
    expect(screen.getByText('5.9% APR')).toBeInTheDocument();
    expect(screen.getByText('DISCOVER MORE MODELS')).toBeInTheDocument();
    expect(screen.getByText('Reserve')).toBeInTheDocument();
  });
});

// import React from 'react';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { render } from '@testing-library/react';
// import { MemoryRouter, Route, Routes } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import CarDetails from '../pages/carDetails/CarDetails';
// import store from '../app/store';

// // Mock the selectCarById selector to return a sample car object
// jest.mock('../features/car/carSlice', () => ({
//   selectCarById: jest.fn(() => ({
//     id: 1,
//     make: 'Tesla',
//     model: 'Model S',
//     description: 'Luxury electric sedan',
//     daily_rate: 150,
//     year: 2021,
//     image: 'https://example.com/tesla-model-s.jpg',
//   })),
// }));

// // Unit test for the CarDetails component
// describe('CarDetails component', () => {
//   test('renders car details correctly', () => {
//     const { getByText, getByAltText } = render(
//       <Provider store={store}>
//         <MemoryRouter initialEntries={['/cars/1']}>
//           <Routes>
//             <Route path="/cars/:id" element={<CarDetails />} />
//           </Routes>
//         </MemoryRouter>
//       </Provider>,
//     );

//     // Check if the component renders the car image correctly
//     expect(getByAltText('car')).toBeInTheDocument();

//     // Check if the component renders the car details correctly
//     expect(getByText('Tesla')).toBeInTheDocument();
//     expect(getByText('$350 deposit upon any Tesla Purchase')).toBeInTheDocument();
//     expect(getByText('Model')).toBeInTheDocument();
//     expect(getByText('Description')).toBeInTheDocument();
//     expect(getByText('Daily Rate')).toBeInTheDocument();
//     expect(getByText('Year')).toBeInTheDocument();
//     expect(getByText('$150')).toBeInTheDocument();
//     expect(getByText('2021')).toBeInTheDocument();

//     // Check if the component renders the color picker and reserve button correctly
//     expect(getByAltText('colorPicker')).toBeInTheDocument();
//     expect(getByText('Reserve')).toBeInTheDocument();
//   });
// });

// import React from 'react';
// // eslint-disable-next-line import/no-extraneous-dependencies
// import { render, screen } from '@testing-library/react';
// import { MemoryRouter, Route } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import CarDetails from '../pages/carDetails/CarDetails';
// // import { selectCarById } from '../../features/car/carSlice';

// // Mock the useSelector function from react-redux
// jest.mock('react-redux', () => ({
//   useSelector: jest.fn(),
// }));

// describe('CarDetails', () => {
//   const car = {
//     id: 1,
//     make: 'Toyota',
//     model: 'Corolla',
//     year: 2022,
//     daily_rate: 50,
//     description: 'A reliable car for daily use',
//     image: 'https://example.com/image.png',
//   };

//   beforeEach(() => {
//     // Reset the mock implementation of useSelector before each test
//     useSelector.mockReset();
//   });

//   test('renders car details', () => {
//     // Mock the selectCarById function to return the test car
//     useSelector.mockReturnValue(car);

//     // Render the component with the test route
//     render(
//       <MemoryRouter initialEntries={[`/cars/${car.id}`]}>
//         <Route path="/cars/:id">
//           <CarDetails />
//         </Route>
//       </MemoryRouter>,
//     );

//     // Assert that the component renders the correct car details
//     expect(screen.getByAltText('car')).toHaveAttribute('src', car.image);
//     expect(screen.getByText(car.make)).toBeInTheDocument();
//     expect(screen.getByText(car.description)).toBeInTheDocument();
//     expect(screen.getByText(`$${car.daily_rate}`)).toBeInTheDocument();
//     expect(screen.getByText(car.year)).toBeInTheDocument();
//     expect(screen.getByText(/discover more models/i)).toBeInTheDocument();
//     expect(screen.getByAltText('colorPicker')).toBeInTheDocument();
//     expect(screen.getByText(/reserve/i)).toBeInTheDocument();
//   });

//   test('renders "not found" message when car is not found', () => {
//     // Mock the selectCarById function to return null
//     useSelector.mockReturnValue(null);

//     // Render the component with the test route
//     render(
//       <MemoryRouter initialEntries={['/cars/999']}>
//         <Route path="/cars/:id">
//           <CarDetails />
//         </Route>
//       </MemoryRouter>,
//     );

//     // Assert that the component renders the "not found" message
//     expect(screen.getByText('Car not found')).toBeInTheDocument();
//   });
// });

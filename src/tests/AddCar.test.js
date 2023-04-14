import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import AddCar from '../components/car/AddCar';

it('Add car component should render correctly', () => {
  const result = render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <AddCar />
        </Provider>
      </Router>
    </React.StrictMode>,
  );
  expect(result).toMatchSnapshot();
});

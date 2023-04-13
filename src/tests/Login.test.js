import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/store';
import Login from '../components/auth/Login';

it('Login component should render correctly', () => {
  const result = render(
    <React.StrictMode>
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    </React.StrictMode>,
  );
  expect(result).toMatchSnapshot();
});

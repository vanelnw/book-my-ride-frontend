import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { signup } from '../redux/authentication/authentication';
import LoginButton from '../layout/loginButton';

const Signup = () => {
//   const navigate = useNavigate();
  const [error, setError] = useState('');
  const [values, setValues] = useState({
    username: '',
    password: '',
    retypePassword: '',
  });

  const submitRequest = (event) => {
    event.preventDefault();
    // const payload = {
    //   name: values.username.toLowerCase(),
    //   password: values.password,
    // };
    if (values.password === values.retypePassword) {
    //   navigate('/home');
    //   const response = signup(payload);
    //   response.then((data) => {
    //     if (data.status !== 200) {
    //       setError('Failed to register user');
    //     } else {
    //       navigate('/home');
    //     }
    //   });
    } else {
      setError('Password does not match!');
    }
  };

  const handleUsernameChange = (e) => {
    setValues({
      ...values,
      username: e.target.value,
    });
  };
  const handleEmailChange = (e) => {
    setValues({
      ...values,
      email: e.target.value,
    });
  };
  const handlePasswordChange = (e) => {
    setValues({
      ...values,
      password: e.target.value,
    });
  };

  const handleRetypePasswordChange = (e) => {
    setValues({
      ...values,
      retypePassword: e.target.value,
    });
  };

  return (
    <div className="container-img">
      <div className="d-flex aligns-items-center justify-content-center h-100 d-inline-block">
        <div className="card align-self-center p-4" style={{ width: '28rem' }}>
          {error && (
            <div className="alert alert-danger" role="alert">
              {error}
            </div>
          )}
          <form onSubmit={submitRequest}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                Username
                <input
                  type="text"
                  className="form-control"
                  value={values.username}
                  onChange={handleUsernameChange}
                />
              </label>

            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
                <input
                  type="text"
                  className="form-control"
                  value={values.email}
                  onChange={handleEmailChange}
                />
              </label>

            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  value={values.password}
                  onChange={handlePasswordChange}
                  required
                />
              </label>

            </div>
            <div className="mb-3">
              <label htmlFor="retypePassword" className="form-label">
                Retype Password
                <input
                  type="password"
                  className="form-control"
                  id="retypePassword"
                  name="retypePassword"
                  value={values.retypePassword}
                  onChange={handleRetypePasswordChange}
                  required
                />
              </label>

            </div>
            <button type="submit" className="btn btn-primary">
              Sign up
            </button>
          </form>
          <div className="align-self-end">
            <LoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Signup;

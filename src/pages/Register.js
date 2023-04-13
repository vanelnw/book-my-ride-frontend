/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser } from '../features/auth/authActions';

const RegisterScreen = () => {
  const { loading, userInfo, success } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    // redirect user to login page if registration was successful
    if (success) navigate('/login');
    // redirect authenticated user to profile screen
    // if (userInfo) navigate('/user-profile');
  }, [navigate, userInfo, success]);

  const submitForm = (e) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      dispatch(registerUser(formData));
    } else {
      setErrorMessage('Password does not match!');
    }
  };

  return (
    <div className="registerPage">
      <form onSubmit={submitForm} className="form">
        <div className="top">
          <header>Sign Up</header>

          {errorMessage && <p className="errorMessage">{errorMessage}</p>}
          <div className="input-field reg-field">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field reg-field">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field reg-field">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-field reg-field">
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit" disabled={loading}>
            {loading ? <i className="fa fa-spinner fa-spin" /> : 'Sign Up'}
          </button>
          <div className="two-col">
            <div className="one">
              <p>Already have an account? </p>
              <p>
                <Link to="/login" className="whiteLink">
                  Login Here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default RegisterScreen;

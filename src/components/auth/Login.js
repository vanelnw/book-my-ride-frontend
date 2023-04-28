/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { userLogin } from '../../redux/auth/authActions';

function Login() {
  const { loading, error, isAuthenticated } = useSelector(
    (state) => state.auth,
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const user = { email, password };
    dispatch(userLogin(user));
  };

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="loginPage">
      <form onSubmit={handleLogin} className="form">
        <div className="top">
          <span className="color-white">
            Don&apos;t have an account yet?&nbsp;
            <Link to="/register">Register Here</Link>
          </span>
          <header>Login</header>
        </div>
        {error && <p className="errorMessage">{error}</p>}
        <div className="input-field">
          <input
            type="email"
            value={email}
            id="email"
            placeholder="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-field">
          <input
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="submit" disabled={loading}>
          {loading ? 'Spinner' : 'Login'}
        </button>
      </form>
    </div>
  );
}

export default Login;

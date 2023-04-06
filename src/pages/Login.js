/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogin } from '../features/auth/authActions';

function Login() {
  const { loading, error, isAuthenticated } = useSelector((state) => state.auth);
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
          <span>Have an account?</span>
          <header>Login</header>
        </div>
        {error && <p className="errorMessage">{error}</p>}
        <div className="input-field">
          <input type="email" value={email} id="email" placeholder="email" name="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-field">
          <input type="password" value={password} placeholder="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="submit" disabled={loading}>
          {loading ? 'Spinner' : 'Login'}
        </button>
        <div className="two-col">
          <div className="one">
            <input type="checkbox" name="" id="check" />
            <label htmlFor="check"> Remember Me</label>
          </div>
          <div className="two">
            <label><a href="./LOGIN">Forgot password?</a></label>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;

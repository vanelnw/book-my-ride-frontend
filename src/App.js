/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Login';
import Home from './pages/Home';
import RegisterScreen from './pages/Register';
import Navbar from './components/nav/Navbar';
import TopNav from './components/nav/Topbar';

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <div className="">

        <Router>
          <TopNav />
          <div className="d-flex">
            {isAuthenticated && <Navbar /> }
            <div className="home">
              <ToastContainer />
              <Routes>

                <Route path="/" element={!isAuthenticated ? <Login /> : <Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterScreen />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </div>

  );
}

export default App;

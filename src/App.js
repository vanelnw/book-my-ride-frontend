/* eslint-disable react/prop-types */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './assets/stylesheets/App.css';
import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import AddCar from './components/car/AddCar';
import Login from './components/auth/Login';
import Home from './components/home/Home';
import RegisterScreen from './components/auth/Register';
import Navbar from './components/nav/Navbar';
import TopNav from './components/nav/Topbar';
import CarDetails from './components/car/CarDetails';
import DeleteScreen from './components/car/DeleteScreen';
import ReservationList from './components/reservation/ReservationList';
import AddReservation from './components/reservation/AddReservation';

function App() {
  const { isAuthenticated } = useSelector((state) => state.auth);

  return (
    <div className="App">
      <div className="">
        <Router>
          <TopNav />
          <div className="d-flex">
            {isAuthenticated && <Navbar />}
            <div className={isAuthenticated ? 'home' : 'home full'}>
              <ToastContainer />
              <Routes>
                <Route
                  path="/"
                  element={!isAuthenticated ? <Login /> : <Home />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<RegisterScreen />} />
                <Route path="/car/:id" element={!isAuthenticated ? <Login /> : <CarDetails />} />
                <Route path="/addReservation" element={!isAuthenticated ? <Login /> : <AddReservation />} />
                <Route path="/addReservation/:id" element={!isAuthenticated ? <Login /> : <AddReservation />} />
                <Route path="/addCar" element={!isAuthenticated ? <Login /> : <AddCar />} />
                <Route path="/reservationList" element={!isAuthenticated ? <Login /> : <ReservationList />} />
                <Route path="/delete" element={!isAuthenticated ? <Login /> : <DeleteScreen />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

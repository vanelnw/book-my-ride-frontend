/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import AddCar from './components/Addcar/AddCar';
import Login from './pages/Login';
import Home from './pages/Home';
import RegisterScreen from './pages/Register';
import Navbar from './components/nav/Navbar';
import TopNav from './components/nav/Topbar';
import CarDetails from './pages/carDetails/CarDetails';
import DeleteScreen from './pages/delete/DeleteScreen';
import ReservationList from './components/ReservationList';

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
                <Route path="/car/:id" element={<CarDetails />} />
                <Route path="/delete" element={<DeleteScreen />} />
                <Route path="/addCar" element={<AddCar />} />
                <Route path="/reservationList" element={<ReservationList />} />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
// import { Routes, Route } from 'react-router-dom';
import Signup from './pages/signup';
// import Splash from './pages/splash';

function App() {
  return (
    <div className="main-container">
      <div>
        <h1>Home</h1>
        <Signup />
        {/* <Navbar /> */}
      </div>
      <div className="container-fluid px-0 main-section">
        {/* <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/signup" element={<Signup />} />
        </Routes> */}
      </div>
    </div>
  );
}

export default App;

// import React from 'react';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       Final Capstone
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddCar from './components/AddCar';
// import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Route exact path="/AddCar">
        <AddCar />
      </Route>
    </Router>
  );
}
export default App;

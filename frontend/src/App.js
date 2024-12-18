import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom'
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-blackbox.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import Signup from "./screens/Signup.jsx";
function App() {
  return (
    <Router>
    <div>
     <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/signup" element={<Signup/>} />
     </Routes>

    </div>
    
    </Router>

  );
}

export default App;

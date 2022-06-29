import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Doctor Appointment</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/" className="nav-link">   Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/allappointment" className="nav-link">All Appointment</Link>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>
  )
}

export default Navbar;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { a } from "react-router-dom";

const Header = () => {


  const logoutUser = () => {
    // remove the logged users details from session storage
    sessionStorage.removeItem('id');
    sessionStorage.removeItem('firstName');
    sessionStorage.removeItem('loginStatus');



  }
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/home" >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="/about">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signup">
                Sign Up
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/signin">
                Sign In
              </a>
            </li>
          </ul>
        </div>
        <div style={{ marginBottom: "2px", fontSize: "20px" }} className="nav-item">
          <li className="nav-item">
            <a className="nav-link" href="/signin" onClick={logoutUser}>
              Logout
            </a>
          </li>
        </div>
      </div>
    </nav>
  );
};

export default Header;

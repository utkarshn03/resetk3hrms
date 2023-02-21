import React from "react";
// import { Link } from "react-router-dom";
// import Kimsform from './kimsform';
// import "./Nav.css";
function NavBar() {
  return (
    <div className="header">
      <nav className="py-3 mb-8 border-bottom navbar navbar-expand-lg">
        <div className="container-fluid d-flex flex-wrap">
        <a
                  href="/"
                  className="nav-link nav-brand link-dark px-4 active"
                  aria-current="page"
                >
                  Home
                </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="nav me-auto">
              <li className="nav-item">
                
              </li>
              <li className="nav-item">
                <a href="#kiit" className="nav-link link-dark px-3">
                  Kiit
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-3">
                  Kims
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-3">
                  Kiss
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-3">
                  Temple
                </a>
              </li>
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-3">
                  Hospitality
                </a>
              </li>
            </ul>
            <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-3">
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <div>
        {/* <img src={logo} height="50px" width="80px" /> 
      </div> */}
      {/* <div className="list">
        <Link to="/k3/Kiit" style={{ color: "black" }}>
          Kiit
        </Link>
        <Link to="/k3/Kiims" style={{ color: "black" }}>
          Kims
        </Link>
        <Link to="/k3/Kiss" style={{ color: "black" }}>
          Kiss
        </Link>
        <Link to="/k3/Hospitality" style={{ color: "black" }}>
          Hospitality
        </Link>
        <Link to="/k3/Temple" style={{ color: "black" }}>
          Temple Trust
        </Link>
        <Link to="/k3/Socials" style={{ color: "black" }}>
          Social Media
        </Link>
      </div> */}
      {/* <button className="kiit-btn">logout</button> */}
    </div>
  );
}

export default NavBar;

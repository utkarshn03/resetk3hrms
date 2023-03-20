import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
// import Kimsform from './kimsform';
// import "./Nav.css";
function Tab() {
  return (
    <Wrapper className="bg-dark bg-opacity-25 py-2">
     
        <div className=" bg-white rounded-4 p-4 mb-3 container-fluid d-flex  justify-content-center "> 
        
          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button> */}
           
            <ul className="nav me-auto d-flex  justify-content-around flex-wrap align-items-center">
              <li className="nav-item">
              <a
                  href="/k3/home"
                  className="nav-link nav-brand link-dark px-4 active"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/kiit" className="nav-link link-dark px-3">
                  Kiit
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/kims" className="nav-link link-dark px-3">
                  Kims
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/kiss" className="nav-link link-dark px-3">
                  Kiss
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/temple" className="nav-link link-dark px-3">
                  Temple
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/hospitality" className="nav-link link-dark px-3">
                  Hospitality
                </a>
              </li>
            </ul>
            </div>
            {/* <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-3">
                  Logout
                </a>
              </li>
            </ul> */}
          
        
    
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
    </Wrapper>
  );
}

export default Tab;


const Wrapper= styled.div`
     
     width:100%;
     box-sizing:border-box;
     

     div{
      width:80%;
     }
     a{
      font-size:1rem
     }
`
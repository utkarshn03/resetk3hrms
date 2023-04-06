import React from "react";
import styled from "styled-components";

// import { Link } from "react-router-dom";
// import Kimsform from './kimsform';
import "../App.css";
function Tab() {

  return (
    <Wrapper className="py-22">
     
        <div className=" bg-white rounded-4  mb-3 container-fluid d-flex  justify-content-center "> 
        <div className="row">
        
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
           
            <ul className="nav me-auto d-flex  justify-content-around flex-wrap align-items-center fs-3">
              <li className="nav-item">
              <a
                  href="/k3/home"
                  className="nav-link nav-brand link-dark px-4 active fs-5"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/kiit" className="nav-link link-dark px-3 align-items-center fs-5">
                  Kiit
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/kims" className="nav-link link-dark px-3 align-items-center fs-5">
                  Kims
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/kiss" className="nav-link link-dark px-3 align-items-center fs-5">
                  Kiss
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/temple" className="nav-link link-dark px-3 align-items-center fs-5">
                  Temple
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/hospitality" className="nav-link link-dark px-3 align-text-center fs-5">
                  Hospitality
                </a>
              </li>
              <li className="nav-item">
                <a href="/k3/socialmedia" className="nav-link link-dark px-3 align-text-center fs-5">
                  Social Media
                </a>
              </li>
            </ul>
            </div>
            </div>
            {/* <ul className="nav">
              <li className="nav-item">
                <a href="/" className="nav-link link-dark px-3">
                  Logout
                </a>
              </li>
            </ul> */}
          
        
    
      
    </Wrapper>
  );
}

export default Tab;


const Wrapper= styled.div`
     
     width:100%;
     box-sizing:border-box;
     padding:10px;

     div{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:80%;
     }
     a{
      font-size:1.5rem !important;
      color: green !important;
      font-weight: 300;
      font-family: 'Poppins', sans-serif;
     }
`
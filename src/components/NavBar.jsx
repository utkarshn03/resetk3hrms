import React from 'react'
// import styled from 'styled-components'
function NavBar() {
  return (
    <div><div>
  
    <header className="py-2 bg-light border-bottom">
      <div className="container d-flex flex-wrap justify-content-center">
        <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
        &ensp;
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
        &ensp;
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>

        </a>
        <ul className="nav">
        <li className="nav-item"><a href="/" className="nav-link link-dark px-4">Welcome </a></li>
        <div className="dropdown text-end">
          <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle"/>
          </a>
          <ul className="dropdown-menu text-small">
            <li><a className="dropdown-item" href="/">View Report</a></li>
            <li><a className="dropdown-item" href="/">Social Media</a></li>
            <li><a className="dropdown-item" href="/">Darkmode</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Sign out</a></li>
          </ul>
        </div>
      </ul>
      </div>
    </header>
    </div></div>
  )
}

export default NavBar

// const Navbar= styled.div`
//    height: 10px;
//    background-color:grey;
// `
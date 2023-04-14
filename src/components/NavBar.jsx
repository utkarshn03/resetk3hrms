import React from 'react'
// import styled from 'styled-components'
function NavBar() {

  const headstyle= {backgroundcolor: '#d4ebd0'}
  return (
    <div><div >
  
    <header style={headstyle} className="py-2 border-bottom">
      <div className="container d-flex flex-wrap justify-content-center">
        <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          
        <img src="https://preparmy.com/wp-content/uploads/2017/04/KIIT_logo.svg_.png" href="https://www.kiit.ac.in" alt="mdo" width="52" height="52" className="rounded-circle"/>
        &ensp;
        <img src="https://th.bing.com/th/id/OIP.UX4yoFTu2uE5qDkGKg6oTgHaGj?pid=ImgDet&rs=1" href="" alt="mdo" width="52" height="52" className="rounded-circle"/>
        &ensp;
        <img src="https://th.bing.com/th/id/OIP.9abchmb6iWO-wjJhG0dGUwHaHa?pid=ImgDet&rs=1" href="https://kims.kiit.ac.in/" alt="mdo" width="52" height="52" className="rounded-circle"/>

        </a>
        <ul className="nav">
        <li className="nav-item"><a className="nav-link link-dark px-3 fs-4">Welcome </a></li>
        <div className="dropdown text-end">
          <a href="/" className="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="52" height="52" className="rounded-circle"/>
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
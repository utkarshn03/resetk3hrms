import React from 'react'
import styled from 'styled-components'
function NavBar() {
  return (
    <div><div>
  
    <header class="py-2 bg-light border-bottom">
      <div class="container d-flex flex-wrap justify-content-center">
        <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
          
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
        &ensp;
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
        &ensp;
        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>

        </a>
        <ul class="nav">
        <li class="nav-item"><a href="/" class="nav-link link-dark px-4">Welcome </a></li>
        <div class="dropdown text-end">
          <a href="/" class="d-block link-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" class="rounded-circle"/>
          </a>
          <ul class="dropdown-menu text-small">
            <li><a class="dropdown-item" href="/">View Report</a></li>
            <li><a class="dropdown-item" href="/">Settings</a></li>
            <li><a class="dropdown-item" href="/">Profile</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Sign out</a></li>
          </ul>
        </div>
      </ul>
      </div>
    </header>
    </div></div>
  )
}

export default NavBar

const Navbar= styled.div`
   height: 10px;
   background-color:grey;
`
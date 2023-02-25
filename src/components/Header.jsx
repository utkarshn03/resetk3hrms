import React from 'react'
import WelcomePage from '../pages/WelcomePage'
import NavBar from './NavBar'
import Employeedet from './Employeedet'
import Tab from './Tab'

function Header() {
  return (
    <div>
        <NavBar/>
        <Employeedet/>
        <Tab/>
    </div>
  )
}

export default Header
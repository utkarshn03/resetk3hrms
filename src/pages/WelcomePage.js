import React from 'react'
import Welcomecard from '../components/Welcomecard'
import Employeedet from '../components/Employeedet'
function WelcomePage() {
  document.title="K3hrms · Home";
  return (
    <div>
        <Welcomecard/>
        <Employeedet/>
    </div>
  )
}

export default WelcomePage
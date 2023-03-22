import React from 'react'
import Welcomecard from '../components/Welcomecard'
function WelcomePage() {
  document.title="K3hrms · Home";
  return (
    <div>
      <div className="col sm-3">
        <Welcomecard/>
      </div>
    </div>
  )
}

export default WelcomePage
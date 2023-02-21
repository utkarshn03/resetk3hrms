import React, { useState } from "react";
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
//import Header from './components/Header';
import Kissform from './components/Kissform';
// import Kimsform from './pages/kimsform';
import Kiitform from "./components/kiitform";
// import Successi from './pages/success';
import KiitData from './components/kiittable';
// import KimsData from './pages/kimst';
import NavBar from "./components/NavBar";
import EmployeeDet from "./components/Employeedet";
import Footer from "./components/Footer";
import Hospitalityform from './components/Hospitalityform';
import Templeform from './components/Templeform';
import { Alert } from './components/Alert';
//import Welcome from './components/Welcome';



function App() {


  const [alert, setAlert] = useState(null);

  const showAlert =(message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500 );
  }


  return (
    <>
      <NavBar title="header" />
      <div>
        <svg
          className="bd-placeholder-img bd-placeholder-img-lg img-fluid"
          width="100%"
          height="200"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Welcome to K3 HRMS"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
          <title></title>
          <rect width="100%" height="100%" fill="#868e96">
            hello
          </rect>
          <text x="50%" y="50%" fill="#dee2e6" dy=".3em">
            Welcome to K3 HRMS{" "}
          </text>
        </svg>
      </div>
      <EmployeeDet />
      <br />
      <br />
      <Kissform />
      <Kiitform />
      <KiitData />
      <Templeform />
      <Hospitalityform />
      <Footer />
    </>
    // <Router>
    //   <Routes>
    //   {/*
    //     <Route path="/Kissform" element={<Kissform />} />
    //     <Route path="/Kimsform" element={<Kimsform />} />

    //     <Route path="/KiitData" element={<KiitData />} /> */}
    //     <Route exact path="/NavBar" element={<NavBar />} />
    //     <Route path="/Kiitform" element={<Kiitform />} />
    //   </Routes>
    // </Router>

    // <React.Fragment>

    //   <main>
    //     <Routes>
    //     <Route path="/Kissform" element={<Kissform />} />
    //     <Route path="/Kimsform" element={<Kimsform />} />
    //     <Route path="/Kiitform" element={<Kiitform />} />
    //     <Route path="/KiitData" element={<KiitData />} />
    //     <Route path="/KimsData" element={<KimsData />} />
    //     <Route path="/NavBar" element={<NavBar />} />
    //     <Route path="/Hospitalityform" element={<Hospitalityform />} />
    //     <Route path="/Templetrustform" element={<Templetrustform />} />

    //       <Route path="/Successful" element={<Successi />} />
    //       {/* <Route path="/user" element={<Welcome/>} /> */}
    //     </Routes>
    //   </main></React.Fragment>
  );
}

export default App;

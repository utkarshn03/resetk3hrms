import React, { useState } from "react";
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
//import Header from './components/Header';
import Kissform from './components/Kissform';
import Kiitform from "./components/Kiitform";
import KiitData from './components/Kiittable';
import NavBar from "./components/NavBar";
import Welcomecard from "./components/Welcomecard";
import Employeedet from "./components/Employeedet";
import Footer from "./components/Footer";
import Hospitalityform from './components/Hospitalityform';
import Templeform from './components/Templeform';
import { Alert } from './components/Alert';
import Kimsform from "./components/Kimsform";
import Kimstable from "./components/Kimstable";
import Kisstable from "./components/Kisstable";
import Templetable from "./components/Templetable";
import Hospitalitytable from "./components/Hospitalitytable";
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
      <Welcomecard/>
      <Employeedet />
      <br />
      <br />
      <Kissform />
      <Kisstable />
      <Kiitform />
      <KiitData />
      <Kimsform />
      <Kimstable />
      <Templeform />
      <Templetable />
      <Hospitalityform />
      <Hospitalitytable />
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

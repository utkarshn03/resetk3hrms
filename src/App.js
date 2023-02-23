import React, { useState } from "react";
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
//import Header from './components/Header';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Kiit from "./pages/Kiit";
import Kissform from './components/Kissform';
import Kiitform from "./components/Kiitform";
import NavBar from "./components/NavBar";
import Kimsform from "./components/Kimsform";
import Kimstable from "./components/Kimstable";
import Kisstable from "./components/Kisstable";
import Templetable from "./components/Templetable";
import Hospitalitytable from "./components/Hospitalitytable";
import WelcomePage from "./pages/WelcomePage";
import Templeform from "./components/Templeform";
import Entry from "./pages/Entry";
import Hospitalityform from "./components/Hospitalityform";
import Employeedetail from "./components/Employeedet";
import Welcomecard from "./components/Welcomecard";
import Footer from "./components/Footer";
//import Welcome from './components/Welcome';



function App() {


  // const [alert, setAlert] = useState(null);

  // const showAlert =(message, type) => {
  //   setAlert({
  //     msg: message,
  //     type: type
  //   })
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500 );
  // }

  const [user,setUser]= useState(null)

  return (
    <>
      
      <BrowserRouter>
       <Routes>
       <Route path='/' element={<Entry setUser={setUser}/>}/>
       <Route path="/k3" element={<NavBar title="header"/>}/>
       <Route path="/k3/home" element={<div><NavBar/><Welcomecard/><Employeedetail/><Footer/></div>}/>
       <Route path="/k3/kiit" element={<div><NavBar/><Kiit/><Footer/></div>}/>
       <Route path="/k3/kiit/form" element={<div><NavBar/><br/><Kiitform/><Footer/></div>}/>
       <Route path="/k3/kims" element={<div><NavBar/><Kimstable/><Footer/></div>}/>
       <Route path="/k3/kims/form" element={<div><NavBar/><br/><Kimsform/><Footer/></div>}/>
       <Route path="/k3/kiss" element={<div><NavBar/><Kisstable/><Footer/></div>}/>
       <Route path="/k3/kiss/form" element={<div><NavBar/><br/><Kissform/><Footer/></div>}/>
       <Route path="/k3/hospitality" element={<div><NavBar/><Hospitalitytable/><Footer/></div>}/>
       <Route path="/k3/hospitality/form" element={<div><NavBar/><br/><Hospitalityform/><Footer/></div>}/>
       <Route path="/k3/temple" element={<div><NavBar/><Templetable/><Footer/></div>}/>
       <Route path="/k3/temple/form" element={<div><NavBar/><br/><Templeform/><Footer/></div>}/>
       <Route path="/k3/socials" element={<div><NavBar/><br/><WelcomePage/><Footer/></div>}/>
      
       
       </Routes>
       
      </BrowserRouter>
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



// <NavBar title="header" />
//       <WelcomePage/>
//       <br />
//       <br />
//       <Kissform />
//       <Kisstable />
//       <Kiitform />
//       <KiitData />
//       <Kimsform />
//       <Kimstable />
//       <Templeform />
//       <Templetable />
//       <Hospitalityform />
//       <Hospitalitytable />
//       <Footer />
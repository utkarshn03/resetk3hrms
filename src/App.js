import React, { useState } from "react";
// import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import "./App.css";
//import Header from './components/Header';
import { BrowserRouter, Route,Routes } from "react-router-dom";
import Kiit from "./pages/Kiit";
import Kissform from './components/Kissform';
import Kiitform from "./components/Kiitform";
import KiitData from './components/Kiittable';
import NavBar from "./components/NavBar";
// import Welcomecard from "./components/Welcomecard";
// import Employeedet from "./components/Employeedet";
// import Footer from "./components/Footer";
// import Hospitalityform from './components/Hospitalityform';
// import Templeform from './components/Templeform';
// import { Alert } from './components/Alert';
import Header from "./components/Header";
import Kimsform from "./components/Kimsform";
import Kimstable from "./components/Kimstable";
import Kisstable from "./components/Kisstable";
import Templetable from "./components/Templetable";
import Hospitalitytable from "./components/Hospitalitytable";
import WelcomePage from "./pages/WelcomePage";
import Templeform from "./components/Templeform";
import Entry from "./pages/Entry";
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
       <Route path="/k3" element={<Header/>}/>
       <Route path="/k3/home" element={<div><NavBar/><WelcomePage/></div>}/>
       <Route path="/k3/kiit" element={<div><NavBar/><Kiit/></div>}/>
       <Route path="/k3/kiit/form" element={<div><NavBar/><Kiitform/></div>}/>
       <Route path="/k3/kims" element={<div><NavBar/><Kimstable/></div>}/>
       <Route path="/k3/kims/form" element={<div><NavBar/><Kimsform/></div>}/>
       <Route path="/k3/kiss" element={<div><NavBar/><Kisstable/></div>}/>
       <Route path="/k3/kiss/form" element={<div><NavBar/><Kissform/></div>}/>
       <Route path="/k3/hospitality" element={<div><NavBar/><Hospitalitytable/></div>}/>
       <Route path="/k3/hospitality/form" element={<div><NavBar/><Kissform/></div>}/>
       <Route path="/k3/temple" element={<div><NavBar/><Templetable/></div>}/>
       <Route path="/k3/temple/form" element={<div><NavBar/><Kissform/></div>}/>
       <Route path="/k3/socials" element={<div><NavBar/><WelcomePage/></div>}/>
      
       
       </Routes>
       
      </BrowserRouter>
    </>
    // <Router>
    //   <Routes>
    //   {/*
    //     <Route path="/Kissform" element={<Kissform />} />
    //     <Route path="/Kimsform" element={<Kimsform />} />

    //     <Route path="/KiitData" element={<KiitData />} /> */}
    //     <Route exact path="/Tab" element={<Tab />} />
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
    //     <Route path="/Tab" element={<Tab />} />
    //     <Route path="/Hospitalityform" element={<Hospitalityform />} />
    //     <Route path="/Templetrustform" element={<Templetrustform />} />

    //       <Route path="/Successful" element={<Successi />} />
    //       {/* <Route path="/user" element={<Welcome/>} /> */}
    //     </Routes>
    //   </main></React.Fragment>
  );
}

export default App;



// <Tab title="header" />
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
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
//import Header from './components/Header';
// import Kissform from './pages/kissform';
// import Kimsform from './pages/kimsform';
import Kiitform from './components/kiitform';
// import Successi from './pages/success';
// import KiitData from './pages/kiitt';
// import KimsData from './pages/kimst';
// import NavBar from './pages/NavBar';
// import Hospitalityform from './pages/hospitality';
// import Templetrustform from './pages/templeform';
//import Welcome from './components/Welcome';

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route exact path="/NavBar" element={<NavBar />} />
        <Route path="/Kissform" element={<Kissform />} />
        <Route path="/Kimsform" element={<Kimsform />} />
        
        <Route path="/KiitData" element={<KiitData />} /> */}
        <Route path="/Kiitform" element={<Kiitform />} />
      </Routes>
    </Router>




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

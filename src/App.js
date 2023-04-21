import React from "react";
import { BrowserRouter, Route,Routes } from "react-router-dom";

import "./App.css";
import Kiittable from "./components/Kiittable";
import Kissform from './components/Kissform';
import Kiitform from "./components/Kiitform";
import Kimsform from "./components/Kimsform";
import Templeform from "./components/Templeform";
import Hospitalityform from "./components/Hospitalityform";
import Kimstable from "./components/Kimstable";
import Kisstable from "./components/Kisstable";
import Templetable from "./components/Templetable";
import Hospitalitytable from "./components/Hospitalitytable";
import WelcomePage from "./pages/WelcomePage";
import Entry from "./pages/Entry";
import Header from "./components/Header";
import Alert from "./components/Alert";
import Socialmedia from "./components/Socialmediatask";
import Home from "./components/Home";

//admin components

import Signup from "./admin/Employeecreate";
import Departmentregister from "./admin/Department";
import Departmenttable from "./admin/Departmentable";
import EmployeeTable from "./admin/EmployeeTable";
import Linechart from "./admin/Linechart";
import Kissproductsform from "./admin/Kissproductsform";
import Verification from "./components/Verification";

function App() {

  return (
    <>
      
      <BrowserRouter>
       <Routes>
       <Route path='/login' element={<Entry/>}/>
       <Route path="/k3" element={<Header title="header"/>}/>
       <Route path="/k3/home" element={<div><Header/><WelcomePage/></div>}/>
       <Route path="/k3/kiit" element={<div><Header/><Kiittable/></div>}/>
       <Route path="/k3/kiit/form" element={<div><Header/><Alert alert={alert}/><Kiitform/></div>}/>
       <Route path="/k3/kims" element={<div><Header/><Kimstable/></div>}/>
       <Route path="/k3/kims/form" element={<div><Header/><Alert alert={alert}/><Kimsform/></div>}/>
       <Route path="/k3/kiss" element={<div><Header/><Kisstable/></div>}/>
       <Route path="/k3/kiss/form" element={<div><Header/><Alert alert={alert}/><Kissform/></div>}/>
       <Route path="/k3/hospitality" element={<div><Header/><Hospitalitytable/></div>}/>
       <Route path="/k3/hospitality/form" element={<div><Header/><Alert alert={alert}/><Hospitalityform/></div>}/>
       <Route path="/k3/temple" element={<div><Header/><Templetable/></div>}/>
       <Route path="/k3/temple/form" element={<div><Header/><Alert alert={alert}/><Templeform/></div>}/>
       <Route path="/k3/socials" element={<div><Header/><WelcomePage/></div>}/>
       <Route path="/k3/socialmedia" element={<div><Header/><Socialmedia/></div>}/>

       <Route path="/" element={<div><Home/></div>}/>
       {/* Admin access */}
       <Route path="/k3/admin/createuser" element={<><Signup/></>}/>
       <Route path="/k3/admin/adddepartment" element={<><Departmentregister/></>}/>
       <Route path="/k3/admin/department" element={<><Departmenttable/></>}/>
       <Route path="/k3/admin/employee" element={<><EmployeeTable/></>}/>
       <Route path="/k3/admin/charts" element={<><Linechart/></>}/>
       <Route path="/k3/admin/kiss" element={<><Kissproductsform/></>}/>

       {/* Testing pages */}

       <Route path="/verification" element={<><Verification/></>}/>

       
       </Routes>
       
      </BrowserRouter>
    </>
    
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
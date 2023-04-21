import axios from "axios";
import React, { useEffect, useState } from "react";
import Verification from "./Verification";
import { useNavigate } from "react-router-dom";
import Employeedet from "./Employeedet";

const { ipapi } = require("../config.json");

axios.defaults.withCredentials = true;

var firstrender = true;

function Welcome() {
    
  let userdata;
  const apiuserget = ipapi + "/api/user";
  const apirefresh = ipapi + "/api/user/refresh";
  const navigate = useNavigate();

  const [User, setUser] = useState();

  const refreshToken = async () => {
    const response = await axios
      .get(apirefresh, {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    userdata = await response.data;
    return userdata;
  };

  const sendrequest = async () => {
    const response = await axios
      .get(apiuserget, {
        withCredentials: true,
      })
      .catch((err) => console.log(err));

    userdata = await response.data;
    console.log(userdata);

    return userdata;
  };

  useEffect(() => {
    if (firstrender) {
      firstrender = false;
      sendrequest().then((data) => setUser(data));
    }

    let interval = setInterval(() => {
      refreshToken().then((data) => setUser(data));
    }, 6 * 1000);

    return () => clearInterval(interval);
  }, );


    
  return <div>
 
    {User ?  <Verification data={User}/> : <h1>hello</h1>}
    {/* { User.verified && } */}
  </div>;
}

export default Welcome;

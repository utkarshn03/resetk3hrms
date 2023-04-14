import axios from "axios";
import React, { useEffect, useState } from "react";

const { ipapi } = require("../config.json");

axios.defaults.withCredentials = true;

var firstrender = true;

function Welcome() {
    
  let userdata;
  const apiuserget = ipapi + "/api/user";
  const apirefresh = ipapi + "/api/user/refresh";

  const [User, setUser] = useState();
  // console.log(User);

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
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);



  return <div>{User && <h1>{User.fname} {User.lname}</h1> 

  }</div>;
}

export default Welcome;

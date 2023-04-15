import React, { useState } from "react";
import { FormContainer, Heading, FormContent } from "./styled.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { ipapi } = require("../config.json");

export default function Verification() {

  const apilogin = ipapi + "/api/user/login";

  const navigate = useNavigate();

  var flag=0;

  const [inputs, setInputs] = useState({
    employeeid: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // function createCookie(fieldname, fieldvalue, expiry) {
  //   var date = new Date();
  //   date.setTime(date.getTime()+ (expiry*24*60*1000));
  //   var expires = "expires=" + date.toGMTString();
  //   document.cookie = fieldname + "=" + fieldvalue
  //                   + ";" + expires + ";path=/";
  // }
  
  // function readCookie(cname) {
  //   var name = cname + "=";
  //   var decoded_cookie = 
  //       decodeURIComponent(document.cookie);
  //   var carr = decoded_cookie.split(';');
  //   for(var i=0; i<carr.length;i++){
  //       var c = carr[i];
  //       while(c.charAt(0)===' '){
  //           c=c.substring(1);
  //       }
  //       if(c.indexOf(name) === 0) {
  //           return c.substring(name.length, c.length);
  //       }
  //   }
  //   return "";
  // }
  
  // function runApp() {
  //   var eid = readCookie("username");
  //   if(!eid){
  //       eid="hello";
  //       console.log(eid);
  //       if(eid!==null){
  //           createCookie("username", eid, 30);
  //       }
        
  //   }else{    
  
  //     navigate('/k3/home');
  
  //   }
  // }
  
  // if(flag===1){
  //   runApp();
    
  // }


  const sendRequest = async () => {
    console.log(inputs.employeeid, inputs.password);
    // const res = await axios
    //   .post(apilogin, {
    //     username: inputs.employeeid,
    //     password: inputs.password,
    //   })
    //   .catch((err) => {
        
    //     // console.log("Unexpected Error!");
    //     console.log(err);
      
    //   });


    let res;
      try{
        res = await axios
        .post(apilogin, {
          username: inputs.employeeid,
          password: inputs.password,
        })
      } catch(err){
        if(err.status === 404){
          console.log("Invalid Username/Password");
        } else if(err.status === 403){
          console.log("User not found");
        } else if(err.status === 400){
          console.log("Invalid Password");
        } else if(err.status === 0){
          console.log("No Internet/Server is down!");
        } else if(err.status===0)
        console.log("No Internet/Server is down!");
      }
      console.log(res);
      if(res && res.status === 200){
        console.log("Logged In");
      } 
    // const data = await res.status;
    // console.log(data);
    // return data;
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => navigate("/k3/home"));
    // sendRequest()
  };

  return (
    <FormContainer>
      <Heading>Login In</Heading>
      <FormContent onSubmit={handleSubmit}>
        <label>EmployeeId: </label>
        <input
          type="text"
          placeholder="employeeid"
          name="employeeid"
          id="employeeid"
          value={inputs.employeeid}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          value={inputs.password}
          onChange={handleChange}
        />
        <button type='submit' className="submit-btn" >
          Log In
        </button>
      </FormContent>
    </FormContainer>
  );
}

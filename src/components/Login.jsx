import React, { useState } from "react";
import { FormContainer, Heading, FormContent } from "./styled.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const { ipapi } = require("../config.json");

var flag = 0, flag0=0, flag3=0, flag4=0, flag00=0;

export default function Login() {
  const apilogin = ipapi + "/api/user/login";

  const navigate = useNavigate();

   

  

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

  const sendRequest = async () => {
    console.log(inputs.employeeid, inputs.password);
    const res = await axios
      .post(apilogin, {
        username: inputs.employeeid,
        password: inputs.password,
      })
      .catch((err) => {
        console.log("Unexpected Error!");
        console.log(err.response.status);
        console.log(err.response.message);
        if (err.response.status === 404) {
          console.log("Invalid Username/Password");
          flag4 =1;
        } else if (err.response.status === 403) {
          
          flag3=1;
          console.log("User not found");
          
        } else if (err.response.status === 400) {
          console.log("Invalid Password");
          flag00=1;
        } else if (err.response.status === 0) {
          console.log("No Internet/Server is down!");
          flag0=1;
        }
      });
    // console.log(res);
    if (res && res.status === 200) {
      console.log("Logged In");
      flag=1;
    }
    // const data = await res.status;
    // console.log(data);
    // return data;

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => {if (flag===1) navigate("/k3/home") });
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
          required
          value={inputs.employeeid}
          onChange={handleChange}
        />
        <label>Password: </label>
        <input
          type="password"
          placeholder="password"
          name="password"
          id="password"
          required
          value={inputs.password}
          onChange={handleChange}
        />
        
        <p>
        {flag3!==1 ? console.log("Hello") : <small >User Not found</small>}</p> 
        {/* {flag3===1 && flag00===1 ? console.log("Hello") : <small >Invalid Username/Password</small>} */}
        {flag00!==1 ? console.log("Hello") : <small >password incorrect</small>}
        
        {/* {flag4===1 ? <p>im noob</p>: console.log("hello") }
        {flag0===1 ? <p>im noob</p>: console.log("hello") } */}
        
        <button type="submit" className="submit-btn">
          Log In
        </button>
      </FormContent>
    </FormContainer>
  );
}

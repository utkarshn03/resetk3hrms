import React, { useState } from "react";
import { FormContainer, Heading, FormContent } from "./styled.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { ipapi } = require("../config.json");

export default function Verifyotp(props) {

  const apiauthotp = ipapi + "/api/auth/generate_otp";

  const navigate = useNavigate();

  var flag=0;

  const [inputs, setInputs] = useState({
    username: "",
    otp: ""
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // function createCookie(fieldname, fieldvalue, expiry) {



  const sendRequest = async () => {

    const res = await axios
      .post(apiauthotp, {
        username: props.data.username,
        otp: inputs.otp
      })
      .catch((err) => {

        console.log(err);
      });
      if(res.status === 200) {
        console.log("Logged In");
        flag =1;
      }

      const data = await res.status;
      console.log(data);
      return data;    
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => {if (flag===1) navigate("/k3/home")});
    // sendRequest()
  };

  return (
    <FormContainer>
      
      <Heading>Verification of Account</Heading>
      <Heading>{props.data.username}</Heading>
      <FormContent onSubmit={handleSubmit}>
        {/* <h1 className="text-success mb-0">Verification of Account</h1> */}
        <small>Check your mail we have sended you a mail</small>
        
        <input
          type="text"
          placeholder="employeeid"
          name="email"
          id="email"
          disabled
          readOnly
          value={props.data.username}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="email"
          name="otp"
          id="otp"
          value={inputs.otp}
          onChange={handleChange}
        />
        
        <button type='submit' className="submit-btn" >
          Authenticate
        </button>
      </FormContent>
    </FormContainer>
  );
}

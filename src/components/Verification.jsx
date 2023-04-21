import React, { useState } from "react";
import { FormContainer, Heading, FormContent } from "./styled.js";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const { ipapi } = require("../config.json");

export default function Verification(props) {

  const apiauthotp = ipapi + "/api/auth/generate_otp";

  const navigate = useNavigate();

  var flag=0;

  const [inputs, setInputs] = useState({
    username: "",
  });

  const handleChange = (e) => {
    setInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {

    const res = await axios
      .post(apiauthotp, {
        username: props.data.username,
      })
      .catch((err) => {

        console.log(err);
      });

      const data = await res.status;
      console.log(data);
      return data;    
    
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => navigate("/k3/home"));
    // sendRequest()
  };

  return (
    <FormContainer>
      
      <Heading>Verification of Account</Heading>
      <Heading>{props.data.username}</Heading>
      <FormContent onSubmit={handleSubmit}>
        {/* <h1 className="text-success mb-0">Verification of Account</h1> */}
        <small>we think it's your first time logging in</small>
        
        <input
          type="email"
          placeholder="email"
          name="email"
          id="email"
          disabled
          readOnly
          value={props.data.email}
          onChange={handleChange}
        />
        <button type='submit' className="submit-btn" >
          Authenticate
        </button>
      </FormContent>
    </FormContainer>
  );
}

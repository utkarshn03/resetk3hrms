import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom';

import {FormContainer, Heading,FormContent } from './styled.js';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { ipapi } = require("../config.json");

export default function Login({setUser}) {
  
//   const [email,setEmail]= useState('');
//   const [password, setPassword]= useState('');

//   const navigate= useNavigate();

//   const apilogin=  ipapi+"/api/user/login";

//   const handleSubmit= async(e)=>{
//       e.preventDefault();
//       console.log("yesa")
//       // if(!email||!password) return;
//       //   console.log("Internal");
//           const res = await axios.post(apilogin,
//             {
//                 username: inputs.username,
//                 password: inputs.password,
//             }
//         ).catch((err) => console.log(err));
//         const data = await res.data;
//         // return data;
//         console.log(data);

//       console.log("email",email)
      
//   };
//   const onChangeEmail=(e)=>{
//     setEmail({[e.target.name] : e.target.value})
//   }
//   const onChangePassword=(e)=>{
//     setPassword({...password, [e.target.name] : e.target.value})
//   }

//   const [inputs, setInputs] = useState({
//     username: "",
//     password: "",
// });

// const handleChange = (e) => {
//     setInputs(prev => ({
//         ...prev,
//         [e.target.name]: e.target.value
//     }
//     ))
// };



// const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(inputs);
//     sendRequest().then(() => history("/user"));
// };

const apilogin=  ipapi+"/api/user/login";

var flag=0;

var employeeid;

const navigate= useNavigate();


const [inputs, setInputs] = useState({
  email: "",
  password: "",
});

const handleChange = (e) => {
  setInputs(prev => ({
      ...prev,
      [e.target.name]: e.target.value
  }
  ))
};

const sendRequest = async () => {
  console.log(inputs.email,inputs.password);
  employeeid = inputs.email;
  const res = await axios.post(apilogin,
      {
          username: inputs.email,
          password: inputs.password,
      }
  ).catch((err) => console.log(err));
  const data = await res.data;
  flag=1;
  return data;  
};

// flag=1;

function createCookie(fieldname, fieldvalue, expiry) {
  var date = new Date();
  date.setTime(date.getTime()+ (expiry*24*60*1000));
  var expires = "expires=" + date.toGMTString();
  document.cookie = fieldname + "=" + fieldvalue
                  + ";" + expires + ";path=/";
}

function readCookie(cname) {
  var name = cname + "=";
  var decoded_cookie = 
      decodeURIComponent(document.cookie);
  var carr = decoded_cookie.split(';');
  for(var i=0; i<carr.length;i++){
      var c = carr[i];
      while(c.charAt(0)===' '){
          c=c.substring(1);
      }
      if(c.indexOf(name) === 0) {
          return c.substring(name.length, c.length);
      }
  }
  return "";
}

function runApp() {
  var eid = readCookie("username");
  if(!eid){
      eid=employeeid;
      console.log(eid);
      if(eid!==null){
          createCookie("username", eid, 30);
      }
      
  }else{    

    navigate('/k3/home');

  }
}

if(flag===1){
  runApp();
  
}

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log(inputs);
  sendRequest().then(() => console.log("jeet ki khusbu"));
};

  return (
    <FormContainer>
    <Heading>
      Login In
    </Heading>
    <FormContent onSubmit={handleSubmit}>
       <label htmlFor='email'>Email: </label>
       <input type="text"
              placeholder='youremail@gmail.com'
              name='email' 
              id ="email" 
              value={inputs.email}
              onChange={handleChange}
              />
        <label>Password: </label>
        <input type="password"
              placeholder='password'
              name='password' 
              id ="password" 
              value={inputs.password}
              onChange={handleChange}
              />
                <button className='submit-btn'>Log In</button>
    </FormContent>
  </FormContainer>
  )
}

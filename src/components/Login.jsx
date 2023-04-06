import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import {FormContainer, Heading,FormContent,FormHeader } from './styled.js';
import axios from 'axios';

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

const apilogin=  ipapi+"/api/user/login"


const [inputs, setInputs] = useState({
  username: "",
  email:"",
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
  const res = await axios.post(apilogin,
      {
          username: inputs.username,
          password: inputs.password,
      }
  ).catch((err) => console.log(err));
  const data = await res.data;
  return data;
};

const handleSubmit = (e) => {
  e.preventDefault();
  // console.log(inputs);
  sendRequest().then(() => console.log("jeet ki khusbu"));
};

  return (
    <FormContainer>
    <Heading>
      User Login
    </Heading>
    <FormContent onSubmit={handleSubmit}>
       <label htmlFor='username'>username </label>
       <input type="text"
              placeholder='youremail@gmail.com'
              name='username' 
              id ="username" 
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
                <button className='submit-btn'>login</button>
    </FormContent>
  </FormContainer>
  )
}

import React from 'react'
import { useState } from 'react'
import '../App.css'
import styled from 'styled-components'
import Login from '../components/Login'
import Registration from '../components/Registration'
import { useEffect } from 'react'

export default function Entry({setUser}) {

   
    const [curr, setCurr]= useState("login");
    
    function toggleItem(){
        setCurr(prevState=>{
            console.log("previous :", prevState)
            return [prevState=="login"? "registration": "login"]
        })
    }

    useEffect(()=>{
       
      },[curr])

    
  return (
    <div className='main-container'>
       
        <ResponsiveFlex className='form-content'>
              <FlexContent>
                <br/>
                <div className='entry-name'> 
                Welcome to Kiit HRMS 
                </div>
                 <Login setUser={setUser}/>
              </FlexContent>
        </ResponsiveFlex>
    </div>
  )
}

const ResponsiveFlex= styled.div`
         width:100%;
         height:100%;
         display: flex;
         flex-direction: row;
         justify-content: center;
         
`
const FlexContent= styled.div`
      width:60%;
      height:100%;
      padding: 1rem;
      display:flex;
      flex-direction: column;
      justify-content:center;
      align-items:center;
`
import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux'
import { adddata, getform } from "../Redux/action";
import "./Input.css";
import { useNavigate } from 'react-router-dom'
const Input = () => {

  const dispatch= useDispatch()
  const navigate= useNavigate()
const [Adddata,setAdddata]= useState({
  name:"",
  email:"",
  number:"",
  password:"",
 
})



const handlechange=(e)=>{
  setAdddata({...Adddata,[e.target.name]:e.target.value})
}


const handlesubmit=(e)=>{
  e.preventDefault()
  dispatch(adddata({
    name:Adddata.name,
    email:Adddata.email,
    number:Adddata.number,
    password:Adddata.password
  })).then(()=>{
    dispatch(getform())
      navigate("/")
  })
  
}



   


  return (
    <div>
    
     <h1>Add Details Here</h1>
      <div className="main-div">
        <form className="Input-form" onSubmit={handlesubmit}>
          <input type="text" placeholder="Enter Name Here..." name="name" value={Adddata.name} onChange={handlechange}/>

          <input type="email" placeholder="Enter Email here.." name="email" value={Adddata.email} onChange={handlechange}/>
          <input type="number" placeholder="Enter Number here..." name="number" value={Adddata.number} onChange={handlechange} />
          <input type="password" placeholder="enter password here..." name="password" value={Adddata.password} onChange={handlechange}/>
        
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Input;

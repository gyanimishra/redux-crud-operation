import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { adddata,  getform, getsingleform, UPDATEsingleform } from "../Redux/action";
import "./Input.css";
import { useNavigate, useParams } from 'react-router-dom'
import { useEffect } from "react";
const Edituser = () => {
    
const [Adddata,setAdddata]= useState({
  name:"",
  email:"",
  number:"",
  password:"",
 
})

  const dispatch= useDispatch()
 let {id} =useParams()
 const singledata = useSelector((state) => state.user)
     
    
  const navigate= useNavigate()

  useEffect(()=>{
    dispatch(getsingleform(id))
  },[])
  
  
  useEffect(()=>{
   if(singledata)
   {
      setAdddata({...singledata})
   }
  },[singledata])


const handlechange=(e)=>{
  setAdddata({...Adddata,[e.target.name]:e.target.value})
}


const {name,email,number,password}= Adddata

const handlesubmit=(e)=>{
  e.preventDefault()
  dispatch(UPDATEsingleform({name,email,number,password},id))
      navigate("/")
  
  
}
     


   


  return (
    <div>
    
     <h1>Edit Details Here</h1>
      <div className="main-div">
        <form className="Input-form" onSubmit={handlesubmit}>
          <input type="text" placeholder="Enter Name Here..." name="name" value={Adddata.name||""} onChange={handlechange}/>

          <input type="email" placeholder="Enter Email here.." name="email" value={Adddata.email ||""} onChange={handlechange}/>
          <input type="number" placeholder="Enter Number here..." name="number" value={Adddata.number ||""} onChange={handlechange} />
          <input type="password" placeholder="enter password here..." name="password" value={Adddata.password ||""} onChange={handlechange}/>
        
          <input type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Edituser;

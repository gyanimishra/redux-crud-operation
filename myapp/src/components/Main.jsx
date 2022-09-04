import React from 'react'
import Input from './Input'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {  getform } from '../Redux/action'
import Form from './Form'
import './Input.css'
import { useNavigate } from 'react-router-dom'
const Main = () => {

    const dispatch= useDispatch()

    const navigate= useNavigate()

    const data = useSelector((state) => state.formdata)

    console.log(data,"data");

useEffect(()=>{

    dispatch(getform())
},[])
  
const handlemove= ()=>{

    navigate('/input')
}




  return (
    <div>
        <h1>Registartion-Form</h1>

        <div>
            <button onClick={handlemove}>Add-User</button>
            
        </div>

        <div id='mapdata'>
            {data?.map((item)=>{
                return <Form key={item.id}  {...item} />
            })}
        </div>
      
    </div>
  )
}

export default Main

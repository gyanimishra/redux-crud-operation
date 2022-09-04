import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteform } from '../Redux/action'
import './Input.css'
import { useNavigate } from 'react-router-dom'
const Form = (props) => {
  const dispatch= useDispatch()
  const navigate= useNavigate()
  const handledelete=(id)=>{
    if(window.confirm("Are u sure want o delete?"))
    {
      dispatch(deleteform(id))

    }
  }


  const handleedit=()=>{
    navigate(`/edituser/${props.id}`)
  }
  return (
    <div id='mapdata1'>
        
            <p>{props.name}</p>
            <p>{props.email}</p>
            <p>{props.number}</p>
            <p>{props.gender}</p>
        <button onClick={()=>handledelete(props.id)}>Delete</button>
        <button onClick={handleedit}>Edit</button>
      
    </div>
  )
}

export default Form

import { ADD_FORM_DETAILS_FAILURE, ADD_FORM_DETAILS_REQUEST, ADD_FORM_DETAILS_SUCCESS, DELETE_FORM_DETAILS_FAILURE, DELETE_FORM_DETAILS_REQUEST, DELETE_FORM_DETAILS_SUCCESS, EDIT_SINGLE_FORM, GET_FORM_DETAILS_FAILURE, GET_FORM_DETAILS_REQUEST, GET_FORM_DETAILS_SUCCESS, UPDATE_SINGLE_FORM } from "./actionType";

import axios  from 'axios'

export const getformdatarequest= (payload)=>({

    type:GET_FORM_DETAILS_REQUEST,
    payload
})


export const getformdatasuccess= (payload)=>({

    type:GET_FORM_DETAILS_SUCCESS,
    payload
})

export const getformdatafailure= (payload)=>({

    type:GET_FORM_DETAILS_FAILURE,
    payload
})


  export const getform= (payload)=>(dispatch)=>{
       
  dispatch(getformdatarequest())
    axios.get("http://localhost:3000/form").then((res)=>dispatch(getformdatasuccess(res.data)))
    .catch((err)=>dispatch(getformdatafailure(err)))

  }


  ///////////////aDD DATA //////////////////


    
  export const adddatareq=(payload)=>({
    type:ADD_FORM_DETAILS_REQUEST,
    payload
  })

  export const adddatasuccess=(data)=>({
    type:ADD_FORM_DETAILS_SUCCESS,
    payload:data
  })

  export const adddatafail=(payload)=>({
    type:ADD_FORM_DETAILS_FAILURE,
    payload
  })



  export const adddata=({name,email,number,password})=>(dispatch)=>{
  dispatch(adddatareq())
    return axios.post("http://localhost:3000/form",{name,email,number,password}).then((res)=>dispatch(adddatasuccess()))
    .catch((err)=>dispatch(adddatafail(err)))
  }


  ////////////////delete/////////////////////
 

  export const DELETEdatasuccess=()=>({
    type:DELETE_FORM_DETAILS_SUCCESS,
    
  })

  



  export const deleteform=(id)=>(dispatch)=>{

    axios.delete(`http://localhost:3000/form/${id}`).then((res)=>{
      dispatch(DELETEdatasuccess());
      dispatch(getform())
    })
    .catch((err)=>console.log(err))
  }


  ////////eDIT SINGLE FORM


  export const getsingle=(user)=>({
    type:EDIT_SINGLE_FORM,
    payload:user
    
  })


  export const getsingleform=(id)=>(dispatch)=>{

    axios.get(`http://localhost:3000/form/${id}`).then((res)=>{
    
      dispatch(getsingle(res.data));
      
    })
    .catch((err)=>console.log(err))
  }


  //////UPDATE FORM



  export const UPDATEsingle=()=>({
    type:UPDATE_SINGLE_FORM
   
    
  })


  export const UPDATEsingleform=({name,email,number,password},id)=>(dispatch)=>{

    axios.put(`http://localhost:3000/form/${id}`,{name,email,number,password}).then((res)=>{
     
      dispatch(UPDATEsingle());
      
    })
    .catch((err)=>console.log(err))
  }
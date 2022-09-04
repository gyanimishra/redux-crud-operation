import { ADD_FORM_DETAILS_FAILURE, ADD_FORM_DETAILS_REQUEST, ADD_FORM_DETAILS_SUCCESS, DELETE_FORM_DETAILS_SUCCESS, EDIT_SINGLE_FORM, GET_FORM_DETAILS_FAILURE, GET_FORM_DETAILS_REQUEST, GET_FORM_DETAILS_SUCCESS, UPDATE_SINGLE_FORM } from "./actionType";


const initstate={
   formdata:[],
   isloading:false,
   iserror:false,
   user:{}
}

export const formreducer=(state=initstate,action)=>{

    switch (action.type) {
        case GET_FORM_DETAILS_REQUEST:{
            return{
                ...state,
                isloading:true,
                iserror:false

            }
        }
        case GET_FORM_DETAILS_SUCCESS:{
            return{
                ...state,
                isloading:false,
                formdata:action.payload,
                iserror:false
            }
        }

        case GET_FORM_DETAILS_FAILURE:{
            return{
                ...state,
                iserror:true,
                isloading:false
            }
        }

        case ADD_FORM_DETAILS_REQUEST:{
            return{
                ...state,
                isloading:true,
                iserror:false
            }
        }
        case ADD_FORM_DETAILS_SUCCESS:{
            return{
                ...state,
                isloading:false,
                formdata:action.payload,
                iserror:false
            }
        }
        case ADD_FORM_DETAILS_FAILURE:{
            return{
                ...state,
                isloading:false,
                
                iserror:true
            }
        }
        case DELETE_FORM_DETAILS_SUCCESS:{
            return{
                ...state,
                isloading:false,
                
            }
        }
        case EDIT_SINGLE_FORM:{
            return{
                ...state,
               user:action.payload,
                isloading:false,
                
            }
        }
        case UPDATE_SINGLE_FORM:{
            return{
                ...state,
                isloading:false,
                
            }
        }
            
           
    
        default:{
            return state
        }
            
    }

}
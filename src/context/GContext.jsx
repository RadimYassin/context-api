import { createContext, useReducer } from "react";
import AppReducer from './AppReducer'


export const Gcontext=createContext()

const init ={
    todos:[]
}

export const Gprovider=props=>{
const [state,dispatch]=useReducer(AppReducer,init)
const Add=(value)=>{
    if (!value.length) {
        console.log("add a value !");
    } else {
         dispatch({type:"ADD",payload:value})
    }
       
}

const del=(id)=>{
    dispatch({type:"DEL",payload:id})
}
const Up=(value,isId)=>{
    if (value) {
        dispatch({type:"UP",value:value,isId:isId})
    }
  
}


    return <Gcontext.Provider value={{todos:state.todos,Add,del,Up}}>{props.children}</Gcontext.Provider>
}
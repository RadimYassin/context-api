import React, { useContext, useState } from 'react'
import { Gcontext } from './context/GContext'

function Todo(props) {

    const {del,Up}=useContext(Gcontext)

    const [isId,setId]=useState(null)
    const [up,setUpdate]=useState(false)
    const [newV,setnewV]=useState('')
    const update=(id)=>{
        setId(id)
        setUpdate(true)
    }
  return (
    <div>
      <h1>{props.item.todos}</h1>
      <button onClick={()=>del(props.item.id)}>delete</button>
      <button onClick={()=>update(props.item.id)}>update</button><br/><br/>

      {up ? <><input value={newV} onChange={e=>setnewV(e.target.value)} type="text" /><button onClick={()=>{Up(newV,isId);setUpdate(false)}}>ok </button></>:null     }
    </div>
  )
}

export default Todo

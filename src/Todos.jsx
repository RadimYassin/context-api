import React, { useContext, useState } from 'react'
import { Gcontext } from './context/GContext'
import Todo from './Todo'
function Form() {

  const [value, setValue] = useState("")
  const { Add, todos } = useContext(Gcontext)

  return (
    <>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} />

      <button onClick={() => {Add(value);setValue("")}}>add</button>
      <div>
        { todos  ? todos.map((item, index) => <Todo key={index} item={item}/>):"no todos"}
       
      </div>

    </>

  )
}

export default Form

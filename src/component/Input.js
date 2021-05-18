import React,{useState} from 'react'
import './Input.css'

function Input() {
    const [input, setinput] = useState('')
     const addTodo=()=>{
         
     }
    return (
        <div className='input'>
            <input type='text' value={input} onChange={e=>setinput(e.target.value)}/>
            <button onClick={addTodo}>Add!</button>
        </div>
    )
}

export default Input

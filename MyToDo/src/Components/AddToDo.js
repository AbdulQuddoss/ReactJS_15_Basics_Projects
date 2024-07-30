import React from 'react'
import './AddToDo.css';
import { useGlobalContext } from '../Context';

const AddToDo = () => {
  const {AddToDo, input, setInput} = useGlobalContext();
  return (
    <div>
      <div className="addToDo-container">
        <h1>To Do App</h1>
        <input type="text" placeholder='Add To Dos' onChange={e => setInput(e.target.value)}/>
        <button className="add-btn" onClick={() => AddToDo(input)}>Add</button>
      </div>
    </div>
  )
}

export default AddToDo

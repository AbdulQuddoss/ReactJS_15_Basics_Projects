import React from 'react'
import ToDoItem from './ToDoItem'
import './ToDoList.css';
import { useGlobalContext } from '../Context';

const ToDoList = () => {
 const {items} = useGlobalContext();
 console.log(items);
  return (
    <>
          {
            items?.map((item, index) => {
              return(
                <div className="toDoList-container" key={index}>
                <ToDoItem text={item.text}/>
                </div>
              )
            })
          }
    </>
  )
}

export default ToDoList

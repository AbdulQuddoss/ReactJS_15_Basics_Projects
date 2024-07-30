import React from 'react'

import { FaEdit } from 'react-icons/fa';
import { FaTrash } from 'react-icons/fa';

const List = ({list, removeItem, editItem}) => {
  return (
   <div className='grocery-list'>
     {list.map((item, index) => {
       const {id, title} = item;
       return <article key={id} className='grocery-item'>
         <p className='title'>{title}</p>
         <div className='btn-container'>
           <button type='submit' className='edit-btn' onClick={() => editItem(id)}>
             <FaEdit />
           </button>
           <button type='submit' className='delete-btn' onClick={() => removeItem(id)}>
             <FaTrash />
           </button>
         </div>
       </article>
     })}
   </div>
  )
}

export default List;

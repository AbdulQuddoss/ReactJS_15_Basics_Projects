import React from "react";
import "./ToDoItem.css";

const ToDoItem = ({text}) => {
  return (
    <>
      <div className="toDoItem-container">
        <div className="toDoText">
          <p>
            {text}
          </p>
        </div>
        <div className="btn-list">
          <button className="edit">Edit</button>
          <button className="remove">Remove</button>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;

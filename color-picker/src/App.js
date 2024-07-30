import React from "react";
import { useState, useEffect } from "react";

import values from 'values.js';

import SingleColor from './singleColor';

function App() {
  const [color, setColor] = useState('');
  const [error, setError] = useState(false);
  const [list, setList] = useState(new values('#f15025').all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const colors = new values(color).all(10);
      setList(colors);
      console.log(colors);
    
    } catch (error) {
      setError(true);
    }
  }

  return(
    <>
    <section className="container">
      <h3>generate color</h3>
      <form onSubmit={handleSubmit}>
        <input className={error ? 'error' : ''} type='text' placeholder="#f15025" value={color} onChange={(e) => setColor(e.target.value)}/>
        <button type="submit" className="btn">submit</button>
      </form>
    </section>
    <section className="color">
     {list.map((item, index) => {
       return <SingleColor key={index} {...item} index={index} hexColor={item.hex}/>
     })}
    </section>
    </>
  )
}

export default App;

import React from "react";
import { useState, useEffect } from "react";

import data from './data';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if(count > 8){
      amount = 8;
    }
    if(count <= 0){
      amount = 1;
    }
    setText(data.slice(0, amount));

  }
  return (
    <section className="section-center">
      <h3>lorem impsun project</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label className="amount" htmlFor="amount">
          paragraph:
        </label>
        <input
          type="number"
          id="amount"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button className="btn" type="submit">
          generate
        </button>
      </form>
      <article>
       {text.map((item, index) => {
         return <p key={index}>{item}</p>
       })}
      </article>
    </section>
  );
}

export default App;

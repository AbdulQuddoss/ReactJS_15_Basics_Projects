import React from "react";
import { useState, useEffect } from "react";

import data from './data';
import { FaQuoteRight } from "react-icons/fa";
import {  FiChevronRight, FiChevronLeft } from "react-icons/fi";

function App() {
  const [people, setPeople] = useState(data);
  const [index, setIndex] = useState(0);

useEffect(() => {
  let lastIndex = people.length -1;
  if(index < 0){
    setIndex(lastIndex);
  }
  if(index > lastIndex){
    setIndex(0)
  }
},[index, people])

useEffect(() => {
  let cleaner = setInterval(() => {setIndex(index + 1)}, 3000);
  return () => clearInterval(cleaner);
}, [index])

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>Reviews
        </h2>
        <div className="section-center">
          {people.map((person, personIndex) => {
            const {id, image, name, title, quote} = person;

            let position = 'nextSlide';
           if(personIndex === index){
             position = "activeSlide"
           }  
           if(personIndex === index -1 || (index === 0 && personIndex === people.length -1)){
             position = "lastSlide";
           }

            return(
              <article className={position} key={id}>
                <img className="person-img" src={image} alt={name}/>
                <h4>{name}</h4>
                <p className="title">{title}</p>
                <p className="text">{quote}</p>
                <FaQuoteRight className="icon"/>
              </article>
            )
          })}
        </div>
        <button className="prev" onClick={() => setIndex(index -1)}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={() => setIndex(index +1)}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;

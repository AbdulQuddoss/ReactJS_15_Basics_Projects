import React from "react";

import Navbar from "./navbar";
import CartContainer from './cartContainer';

import { useGlobalContext } from "./context";

function App() {
const {loading} = useGlobalContext();

  if(loading){
    return(
      <div className="loading">
        <h1>loading...</h1>
      </div>
    )
  }
  return(
    <>
    <Navbar />
    <CartContainer />
    </>
  )
}

export default App;

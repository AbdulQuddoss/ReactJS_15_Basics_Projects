import React from "react";

import { BrowserRouter as Router, Routes, Route, link } from "react-router-dom";

import { useGlobalContext } from "./context";
import Home from "./pages/home";
import Error from "./pages/error";
import SingleCocktail from "./pages/singleCocktail";
import About from './pages/about';
import NavBar from "./component/navBar";


function App() {
  
  return (
   <>
   <Router>
    <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/cocktial/:id" element={<SingleCocktail />}/>
        <Route path="*" element={<Error />}/> 
      </Routes>
   </Router>
   </>

  );
}

export default App;
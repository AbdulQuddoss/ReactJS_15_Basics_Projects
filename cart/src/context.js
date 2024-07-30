import React, { useState, useContext, useReducer, useEffect } from "react";

import reducer from './reducer';
import data from "./data";
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const initiaState = {
  loading: false,
  cart: data,
  total: 0,
  amount: 0
}

 const AppProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initiaState);

const clearAllCart = () => {
   dispatch({type: 'CLEART_ALL_CART'})
 }

const removeCart = (id) => {
 dispatch({type: 'REMOVE_CART', payload: id})
}

// const increament = (id) => {
//   dispatch({type: 'INCREAMENT', payload: id})
//  }

// const decreament = (id) => {
//   dispatch({type: 'DECREAMENT', payload: id})
//  }

 const toggleAmount = (id, type) => {
   dispatch({type: 'TOGGLE_AMOUNT', payload: {id, type}})
 }

 const fetchData = async() => {
   dispatch({type: 'LOADING'});
   const response = await fetch(url);
   const carts = await response.json();
   dispatch({type: 'DISPLAY', payload: carts})
 }

 useEffect(() => {
   fetchData()
 }, [])

 useEffect(() => {
  dispatch({type: 'GET_TOTAL'})
 }, [state.cart])
  

  return (
    <AppContext.Provider value={{
      ...state,
      clearAllCart,
      removeCart,
      // increament,
      // decreament,
      toggleAmount
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider};
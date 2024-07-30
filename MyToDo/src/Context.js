import React, { useState, useContext, useReducer} from "react";
import reducer from "./Reducer";
//import ToDos from "./data";
const AppContext = React.createContext();

const InitialState = {
  items: [],
  loading: false
}
const AppProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, InitialState);
  const [input, setInput] = useState("");

  const AddToDo = (input) => {
    dispatch({type: "ADD_TODO", payload: input});
  }
  // const RemoveToDo = (Id) => {
  //   dispatch({type: "REMOVE_TODO", payload: Id});
  // }

  return (
    <AppContext.Provider value={{
     ...state,
     AddToDo,
     input,
     setInput,
     //RemoveToDo
    }}>
      {children}
      </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext);
}
export {AppContext, AppProvider};
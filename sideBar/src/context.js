import React, {useState, useContext} from "react";
import App from './App';

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const modalOpen = () => {
    setIsModalOpen(true);
  }
  const modalClose = () => {
    setIsModalOpen(false);
  }
  const sidebarOpen = () => {
    setIsSidebarOpen(true);
  }
  const sidebarClose = () => {
    setIsSidebarOpen(false);
  }
  return (
    <AppContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        modalOpen,
        modalClose,
        sidebarOpen,
        sidebarClose
      }}
    >
      {children}
      </AppContext.Provider>
  )
}

export const useGlobleContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }

import React, { useState, useContext } from "react";

import subLinks from './data';

const AppContext = React.createContext();

const AppProvider = ( {children} ) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [location, setLocation] = useState({});
  const [page, setPage] = useState({page: '', links: []});

  const openSubmenu = (text, coordinates) => {
    const pages = subLinks.find((link) => link.page === text);
    setPage(pages)
    setLocation(coordinates)
    setIsSubmenuOpen(true)
  }
  const closeSubmenu = () => {
    setIsSubmenuOpen(false)
  }
  const openSidebar = () => {
    setIsSidebarOpen(true)
  }
  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }
  return(
    <AppContext.Provider value={{
      isSubmenuOpen,
      isSidebarOpen,
      openSubmenu,
      closeSubmenu,
      openSidebar,
      closeSidebar,
      location,
      page
    }}>
      {children}
      </AppContext.Provider>
  )
}

export const useGlobleContext = () => {
  return useContext(AppContext);
}

export {AppContext, AppProvider}
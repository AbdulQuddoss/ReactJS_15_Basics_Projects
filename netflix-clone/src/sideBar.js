import React from 'react'

import logo from './logo.svg';
import { links, social } from './data';
import { FaTimes } from 'react-icons/fa';
import { useGlobleContext } from './context';

const SideBar = () => {
  const {isSidebarOpen, sidebarClose} = useGlobleContext();
  return (
    <aside className={`sidebar ${isSidebarOpen? 'show-sidebar': ''}`}>
      <div className="sidebar-header">
        <img src={logo} alt="logo..." className="logo" />
        <button className="close btn" onClick={sidebarClose}>
          <FaTimes />
        </button>
      </div>
      <ul className="links">
        {links.map((link) => {
          const {id, url, text, icon} = link;
          return(
            <li key={id}>
              <a href={url}>
                {icon}
                {text}
                </a>
            </li>
          )
        })}
      </ul>
      <ul className="social-icons">
        {social.map((sol) => {
           const {id, url, icon} = sol;
           return(
             <li key={id}>
               <a href={url}>
                 {icon}
                 </a>
             </li>
           )
        })}
      </ul>
    </aside>
  )
}

export default SideBar

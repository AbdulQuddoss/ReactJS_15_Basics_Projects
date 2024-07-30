import React from 'react'

import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';

import { useGlobleContext } from './context';

const Navebar = () => {
  const {openSidebar, openSubmenu, closeSubmenu} = useGlobleContext();

  const handleMouseOver = (e) => {
    const pages = e.target.textContent;
    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(pages, {center, bottom})
  }

  const handleMouseOverOnNav = (e) => {
    if(!e.target.classList.contains('link-btn')){
      closeSubmenu();
    }
  }
  return (
   <div className="nav" onMouseOver={handleMouseOverOnNav}>
     <div className="nav-center">
       <div className="nav-header">
         <img src={logo} alt="logo" />
         <button className="btn toggle-btn" onClick={openSidebar}>
           <FaBars />
         </button>
       </div>
       <ul className="nav-links">
         <li>
           <button className="link-btn" onMouseOver={handleMouseOver}>
             products
           </button>
         </li>
         <li>
           <button className="link-btn" onMouseOver={handleMouseOver}>
             developers
           </button>
         </li>
         <li>
           <button className="link-btn" onMouseOver={handleMouseOver}>
             company
           </button>
         </li>
       </ul>
       <button className='btn signin-btn'>Sign in</button>
     </div>
   </div>
  )
}

export default Navebar

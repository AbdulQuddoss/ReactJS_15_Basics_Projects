import React, {useState, useEffect, useRef} from 'react'

import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';
import { links, social } from './data';

const NavBar = () => {
  const [showHeight, setShowHeight] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksContainerHeight = linksRef.current.getBoundingClientRect().height;

    if(showHeight){
      linksContainerRef.current.style.height = `${linksContainerHeight}px`;
    }
    else{
      linksContainerRef.current.style.height = '0px';
    }
  }, [showHeight]);

  return (
   <nav>
     <div className="nav-center">
       <div className="nav-header">
         <img src={logo} className="logo" alt="logo..." />
         <button className="nav-toggle" onClick={() => setShowHeight(!showHeight)}>
           <FaBars />
         </button>
       </div>
       <div className="links-container" ref={linksContainerRef}>
         <ul className="links" ref={linksRef}>
           {
             links.map((link) => {
               const {id, url, text} = link;
               return(
                 <li key={id}>
                   <a href={url}>{text}</a>
                 </li>
               )
             })
           }
         </ul>
       </div>
       <ul className="social-icons">
         {
            social.map((sol) => {
              const {id, url, icon} = sol;
              return(
                <li key={id}>
                  <a href={url}>{icon}</a>
                </li>
              )
            })
         }
       </ul>
     </div>
   </nav>
  )
}

export default NavBar;

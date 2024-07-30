import React, { useEffect, useRef, useState } from 'react'

import { useGlobleContext } from './context'

const Submenue = () => {
  const {isSubmenuOpen, location, page: {page, links}} = useGlobleContext();
  const container = useRef(null);
  const [column, setColumn] = useState('col-2');

  useEffect(() => {
    setColumn('col-2')
  const {center, bottom} = location;
  const subMenu = container.current;
  subMenu.style.left = `${center}px`;
  subMenu.style.top = `${bottom}px`;

  if(links.length === 3){
    setColumn('col-3')
  } 
  if(links.length > 3){
    setColumn('col-4')
  }
  }, [location, links])

  return (
    <aside className={`${isSubmenuOpen? 'submenu show': 'submenu'}`} ref={container}>
      <section>
        <h4>{page}</h4>
        <div className={`submenu-center ${column}`}>
          {
            links.map((link, index) => {
              const {label, icon, url} = link;
              return(
                <a href={url} key={index}>
                  {icon}
                  {label}
                </a>
              )
            })
          }
        </div>
      </section>
    </aside>
  )
}

export default Submenue

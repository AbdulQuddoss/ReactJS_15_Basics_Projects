import React from 'react'

import { FaTimes } from 'react-icons/fa'
import sublinks from './data'

import { useGlobleContext } from './context'

const Sidebar = () => {
  const {isSidebarOpen, closeSidebar} = useGlobleContext();

  return (
    <div className={`${isSidebarOpen? 'sidebar-wrapper show': 'sidebar-wrapper'}`}>
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {
            sublinks.map((link, index) => {
              const {page, links} = link;
              return(
                <article key={index}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {
                      links.map((link, index) => {
                        const {label, icon, url} = link;
                        return(
                          <a key={index} href={url}>
                            {icon}
                            {label}
                          </a>
                        )
                      })
                    }
                  </div>
                </article>
              )
            })
          }
        </div>
      </aside>
    </div>
  )
}

export default Sidebar

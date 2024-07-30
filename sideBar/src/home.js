import React from 'react';

import {FaBars} from 'react-icons/fa';
import { useGlobleContext } from './context';

const Home = () => {
  const {modalOpen, sidebarOpen} = useGlobleContext()
  return (
    <main>
      <button className="sidebar-toggle" onClick={sidebarOpen}>
        <FaBars />
      </button>
      <button className="btn" onClick={modalOpen}>
        show modal
      </button>
    </main>
  )
}

export default Home;

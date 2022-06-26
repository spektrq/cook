import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData} from './SidebarData.js'
import './NavBar.css';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';

function NavBar() {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
    <IconContext.Provider value={{color: '#fff'}}>
        <nav className={'nav-menu active'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            {SidebarData.map((item, index) => {
              return (
                  <li key={index} className={item.cName}>
                    <Link to={item.path}>
                      {item.icon}
                      <span>{item.title}</span>
                    </Link>
                  </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider >
    </>
  )
}

export default NavBar

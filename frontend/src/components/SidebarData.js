import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    icon: <AiIcons.AiFillHome />,
    path: '/',
    cName: 'nav-text'
  },
  {
    title: 'Recipes',
    icon: <IoIcons.IoIosPaper />,
    path: '/recipes',
    cName: 'nav-text'
  }
]

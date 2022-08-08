import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbare from './Navbare';
import SideBar from '../sharedCompnents/SideBar';
function NavSideBar(props) {
  return (
    <div>
      <Navbare />
      <SideBar />
      <Outlet />
    </div>
  );
}

export default NavSideBar;

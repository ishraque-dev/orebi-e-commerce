import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { icons } from '../../assets/constants';
import useWindowResize from '../../hooks/useWindowResize';
const NavBar = ({ logo, Image, navItems }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useWindowResize();

  return (
    <div className="navbar flex items-center py-7 font-dm">
      <div className="header_logo ">
        <Image src={logo} alt="logo" />
      </div>
      <icons.bar
        className="ml-auto lg:hidden md:hidden"
        onClick={() => {
          setActiveMenu((pre) => !pre);
        }}
      />
      {activeMenu && (
        <div className="nav_items mx-auto">
          {navItems.map((navItem) => (
            <NavLink
              key={navItem.name}
              to={navItem.to}
              className={`mx-10 ${
                location.pathname === navItem.to && 'font-bold'
              }`}
            >
              {navItem.name}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

export default NavBar;

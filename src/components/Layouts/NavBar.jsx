import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
const NavBar = ({ logo, Image, navItems }) => {
  const location = useLocation();

  return (
    <div className="navbar flex items-center py-7 font-dm">
      <div className="header_logo ">
        <Image src={logo} alt="logo" />
      </div>
      <div className="nav_items mx-auto ">
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
    </div>
  );
};

export default NavBar;

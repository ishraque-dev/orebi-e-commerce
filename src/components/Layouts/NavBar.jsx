import React from 'react';
import { NavLink } from 'react-router-dom';
const NavBar = ({ logo, Image, navItems }) => {
  return (
    <div className="navbar flex items-center py-7">
      <div className="header_logo ">
        <Image src={logo} alt="logo" />
      </div>
      <div className="nav_items mx-auto">
        {navItems.map((navItem) => (
          <NavLink key={navItem.name} to={navItem.to} className="mx-10">
            {navItem.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default NavBar;

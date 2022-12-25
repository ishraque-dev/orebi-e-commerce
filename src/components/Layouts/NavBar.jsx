import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { icons } from '../../assets/constants';
import { motion } from 'framer-motion';
import useWindowResize from '../../hooks/useWindowResize';
const NavBar = ({ logo, Image, navItems }) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useWindowResize();
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar lg:flex md:flex py-7 md:px-5 sm:px-5 mobile:px-5 xs_mobile:px-5 font-dm">
      <div className="header_logo ">
        <Image src={logo} alt="logo" />
      </div>
      {!open ? (
        <icons.bar
          className="ml-auto lg:hidden md:hidden absolute top-7 right-2.5 cursor-pointer"
          onClick={() => {
            setActiveMenu((pre) => !pre);
            setOpen(true);
          }}
        />
      ) : (
        <icons.close
          className="ml-auto lg:hidden md:hidden absolute top-7 right-2.5 text-xl cursor-pointer"
          onClick={() => {
            setActiveMenu((pre) => !pre);
            setOpen(false);
          }}
        />
      )}
      {activeMenu && (
        <motion.div
          whileInView={{
            x: [40, 0],
          }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="mx-auto flex flex-wrap mt-4 lg:mt-0 md:mt-0"
        >
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
        </motion.div>
      )}
    </div>
  );
};

export default NavBar;

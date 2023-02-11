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
    <div className="navbar py-3 font-dm xs_mobile:px-5 mobile:px-5 sm:px-5 md:flex md:px-5 lg:flex">
      <div className="header_logo flex items-center">
        <Image src={logo} alt="logo" />
      </div>
      {!open ? (
        <icons.bar
          className="absolute top-7 right-2.5 ml-auto cursor-pointer md:hidden lg:hidden"
          onClick={() => {
            setActiveMenu((pre) => !pre);
            setOpen(true);
          }}
        />
      ) : (
        <icons.close
          className="absolute top-7 right-2.5 ml-auto cursor-pointer text-xl md:hidden lg:hidden"
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
          className="mx-auto mt-4 flex flex-wrap md:mt-0 lg:mt-0"
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

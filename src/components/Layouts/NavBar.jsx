import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink, useLocation } from 'react-router-dom';
import { icons } from '../../assets/constants';
import { motion } from 'framer-motion';
import useWindowResize from '../../hooks/useWindowResize';
import { BackDrop } from '../UI';
const NavBar = ({ logo, Image, navItems }) => {
  const location = useLocation();
  const [activeMenu] = useWindowResize();

  const [open, setOpen] = useState(false);
  //Prevent scrolling when the menu is opened
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [open]);

  const handleDropClick = () => {
    setOpen(false);
  };
  return (
    <>
      <div className="navbar flex w-[80%] justify-between overflow-hidden py-3 font-dm xs_mobile:px-5 mobile:px-5 sm:px-5">
        <div className="flex min-w-[20%] items-center ">
          <Image src={logo} alt="logo" className="" />
        </div>
        {activeMenu && (
          <div className="flex items-center justify-center">
            {navItems.map((navItem) => (
              <NavLink
                key={navItem.name}
                to={navItem.to}
                className={`mx-7 lg:mx-11 ${
                  location.pathname === navItem.to && 'font-bold'
                }`}
              >
                {navItem.name}
              </NavLink>
            ))}
          </div>
        )}
        {!open ? (
          <icons.bar
            className="sidebar absolute right-2.5 top-3 ml-auto cursor-pointer md:hidden lg:top-7 lg:hidden"
            onClick={() => {
              // setActiveMenu((pre) => !pre);
              setOpen(true);
            }}
          />
        ) : (
          <icons.close
            className="absolute top-3 right-2.5  z-50 ml-auto cursor-pointer text-xl md:hidden lg:hidden"
            onClick={() => {
              // setActiveMenu((pre) => !pre);
              setOpen(false);
            }}
          />
        )}
        {open && (
          <motion.div
            whileInView={{
              x: [40, 0],
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="sidebar absolute right-0 top-10 z-50 h-full w-1/2 rounded-l-md bg-[#232F3E]"
          >
            {navItems.map((navItem) => (
              <NavLink
                key={navItem.name}
                to={navItem.to}
                className={`mx-10 ${
                  location.pathname === navItem.to && 'font-bold'
                }`}
              >
                <div
                  className="ml-3 text-white"
                  onClick={() => {
                    // setActiveMenu((pre) => !pre);
                    setOpen(false);
                  }}
                >
                  {navItem.name}
                </div>
              </NavLink>
            ))}
          </motion.div>
        )}
      </div>
      {ReactDOM.createPortal(
        <BackDrop onClick={handleDropClick} open={open} />,
        document.getElementById('back-drop-root')
      )}
    </>
  );
};

export default NavBar;

import React, { useState } from 'react';
import { logo } from '../../assets';
import {
  links as navItems,
  icons,
  dropdownAnimationVariants as dropDivAnimVariants,
  dropUlAnimVariant,
} from '../../assets/constants';
import { NavBar, Image } from '../index.js';
import { Dropdown, MotionUL, MotionLI } from '../../components';
import useDomElement from '../../hooks/useDomElement';
import { motion } from 'framer-motion';
const Header = () => {
  const [currentCatItem, setCurrentCatItem] = useState('');
  const [onTarget, setOnTarget] = useDomElement();

  // This will be replaced
  const category = [
    'Accesories',
    'Furniture',
    'Electronics',
    'Clothes',
    'Bags',
    'Home appliances',
  ];

  return (
    <div className="font-dm ">
      <div className="mx-auto max-w-container">
        <NavBar logo={logo} Image={Image} navItems={navItems} />
      </div>
      <div className="flex w-full flex-wrap items-center justify-between bg-[#F5F5F3] py-5 px-5 lg:px-header_padding">
        <div
          className="toggle flex items-center gap-3"
          onClick={() => {
            setOnTarget(!onTarget);
          }}
        >
          <icons.catBar className="cursor-pointer " />
          <Dropdown className="dropdown relative flex w-64 flex-col">
            <p className="cursor-pointer">
              {currentCatItem || 'Shop by Category'}
            </p>
            {onTarget && (
              <motion.div
                className="absolute top-7 w-full rounded-sm bg-primary-black p-2 text-white"
                initial="hidden"
                animate="visible"
                variants={dropDivAnimVariants}
              >
                <MotionUL variants={dropUlAnimVariant}>
                  {category.map((item, i, arr) => {
                    return (
                      <MotionLI
                        key={i}
                        className={`cursor-pointer list-none text-gray-300 hover:text-white ${
                          item === arr.slice(-1).join('')
                            ? 'border-none'
                            : 'border-b border-[#2d2d2d]'
                        } py-2`}
                        onClick={() => {
                          setCurrentCatItem(item);
                        }}
                      >
                        {item}
                      </MotionLI>
                    );
                  })}
                </MotionUL>
              </motion.div>
            )}
          </Dropdown>
        </div>
        <div>middle</div>
        <div>right</div>
      </div>
    </div>
  );
};

export default Header;
// Coded by ishraque

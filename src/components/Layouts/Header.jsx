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
  const [currentCatItem, setCurrentCatItem] = useState(null);
  // This will be replaced
  const category = [
    'Accesories',
    'Furniture',
    'Electronics',
    'Clothes',
    'Bags',
    'Home appliances',
  ];
  const [onTarget, setOnTarget] = useDomElement();
  return (
    <div className="font-dm ">
      <div className="max-w-container mx-auto ">
        <NavBar logo={logo} Image={Image} navItems={navItems} />
      </div>
      <div className="flex justify-between items-center py-5 px-5 lg:px-header_padding flex-wrap bg-[#F5F5F3] w-full">
        <div
          className="flex items-center gap-3 toggle"
          onClick={() => setOnTarget(!onTarget)}
        >
          <icons.catBar className="cursor-pointer " />
          <Dropdown className="flex flex-col dropdown relative w-64">
            <p className="cursor-pointer">
              {currentCatItem || 'Shop by Category'}
            </p>
            {onTarget && (
              <motion.div
                className="absolute top-7 bg-primary-black w-full h-72 rounded-sm p-2 text-white"
                initial="hidden"
                animate="visible"
                variants={dropDivAnimVariants}
              >
                {category.map((item, _, arr) => {
                  return (
                    <MotionUL variants={dropUlAnimVariant}>
                      <MotionLI
                        className={`list-none cursor-pointer text-gray-300 hover:text-white ${
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
                    </MotionUL>
                  );
                })}
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

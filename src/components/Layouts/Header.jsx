import React, { useState, useEffect, useReducer } from 'react';
import { motion } from 'framer-motion';
import { logo } from '../../assets';
import {
  links as navItems,
  icons,
  dropdownAnimationVariants as dropDivAnimVariants,
  dropUlAnimVariant,
  category,
} from '../../assets/constants';
// eslint-disable-next-line import/no-cycle
import {
  NavBar,
  Image,
  Dropdown,
  MotionUL,
  MotionLI,
  Search,
  Button,
} from '../index.js';

import useDomElement from '../../hooks/useDomElement';
import useKeyPress from '../../hooks/useKeyPress';
import keyPressReducer from '../../store/keyPressReducer';

function Header() {
  const [currentCatItem, setCurrentCatItem] = useState('');
  const [onTarget, setOnTarget] = useDomElement('category');
  const [onTarget2, setOnTarget2] = useDomElement('user');
  const [onTarget3, setOnTarget3] = useDomElement('cart');
  const arrowUpPressed = useKeyPress('ArrowUp');
  const arrowDownPressed = useKeyPress('ArrowDown');
  const initialState = { selectIndex: 0 };
  const [state, dispatch] = useReducer(keyPressReducer, initialState);

  useEffect(() => {
    if (arrowUpPressed) {
      dispatch({ type: 'arrowUp' });
    }
  }, [arrowUpPressed]);
  useEffect(() => {
    if (arrowDownPressed) {
      dispatch({ type: 'arrowDown' });
    }
  }, [arrowDownPressed]);

  // This will be replaced
  // const inputReference = useRef(null);

  return (
    <div className="font-dm ">
      <div className="mx-auto max-w-container">
        <NavBar logo={logo} Image={Image} navItems={navItems} />
      </div>
      <div className="flex w-full flex-wrap items-center justify-between bg-[#F5F5F3] py-5 px-5 lg:px-header_padding">
        <div
          className="toggle flex  items-center gap-3"
          onClick={() => {
            setOnTarget(!onTarget);
          }}
        >
          <icons.catBar className="cursor-pointer " />
          <Dropdown className="dropdown relative flex flex-col">
            <p className="cursor-pointer">
              {currentCatItem || 'Shop by Category'}
            </p>
            {onTarget && (
              <motion.div
                className="absolute top-7 w-64 rounded-sm bg-primary-black p-2 text-white"
                initial="hidden"
                animate="visible"
                variants={dropDivAnimVariants}
              >
                <MotionUL variants={dropUlAnimVariant}>
                  {category.map((item, i, arr) => (
                    <MotionLI
                      // LiRef={i === state.selectIndex ? inputReference : null}
                      key={i}
                      currentIndex={state.selectIndex}
                      className={`cursor-pointer list-none ${
                        i === state.selectIndex ? 'text-white' : 'text-gray-400'
                      }  hover:text-white ${
                        item === arr.slice(-1).join('')
                          ? 'border-none'
                          : 'border-b border-[#2d2d2d]'
                      } py-2`}
                      role="button"
                      ariaPressed={i === state.selectIndex}
                      tabIndex="-1"
                      onClick={() => {
                        setCurrentCatItem(item);
                        dispatch({ type: 'select', payload: i });
                      }}
                      onKeyPress={(e) => {
                        console.log(e.target);
                      }}
                    >
                      {item}
                    </MotionLI>
                  ))}
                </MotionUL>
              </motion.div>
            )}
          </Dropdown>
        </div>
        <div className=" flex w-96 items-center">
          <Search />
          <div className="relative flex items-center ">
            {' '}
            <icons.search className="absolute right-2 rounded-full" />
          </div>
        </div>
        <div className="toggle relative flex w-44 ">
          <icons.user
            onClick={() => {
              setOnTarget2(!onTarget2);
            }}
          />
          {!onTarget2 && (
            <icons.angleDown
              onClick={() => {
                setOnTarget2(!onTarget2);
              }}
            />
          )}
          {onTarget2 && <icons.angleUp />}
          {onTarget2 && (
            <Dropdown className="absolute right-20 top-5 h-24 w-48">
              <Button className="w-full bg-primary-black py-3 px-2  text-white">
                My Account
              </Button>
              <Button className="w-full bg-slate-200 py-3 px-2  text-black">
                Logout
              </Button>
            </Dropdown>
          )}
          <icons.cart
            onClick={() => {
              setOnTarget3(!onTarget3);
            }}
          />
          {onTarget3 && (
            <Dropdown className="w-88 absolute top-5 w-64 bg-black">
              <div>Top</div>
              <div>Bottom</div>
            </Dropdown>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
// Coded by ishraque

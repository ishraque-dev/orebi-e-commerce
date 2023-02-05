import React, { useState, useEffect, useReducer } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { logo } from '../../assets';
import {
  links as navItems,
  icons,
  dropdownAnimationVariants as dropDivAnimVariants,
  dropUlAnimVariant,
  category,
  images,
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
  DropCartItem,
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
  useEffect(() => {
    if (onTarget) {
      setOnTarget2(false);
      setOnTarget3(false);
    }
    if (onTarget2) {
      setOnTarget(false);
      setOnTarget3(false);
    }
    if (onTarget3) {
      setOnTarget(false);
      setOnTarget2(false);
    }
  }, [onTarget, onTarget2, onTarget3]);
  return (
    <div className="font-dm ">
      <div className="mx-auto max-w-container">
        <NavBar logo={logo} Image={Image} navItems={navItems} />
      </div>
      <div className="flex w-full items-center justify-between bg-[#F5F5F3] py-5 px-5 lg:flex-wrap lg:px-header_padding">
        <div
          className="toggle flex  items-center gap-3"
          onClick={() => {
            setOnTarget(!onTarget);
          }}
        >
          <icons.catBar className="cursor-pointer " />
          <Dropdown className="dropdown relative flex flex-col">
            <p className="hidden cursor-pointer lg:inline-block">
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
        <div className="flex w-auto items-center tablet:w-80 lg:w-96">
          <Search />
          <div className="relative flex items-center ">
            {' '}
            <icons.search className="absolute right-2 rounded-full" />
          </div>
        </div>
        <div className="toggle relative z-10 flex  gap-5">
          <div
            className="flex "
            onClick={() => {
              setOnTarget2(!onTarget2);
            }}
          >
            <icons.user className="text-lg" />
            {/* <icons.angleDown /> */}
            {!onTarget2 ? (
              <icons.angleDown className="text-lg" />
            ) : (
              <icons.angleUp className="text-lg" />
            )}
            {/* {onTarget2 && <icons.angleUp />} */}
          </div>
          {onTarget2 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={dropDivAnimVariants}
            >
              <Dropdown className="absolute right-20 top-5 h-24 w-48">
                <Button className="w-full bg-primary-black py-3 px-2  text-white">
                  My Account
                </Button>
                <Button className="w-full bg-slate-200 py-3 px-2  text-black">
                  Logout
                </Button>
              </Dropdown>
            </motion.div>
          )}
          <icons.cart
            className="text-lg"
            onClick={() => {
              setOnTarget3(!onTarget3);
            }}
          />
          {onTarget3 && (
            <motion.div
              initial="hidden"
              animate="visible"
              variants={dropDivAnimVariants}
            >
              <Dropdown className="absolute top-5 -left-20 w-72">
                <DropCartItem
                  image={images.headset}
                  icons={icons}
                  Button={Button}
                />
                <div className="bg-[#F0F0F0]">
                  <div className="py-2">
                    <p className="px-3 text-[#767676]">
                      Subtotal:
                      <strong className="ml-1 text-black">$44.44</strong>
                    </p>
                  </div>
                  <div className="flex justify-around gap-4 p-3">
                    <Link to="/cart">
                      <Button className="w-full bg-slate-200 py-3 px-2  text-black">
                        View Cart
                      </Button>
                    </Link>
                    <Link to="/checkout">
                      <Button className="w-full bg-primary-black py-3 px-2  text-white">
                        Checkout
                      </Button>
                    </Link>
                  </div>
                </div>
              </Dropdown>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
// Coded by ishraque

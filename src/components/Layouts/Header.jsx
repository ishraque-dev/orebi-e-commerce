import React from 'react';
import { logo } from '../../assets';
import { links as navItems, icons } from '../../assets/constants';
import { NavBar, Image } from '../index.js';
import { Dropdown } from '../../components';
import useDomElement from '../../hooks/useDomElement';

const Header = () => {
  const [onTarget, setOnTarget] = useDomElement();
  return (
    <div className="max-w-container mx-auto font-dm">
      <NavBar logo={logo} Image={Image} navItems={navItems} />
      <div className="flex justify-between items-center p-5 flex-wrap">
        <div
          className="flex items-center gap-3 toggle"
          onClick={() => setOnTarget(!onTarget)}
        >
          <icons.catBar className="cursor-pointer " />
          <Dropdown className="flex flex-col dropdown">
            <p>Shop by Category</p>
            {onTarget && (
              <div>
                <h2>hello</h2>
                <h2>hello</h2>
                <h2>hello</h2>
              </div>
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

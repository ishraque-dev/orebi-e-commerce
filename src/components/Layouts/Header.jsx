import React from 'react';
import { logo } from '../../assets';
import { links as navItems } from '../../assets/constants';

import { NavBar, Image } from '../index.js';

const Header = () => {
  return (
    <div className="max-w-container mx-auto">
      <NavBar logo={logo} Image={Image} navItems={navItems} />
    </div>
  );
};

export default Header;

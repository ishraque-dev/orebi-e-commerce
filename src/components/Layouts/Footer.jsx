import React from 'react';
import { help, category, links } from '../../assets/constants';
import { Image } from '../../components';
import { logo } from '../../assets';
function Footer() {
  return (
    <div className="mx-auto mb-10 mt-20 max-w-container lg:mt-[200px]">
      <div className="flex flex-wrap justify-center">
        <div className="w-[150px] md:w-[200px]">
          <h3 className="mb-5 font-dm text-xl font-bold lg:mb-10">Menu</h3>
          <ul>
            {links.map((link) => (
              <li className="mb-3 font-dm text-sm font-medium text-[#6D6D6D]">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[150px] md:w-[200px]">
          <h3 className="mb-5 font-dm text-xl font-bold lg:mb-10">Shop</h3>
          <ul>
            {category.map((link) => (
              <li className="mb-3 font-dm text-sm font-medium  text-[#6D6D6D]">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[150px] md:w-[200px]">
          <h3 className="mb-5 font-dm text-xl font-bold lg:mb-10">Help</h3>
          <ul>
            {help.map((link) => (
              <li className="mb-3 font-dm text-sm font-medium  text-[#6D6D6D]">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className=" mt-5 w-[150px] md:mt-0 md:w-[200px] ">
          <h3 className=" mb-5 font-dm text-xl font-bold lg:mb-10">Contact</h3>
          <h4 className=" mb-10 font-dm text-sm font-medium  text-[#6D6D6D] ">
            (052) 611-5711 company@domain.com
          </h4>
        </div>
        <div className="mt-5 flex flex-col items-center justify-end">
          <div>
            <Image src={logo} className="mb-3" />
          </div>
          <div>
            <p className="text-sm text-[#6D6D6D]">
              2020 Orebi Minimal eCommerce Figma
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Footer;

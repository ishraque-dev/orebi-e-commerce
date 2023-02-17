import React from 'react';
import { help, category, links } from '../../assets/constants';
import { Image } from '../UI';
import { logo } from '../../assets';
function Footer() {
  return (
    <div className="mt-20   bg-[#232F3E] px-4 py-6 lg:mt-[200px]  ">
      <div className="flex flex-wrap justify-between lg:justify-around">
        <div className="w-[150px] md:w-[200px]">
          <h3 className="mb-5 font-dm text-xl font-bold text-white lg:mb-10">
            Menu
          </h3>
          <ul>
            {links.map((link) => (
              <li className="mb-1 cursor-pointer font-dm text-sm font-medium text-white lg:mb-3">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[150px] md:w-[200px]">
          <h3 className="mb-5 font-dm text-xl font-bold text-white lg:mb-10">
            Shop
          </h3>
          <ul>
            {category.map((link) => (
              <li className="mb-1 cursor-pointer font-dm text-sm font-medium text-white lg:mb-3">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[150px] md:w-[200px]">
          <h3 className="mb-5 font-dm text-xl font-bold text-white lg:mb-10">
            Help
          </h3>
          <ul>
            {help.map((link) => (
              <li className="mb-1 cursor-pointer font-dm text-sm font-medium  text-white lg:mb-3">
                {link.name}
              </li>
            ))}
          </ul>
        </div>

        <div className=" flex flex-col items-center justify-between">
          <div>
            <h3 className=" mt-3 mb-2 font-dm text-xl font-bold text-white lg:mt-0 lg:mb-10">
              Contact
            </h3>
            <h4 className=" mb-10 font-dm text-sm  font-medium text-white ">
              (052) 611-5711 company@domain.com
            </h4>
          </div>

          <div className="">
            <div className="mb-3 flex h-6 w-20 items-center justify-center rounded-md bg-white ">
              <Image src={logo} className="" />
            </div>
            <p className="text-sm text-white">
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

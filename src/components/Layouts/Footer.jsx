import React from 'react';
import { help, category, links } from '../../assets/constants';
import { Image } from '../../components';
import { logo } from '../../assets';
function Footer() {
  return (
    <div className="mx-auto mb-10 mt-[200px] max-w-container">
      <div className="flex">
        <div className="w-[15%]">
          <h3 className="mb-10 font-dm text-xl font-bold">Menu</h3>
          <ul>
            {links.map((link) => (
              <li className="mb-3 font-dm text-sm font-medium text-[#6D6D6D]">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[15%]">
          <h3 className="mb-10 font-dm text-xl font-bold">Shop</h3>
          <ul>
            {category.map((link) => (
              <li className="mb-3 font-dm text-sm font-medium  text-[#6D6D6D]">
                {link}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[15%]">
          <h3 className="mb-10 font-dm text-xl font-bold">Help</h3>
          <ul>
            {help.map((link) => (
              <li className="mb-3 font-dm text-sm font-medium  text-[#6D6D6D]">
                {link.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-[25%]">
          <h3 className=" font-dm text-xl font-bold">(052) 611-5711</h3>
          <h4 className=" mb-10 font-dm text-base font-bold ">
            company@domain.com
          </h4>
        </div>
        <div className="flex w-[20%] flex-col items-center justify-between">
          <div>
            <Image src={logo} />
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

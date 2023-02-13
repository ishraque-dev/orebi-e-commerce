import React from 'react';
import { Image } from '../index';

export default function DropCartItem({ image, icons, Button }) {
  return (
    <div>
      <div className="flex items-center justify-around rounded-t-md bg-[#F5F5F3]">
        <Image src={image} className="w-[100px]" />
        <div className="">
          <p className="break-normal font-bold">Headset</p>
          <h3 className="break-normal font-bold">$44.00</h3>
        </div>
        <icons.close className="ml-5" />
      </div>
    </div>
  );
}

import React from 'react';
import { Heading, Product } from '../index';
import { images } from '../../assets/constants';
function Offers() {
  return (
    <div className="mx-auto mb-5 mt-10 max-w-container">
      <Heading title="Special Offers" />

      <div className="mt-5 flex flex-wrap justify-center gap-2">
        <div className="w-[300px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[300px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[300px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[300px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[300px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
      </div>
    </div>
  );
}

export default Offers;

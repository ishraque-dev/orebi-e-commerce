import React from 'react';
import { Heading, Product } from '../UI';
import { images } from '../../assets/constants';
function Offers() {
  return (
    <div className="mx-auto mb-5 mt-10 max-w-container px-2 lg:px-3">
      <Heading title="Special Offers" />

      <div className="mt-5 flex flex-wrap justify-center gap-2 lg:justify-start">
        <div className="w-[230px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[230px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[230px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[230px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
        <div className="w-[230px]">
          <Product image={images.product} badge={true} badgeSlag="New" />
        </div>
      </div>
    </div>
  );
}

export default Offers;

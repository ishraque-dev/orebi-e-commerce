import React, { useState } from 'react';
import { Heading, Breadcrumb, Pagination } from '../components';
import usePageTitle from '../hooks/usePageTitle';

function Shop() {
  usePageTitle('Products');
  const [pageDetails, setPageDetails] = useState();
  const getPageDetails = function (value) {
    setPageDetails(value);
  };
  const offsetItem =
    pageDetails?.itemOffset === 0
      ? pageDetails?.itemOffset + 1
      : pageDetails?.itemOffset;
  return (
    <div className="mx-auto my-16 max-w-container">
      <Heading title="Products" />
      <Breadcrumb />
      <div className="flex gap-x-20 ">
        <div className="w-[25%] bg-red-500"></div>
        <div className="relative w-[75%]  ">
          {' '}
          <Pagination itemsPerPage={12} setPageDetails={getPageDetails} />
          <p className="font-regular text-[#Products from 1 to 12 of 80] absolute bottom-0 right-0 font-dm text-sm">
            {`Products from ${offsetItem} to ${pageDetails?.endOffset} of ${pageDetails?.itemsLength}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shop;

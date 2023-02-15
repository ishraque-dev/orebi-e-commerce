import React, { useState } from 'react';
import { SelectOption, Heading, Breadcrumb } from '../components/UI';
import { Pagination, ShopSideBar } from '../components/Shop';
import usePageTitle from '../hooks/usePageTitle';

function Shop() {
  usePageTitle('Products');
  const [pageDetails, setPageDetails] = useState();
  const [showItemsPerPage, setShowItemsPerPage] = useState(12);
  const getPageDetails = function (value) {
    setPageDetails(value);
  };
  const offsetItem =
    pageDetails?.itemOffset === 0
      ? pageDetails?.itemOffset + 1
      : pageDetails?.itemOffset;
  const handleItemsPerPage = function (e) {
    setShowItemsPerPage(e.target.value * 1);
  };
  return (
    <div className="mx-auto my-16 max-w-container">
      <Heading title="Products" />
      <Breadcrumb />
      <div className="flex lg:gap-x-20 ">
        <div className="w-[25%] bg-red-500">
          <ShopSideBar/>
        </div>
        <div className="relative w-[75%]  ">
          <div className="flex w-full items-center justify-end gap-3 lg:mb-5">
            <small className="fon-dm font-medium text-[#767676]">
              Sort by:
            </small>
            <SelectOption optionValues={['Featured', 'item2', 'item3']} />
            <small className="fon-dm font-medium text-[#767676]">Show:</small>
            <SelectOption
              onChange={handleItemsPerPage}
              optionValues={[12, 24, 48]}
            />
          </div>
          <Pagination
            itemsPerPage={showItemsPerPage}
            setPageDetails={getPageDetails}
          />
          <p className="font-regular bottom-0 font-dm text-sm md:absolute md:right-0">
            {`Products from ${offsetItem} to ${pageDetails?.endOffset} of ${pageDetails?.itemsLength}`}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Shop;

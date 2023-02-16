import React, { useState } from 'react';
import { SelectOption, Heading, Breadcrumb } from '../components/UI';
import { icons } from '../assets/constants';
import { Pagination, ShopSideBar } from '../components/Shop';
import usePageTitle from '../hooks/usePageTitle';
import useWindowResize from '../hooks/useWindowResize';
function Shop() {
  const [activeMenu, setActiveMenu] = useWindowResize();
  console.log(activeMenu);
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
    <>
      <div className="mx-auto my-16 max-w-container">
        <div className="">
          <Heading title="Products" />
          {/* {activeMenu && <Breadcrumb className="mt-3" />} */}
        </div>
        <div className="flex justify-between gap-x-2 lg:gap-x-20  ">
          <div
            className={`z-10 mt-4 flex flex-col items-start  justify-start  ${
              !activeMenu ? 'w-[25%]' : 'w-4'
            }px-3`}
          >
            <div className="mx-3 block cursor-pointer rounded-full  p-1 duration-300 ease-in-out hover:bg-gray-200 md:hidden">
              <icons.slide onClick={() => setActiveMenu(!activeMenu)} />
            </div>
            {activeMenu && <ShopSideBar />}
          </div>
          <div className="relative mt-4 w-[100%] md:mt-1 md:w-[75%] ">
            <div className="mb-5 hidden w-[93%] items-center justify-start gap-3 md:flex md:justify-end">
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
    </>
  );
}

export default Shop;

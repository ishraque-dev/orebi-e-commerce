import { React, useEffect, useState } from 'react';

import { images } from '../../assets/constants';
import { Product } from '../UI';
import ReactPaginate from 'react-paginate';
const items = [...Array(77).keys()]; //WILL REPLACED with products array
function Items({ currentItems }) {
  return (
    <div className="flex flex-wrap ">
      {currentItems &&
        currentItems.map((item) => (
          <div className="mb-3 w-full sm:w-[25%] md:w-[20%] ">
            <Product
              image={images.product}
              badge={false}
              badgeSlag="New"
              name={item + 1}
            />
          </div>
        ))}
    </div>
  );
}
export default function ({ itemsPerPage, setPageDetails }) {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    setPageDetails({
      // this will store the current data in the parent component(lifting the state up)
      itemOffset,
      endOffset,
      itemsLength: items.length,
    });
    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />

      <ReactPaginate
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={2}
        pageCount={pageCount}
        previousLabel=""
        pageClassName="page-item"
        pageLinkClassName="inline-block border border-solid border-[#D8D8D8] py-2 px-3 font-dm font-regular text-sm "
        previousClassName="hidden"
        previousLinkClassName="page-link"
        nextClassName="hidden"
        nextLinkClassName="page-link"
        breakLabel="..."
        breakClassName="page-item"
        breakLinkClassName="page-link"
        containerClassName="flex gap-x-5 mt-10 flex-wrap gap-y-3.5 md:gap-y-"
        activeClassName="bg-black text-white"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

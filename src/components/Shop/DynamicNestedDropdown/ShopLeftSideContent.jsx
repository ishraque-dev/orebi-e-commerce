import React, { useState } from 'react';
import { icons } from '../../../assets/constants';
import CatItem from './CatItem';
function ShopLeftSideContent({
  dropdown,
  className,
  categoryItems,
  colorItems,
  brandItems,
  subCategory,
}) {
  const [show, setShow] = useState(false);

  return (
    <div className={className}>
      {dropdown ? (
        <div>
          <div
            className="flex items-center justify-between"
            onClick={() => setShow(!show)}
          >
            <h3>Shop by Dropdown</h3>
            {!show ? <icons.angleDown /> : <icons.angleUp />}
          </div>

          {show && (
            <div>
              {[...Array(colorItems).keys()].map((item) => (
                <CatItem subCategory={false} dropdown={dropdown} />
              ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between">
            <h3>I don't have any dropdown </h3>
          </div>
          <div className="bg-blue-500">
            {categoryItems &&
              categoryItems.map((item) => (
                <CatItem
                  subCategory={item.subCategory ? true : false}
                  item={item}
                />
              ))}
            {brandItems &&
              [...Array(brandItems).keys()].map((item) => (
                <CatItem subCategory={subCategory} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopLeftSideContent;

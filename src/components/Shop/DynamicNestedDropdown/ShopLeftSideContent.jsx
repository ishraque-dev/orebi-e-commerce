import React, { useState } from 'react';
import { icons } from '../../../assets/constants';
import CatItem from './CatItem';
function ShopLeftSideContent({
  dropdown,
  className,
  categoryItems,
  colorItems,
  priceRange,
  subCategory,
  brandItems,
  title,
}) {
  const [show, setShow] = useState(true);

  return (
    <div className={className}>
      {dropdown ? (
        <div>
          <div
            className="flex items-center justify-between"
            onClick={() => setShow(!show)}
          >
            {colorItems && (
              <h3 className="font-dm text-sm font-medium md:text-xl">
                By Colors
              </h3>
            )}
            {brandItems && (
              <h3 className="font-dm text-sm font-medium md:text-xl">
                By Brands
              </h3>
            )}
            {!show ? (
              <icons.angleDown className="text-[#767676]" />
            ) : (
              <icons.angleUp />
            )}
          </div>

          {show && (
            <div>
              {colorItems &&
                colorItems.map((item) => (
                  <CatItem
                    subCategory={false}
                    dropdown={dropdown}
                    item={item}
                  />
                ))}
              {brandItems &&
                brandItems.map((item) => (
                  <CatItem
                    subCategory={false}
                    dropdown={dropdown}
                    item={item}
                  />
                ))}
            </div>
          )}
        </div>
      ) : (
        <div>
          <div className="flex items-center justify-between ">
            {categoryItems ? (
              <h3 className="font-dm text-sm font-medium md:text-xl">
                By Category{' '}
              </h3>
            ) : (
              <h3 className="font-dm text-sm font-medium md:text-xl">
                By Price{' '}
              </h3>
            )}
          </div>
          <div className="">
            {categoryItems &&
              categoryItems.map((item) => (
                <CatItem
                  subCategory={item.subCategory ? true : false}
                  item={item}
                />
              ))}
            {priceRange &&
              priceRange.map((item) => (
                <CatItem subCategory={subCategory} item={item} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ShopLeftSideContent;

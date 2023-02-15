import React, { useState } from 'react';
import { icons } from '../../../assets/constants';
import SubCategory from './SubCategory';
function CatItem({ subCategory, item }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {subCategory ? (
        <div
          onClick={() => {
            setShow(!show);
          }}
        >
          <div className="flex items-center justify-between">
            <h4>{item.name}</h4>
            <icons.plus />
          </div>
          {show && item.subCategory.map((item) => <SubCategory item={item} />)}
        </div>
      ) : (
        <div>
          <h4>Im a cat Item without a sub category</h4>
        </div>
      )}
    </>
  );
}

export default CatItem;

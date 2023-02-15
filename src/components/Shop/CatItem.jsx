import React, { useState } from 'react';
import { icons } from '../../assets/constants';
import SubCategory from './SubCategory';
function CatItem({ subCategory }) {
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
            <h4>Im a Item with a sub category</h4>
            <icons.plus />
          </div>
          {show && <SubCategory item="Im a sub category item" />}
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

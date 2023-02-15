import React from 'react';
import ShopLeftSideContent from './ShopLeftSideContent';
function ShopSideBar() {
  return (
    <div>
      <ShopLeftSideContent
        dropdown={false}
        className="bg-green-500"
        categoryItems={9}
        subCategory={true}
      />
      <ShopLeftSideContent
        dropdown={true}
        className="bg-yellow-500"
        colorItems={5}
      />
      <ShopLeftSideContent
        dropdown={true}
        className="bg-yellow-500"
        colorItems={7}
      />
      <ShopLeftSideContent
        dropdown={false}
        className="bg-gray-500"
        brandItems={8}
        subCategory={false}
      />
    </div>
  );
}

export default ShopSideBar;

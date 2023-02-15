import React from 'react';
import ShopLeftSideContent from './ShopLeftSideContent';
function ShopSideBar() {
  const categoryItems = [
    {
      name: 'item1',
      subCategory: [
        {
          name: 'subItem1',
        },
        {
          name: 'subItem2',
        },
        {
          name: 'subItem3',
        },
      ],
    },
    {
      name: 'item2',
      subCategory: [
        {
          name: 'subItem2',
        },
      ],
    },
    {
      name: 'item3',
      subCategory: false,
    },
    {
      name: 'item4',
      subCategory: [
        {
          name: 'subItem3',
        },
      ],
    },
  ];
  return (
    <div>
      <ShopLeftSideContent
        dropdown={false}
        className="bg-green-500"
        categoryItems={categoryItems}
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

import React from 'react';
import ShopLeftSideContent from './ShopLeftSideContent';
import { motion } from 'framer-motion';
function ShopSideBar() {
  // DUMMY
  const categoryItems = [
    {
      name: 'item1',
      type: 'category',
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
      type: 'category',
      subCategory: [
        {
          name: 'subItem2',
        },
      ],
    },
    {
      name: 'item3',
      type: 'category',
      subCategory: false,
    },
    {
      name: 'item4',
      type: 'category',
      subCategory: [
        {
          name: 'subItem3',
        },
      ],
    },
  ];
  const colors = [
    {
      name: 'black',
      type: 'color',
    },
    {
      name: 'blue',
      type: 'color',
    },
    {
      name: 'green',
      type: 'color',
    },
    {
      name: 'yellow',
      type: 'color',
    },
    {
      name: 'white',
      type: 'color',
    },
    {
      name: 'purple',
      type: 'color',
    },
  ];
  const brands = [
    {
      name: 'Brand 1',
      type: 'brand',
    },
    {
      name: 'Brand 2',
      type: 'brand',
    },
    {
      name: 'Brand 3',
      type: 'brand',
    },
    {
      name: 'Brand 4',
      type: 'brand',
    },
    {
      name: 'Brand 5',
      type: 'brand',
    },
  ];
  const priceRange = [
    {
      name: '$0.00 - $9.99',
      type: 'price',
    },
    {
      name: '$10.00 - $19.99',
      type: 'price',
    },
    {
      name: '$20.00 - $29.99',
      type: 'price',
    },
    {
      name: '$30.00 - $39.99',
      type: 'price',
    },
    {
      name: '$40.00 - $69.99',
      type: 'price',
    },
  ];
  return (
    <div className="animate-slideleft transition-all">
      <ShopLeftSideContent
        dropdown={false}
        className="my-5 px-5 md:px-0"
        categoryItems={categoryItems}
        subCategory={true}
        title="This is new Title"
      />
      <ShopLeftSideContent
        dropdown={true}
        colorItems={colors}
        className="my-5 px-5 md:px-0"
      />
      <ShopLeftSideContent
        dropdown={true}
        brandItems={brands}
        className="my-5 px-5 md:px-0"
      />
      <ShopLeftSideContent
        className="my-5 px-5 md:px-0"
        dropdown={false}
        priceRange={priceRange}
        subCategory={false}
      />
    </div>
  );
}

export default ShopSideBar;

import React, { useState } from 'react';
import { icons } from '../../../assets/constants';
import SubCategory from './SubCategory';
function CatItem({ subCategory, item }) {
  const [show, setShow] = useState(false);
  return (
    <>
      {subCategory ? (
        <div
          className="border-b border-solid"
          onClick={() => {
            setShow(!show);
          }}
        >
          <div className="flex items-center justify-between p-3">
            <h4 className="font-dm text-[#767676]">{item.name}</h4>
            <icons.plus className="text-[#767676]" />
          </div>
          {show && item.subCategory.map((item) => <SubCategory item={item} />)}
        </div>
      ) : (
        <div className="border-b border-solid p-3">
          {item.type === 'color' ? (
            <div className="flex items-center">
              <div
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '100%',
                  backgroundColor: item.name,
                  marginRight: '5px',
                  border: '1px solid black',
                }}
              ></div>
              <h4 className="font-dm text-[#767676]">
                {item.name[0].toUpperCase() + item.name.slice(1)}
              </h4>
            </div>
          ) : (
            <h4 className="font-dm text-[#767676]">{item.name}</h4>
          )}
        </div>
      )}
    </>
  );
}

export default CatItem;

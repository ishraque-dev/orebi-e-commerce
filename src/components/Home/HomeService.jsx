import React from 'react';
import { icons } from '../../assets/constants';
function HomeService() {
  const content = [
    {
      icon: icons.number2,
      description: 'Two years warranty',
    },
    {
      icon: icons.truck,
      description: 'Free shipping',
    },
    {
      icon: icons.return,
      description: 'Return policy in 30 days',
    },
  ];

  return (
    <div className="mb-10 mt-10  bg-[#232F3E] shadow-customShadow md:mt-20 lg:mb-20">
      <div className="mx-auto max-w-container">
        <div className="flex justify-between py-2 px-3 lg:py-2">
          {content.map((contentItem) => {
            return (
              <div className="flex flex-col items-center justify-center gap-2 lg:flex-row ">
                <contentItem.icon className="text-[12px] text-white lg:text-xl" />
                <p className="text-[12px] text-white lg:px-2 lg:text-xl">
                  {' '}
                  {contentItem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default HomeService;

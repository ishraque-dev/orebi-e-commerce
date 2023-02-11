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
    <div className="mb-5 bg-[#232F3E] shadow-customShadow lg:mb-10">
      <div className="mx-auto max-w-container">
        <div className="flex justify-between py-2 px-3 lg:py-2">
          {content.map((contentItem) => {
            return (
              <div className="flex flex-col items-center justify-center gap-2 lg:flex-row ">
                <contentItem.icon className="text-[12px] text-white lg:text-xl" />
                <p className="px-2 text-[12px] text-white lg:text-xl">
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

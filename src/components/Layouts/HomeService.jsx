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
    <div className="mt-[-6px] shadow-customShadow">
      <div className="mx-auto max-w-container">
        <div className="flex justify-between py-2 px-3 lg:py-5">
          {content.map((contentItem) => {
            return (
              <div className="flex flex-col items-center justify-center gap-2 lg:flex-row ">
                <contentItem.icon className="text-sm lg:text-xl" />
                <p className="px-2 text-[12px] text-[#6D6D6D] lg:text-xl">
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

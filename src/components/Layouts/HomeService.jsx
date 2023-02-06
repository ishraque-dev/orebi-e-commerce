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
    <div className="mx-auto max-w-container">
      <div className="flex justify-between py-5">
        {content.map((contentItem) => {
          return (
            <div className="flex items-center gap-2">
              <contentItem.icon />
              {contentItem.description}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeService;

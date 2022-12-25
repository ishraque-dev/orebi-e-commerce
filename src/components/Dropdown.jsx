import React from 'react';
const Dropdown = ({ children, className, DropRef }) => {
  return (
    <div className={className} ref={DropRef}>
      {children}
    </div>
  );
};

export default Dropdown;

import React from 'react';

function Dropdown({ children, className, DropRef }) {
  return (
    <div className={className} ref={DropRef}>
      {children}
    </div>
  );
}

export default Dropdown;

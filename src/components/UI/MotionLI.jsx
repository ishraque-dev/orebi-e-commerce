import React, { useRef, useEffect } from 'react';

import { motion } from 'framer-motion';
import { dropdownLiAnimVariant } from '../../assets/constants';

function MotionLI({
  children,
  className,
  onClick,
  key,
  role,
  ariaPressed,
  tabIndex,
  onKeyPress,
  // LiRef,
}) {
  return (
    <motion.div
      className={className}
      onClick={onClick}
      variants={dropdownLiAnimVariant}
      whileTap={{ scale: 0.9 }}
      key={key}
      role={role}
      aria-pressed={ariaPressed}
      tabIndex={tabIndex}
      onKeyPress={onKeyPress}
      // ref={LiRef}
    >
      {children}
    </motion.div>
  );
}

export default MotionLI;

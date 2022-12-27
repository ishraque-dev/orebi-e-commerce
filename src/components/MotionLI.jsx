import React from 'react';
import { dropdownLiAnimVariant } from '../assets/constants';
import { motion } from 'framer-motion';
const MotionLI = ({
  children,
  className,
  onClick,
  key,
  role,
  ariaPressed,
  tabIndex,
  onKeyPress,
}) => {
  return (
    <motion.li
      className={className}
      onClick={onClick}
      variants={dropdownLiAnimVariant}
      whileTap={{ scale: 0.9 }}
      key={key}
      role={role}
      aria-pressed={ariaPressed}
      tabIndex={tabIndex}
      onKeyPress={onKeyPress}
    >
      {children}
    </motion.li>
  );
};

export default MotionLI;

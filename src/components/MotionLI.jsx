import React from 'react';
import { dropdownLiAnimVariant } from '../assets/constants';
import { motion } from 'framer-motion';
const MotionLI = ({ children, className, onClick, key }) => {
  return (
    <motion.li
      className={className}
      onClick={onClick}
      variants={dropdownLiAnimVariant}
      whileTap={{ scale: 0.9 }}
      key={key}
    >
      {children}
    </motion.li>
  );
};

export default MotionLI;

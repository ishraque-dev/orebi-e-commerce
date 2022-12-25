import React from 'react';
import {dropdownLiAnimVariant} from '../assets/constants'
import { motion } from 'framer-motion';
const MotionLI = ({ children, className, onClick }) => {
  return (
    <motion.li
      className={className}
      onClick={onClick}
      variants={dropdownLiAnimVariant}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.li>
  );
};

export default MotionLI;

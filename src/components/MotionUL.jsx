import React from 'react';
import { motion } from 'framer-motion';
const MotionUL = ({ className, variants, children }) => {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      className={className}
      variants={variants}
    >
      {children}
    </motion.ul>
  );
};

export default MotionUL;

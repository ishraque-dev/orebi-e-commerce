import React from 'react';
import { motion } from 'framer-motion';

function MotionUL({ className, variants, children }) {
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
}

export default MotionUL;

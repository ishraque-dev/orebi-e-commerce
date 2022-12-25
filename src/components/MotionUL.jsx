import React from 'react';
import { motion } from 'framer-motion';
const MotionUL = ({ className, variants, children }) => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className={className}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default MotionUL;

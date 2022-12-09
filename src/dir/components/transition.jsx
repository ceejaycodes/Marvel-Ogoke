import { motion } from 'framer-motion';
import React from 'react';

const animationConfiguration = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
};

export default function Transition( { children }) {
  return (
    <motion.div
    variants={animationConfiguration}
    initial="intial"
    animate="animate"
    exit="exit"
    transition={{ duration: 3}}
    >
        {children}
    </motion.div>
  )
}

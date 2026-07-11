"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 40, once = true, className }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      viewport={{ once, amount: 0.2 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      {children}
    </motion.div>
  );
}
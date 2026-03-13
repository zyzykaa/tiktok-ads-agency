import React from 'react';
import { motion, HTMLMotionProps } from 'motion/react';

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
}

export const FadeIn = ({ children, delay = 0, className = "", ...props }: FadeInProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

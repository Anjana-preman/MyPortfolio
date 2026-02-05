import { motion } from "framer-motion";
import { ReactNode } from "react";

interface FloatingIconProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

const FloatingIcon = ({ children, delay = 0, duration = 3, className = "" }: FloatingIconProps) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {children}
    </motion.div>
  );
};

export default FloatingIcon;

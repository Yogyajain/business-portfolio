"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const rippleVariants = {
  initial: { scale: 0, opacity: 1 },
  animate: {
    scale: 50, // Expands to cover the screen
    opacity: 0.8,
    transition: { duration: 0.8, ease: "easeOut" },
  },
  exit: { opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } },
};

const RippleTransition = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const [ripple, setRipple] = useState(false);

  useEffect(() => {
    setRipple(true);
    const timeout = setTimeout(() => setRipple(false), 800); // Reset after animation
    return () => clearTimeout(timeout);
  }, [pathname]); // Runs on every route change

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {ripple && (
        <motion.div
          variants={rippleVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute top-1/2 left-1/2 w-full h-full bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
        />
      )}
      <div className="relative z-40">{children}</div>
    </div>
  );
};

export default RippleTransition;

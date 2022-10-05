import React from "react";
import { motion, AnimatePresence } from "framer-motion";

function AnimateHeight({ children }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "auto" }}
        exit={{ height: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className="overflow-hidden"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

export default AnimateHeight;

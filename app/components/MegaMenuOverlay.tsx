"use client";

import React from "react";
import { useMegaMenu } from "../contexts/MegaMenuContext";
import { motion, AnimatePresence } from "framer-motion";

const MegaMenuOverlay = () => {
  const { isOverlayActive } = useMegaMenu();

  return (
    <AnimatePresence>
      {isOverlayActive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 bg-black/20 backdrop-blur-lg z-30 pointer-events-none"
        />
      )}
    </AnimatePresence>
  );
};

export default MegaMenuOverlay;
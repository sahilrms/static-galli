"use client";

import { motion } from "framer-motion";

export default function FloatingSticker({
  text,
  top,
  left
}) {

  return (
    <motion.div
      animate={{
        y: [0, -15, 0]
      }}
      transition={{
        repeat: Infinity,
        duration: 3
      }}
      style={{
        top,
        left
      }}
      className="
      hidden
      lg:block
      absolute
      z-20
      "
    >

      <div
        className="
        bg-yellow-400
        text-black
        px-4
        py-3
        rounded-xl
        font-bold
        rotate-[-8deg]
        shadow-xl
        "
      >
        {text}
      </div>

    </motion.div>
  );
}
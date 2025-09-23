import React from "react";
import { IoIosReturnRight } from "react-icons/io";
import { motion } from "framer-motion";

function Button({ text }) {
  return (
    <motion.div
      className="w-32 h-10 px-3 py-2 bg-zinc-100 text-black rounded-full flex justify-center items-center overflow-hidden relative"
      whileHover="hover"
      initial="initial"
    >
      <motion.div
        className="absolute flex items-center gap-2"
        variants={{
          initial: { y: 0 },
          hover: { y: 100 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span className="text-sm font-medium">{text}</span>
        <IoIosReturnRight />
      </motion.div>

      <motion.div
        className="absolute flex items-center gap-2"
        variants={{
          initial: { y: -100 },
          hover: { y: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <span className="text-sm font-medium">{text}</span>
        <IoIosReturnRight />
      </motion.div>
    </motion.div>
  );
}

export default Button;

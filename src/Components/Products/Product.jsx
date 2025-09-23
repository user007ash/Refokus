import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../Button/Button";

function Product({ val, count, mover }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-[20rem] text-white relative" // Added 'relative' for button positioning
      whileHover={{ background: val.gradient }}
      transition={{ duration: 1.5, ease: [0.42, 0, 0.58, 1] }}
      onMouseEnter={() => {
        setIsHovered(true);
        mover(count);
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-screen-xl mx-auto py-20 flex items-center justify-between px-8">
        <h1 className="text-5xl capitalize font-semibold">{val.title}</h1>
        <div className="w-1/3">
          <p className="mb-8">{val.description}</p>
          {isHovered && (
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
          >
           {val.live && <Button text={"Get Started"} />}
           {val.case && <Button text={"Case Study"} />} 
          </motion.div>
        )}
        </div>
      </div>

    </motion.div>
  );
}

export default Product;

import React, { useState, useMemo, useCallback } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

function Work() {
  // Memoize the initial images array to avoid recreating it on every render
  // useMemo hook is used to memorize the initial images array
  // useMemo and useCallback only let the re-rendering happen whenever there is a change in state; if there is no change in state, it remains the same
  const initialImages = useMemo(() => [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png",
      top: "50%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png",
      top: "45%",
      left: "56%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",
      top: "43%",
      left: "40%",
      isActive: false,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",
      top: "65%",
      left: "55%",
      isActive: false,
    },
  ], []);

  const [images, setImages] = useState(initialImages);

  const { scrollYProgress } = useScroll();

  // Memoize the updateImages function to ensure it remains stable across renders
  const updateImages = useCallback((array) => {
    setImages((prev) =>
      prev.map((item, index) => ({
        ...item,
        isActive: array.includes(index),
        // Returns the boolean value true if index is present in the array, otherwise false
      }))
    );
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const scrollval = Math.floor(latest * 100);
    switch (scrollval) {
      case 0:
        updateImages([]);
        break;
      case 1:
        updateImages([0]);
        break;
      case 2:
        updateImages([0, 1]);
        break;
      case 4:
        updateImages([0, 1, 2]);
        break;
      case 6:
        updateImages([0, 1, 2, 3]);
        break;
      case 8:
        updateImages([0, 1, 2, 3, 4]);
        break;
      case 10:
        updateImages([0, 1, 2, 3, 4, 5]);
        break;
      default:
        break;
    }
  });

  return (
    <div className="w-full mt-10">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] leading-none font-medium select-none">
          work
        </h1>
        <div className="absolute top-0 w-full h-full">
          {images.map(
            (image, index) =>
              image.isActive && (
                <img
                  className="w-60 rounded-lg absolute -translate-x-[50%] -translate-y-[50%]"
                  style={{ top: image.top, left: image.left }}
                  key={index}
                  src={image.url}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;

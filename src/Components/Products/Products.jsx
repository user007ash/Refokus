import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";
import video1 from "../Assets/video1.webm";
import video2 from "../Assets/video2.webm";
import video3 from "../Assets/video3.webm";
import video4 from "../Assets/video4.webm";

const Products = () => {
  const products = [
    {
      title: "Arqitel",
      description:
        "With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
      gradient: "linear-gradient(to right, #6b73ff, #9599e2, #bc99e2)",
      live: true,
      case: false,
    },
    {
      title: "TTR",
      description:
        "We've created an interactive site using generative AI to allow users to engage with our thinking about Ai, industry trends and design.",
      gradient: "linear-gradient(to right, #43cea2, #185a9d, #43cea2)",
      live: true,
      case: false,
    },
    {
      title: "YIR 2022",
      description:
        "Our second year was filled with great events, exciting projects, awards and amazing people - so we made another showcase to celebrate.",
      gradient: "linear-gradient(to right, #4e54c8, #8f94fb, #4e54c8)",
      live: true,
      case: true,
    },
    {
      title: "Yahoo!",
      description:
        "We enhanced the New York Fashion Week, by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen, featuring holographic 3D models and an integrated web shop.",
      gradient: "linear-gradient(to right, #ff758c, #ff7eb3, #ff8c9a)",
      live: true,
      case: true,
    },
  ];
  

  const [pos, setPos] = useState(null);

  const mover = (val) => {
    setPos(val * 20);
  };

  return (
    <div
      onMouseLeave={() => {
        setPos(null);
      }}
      className="relative"
    >
      {products.map((item, index) => (
        <Product key={index} val={item} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.6 }}
          className="window absolute w-[30rem] h-[20rem] bg-white left-[44%] overflow-hidden"
        >
          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full bg-zinc-900"
          >
            {pos === 0 && (
              <video autoPlay muted loop>
                <source src={video1} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video autoPlay muted loop>
              <source src={video2} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full"
          >
            <video autoPlay muted loop>
              <source src={video3} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          <motion.div
            animate={{ y: -pos + `rem` }}
            transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
            className=" w-full h-full "
          >
            <video autoPlay muted loop>
              <source src={video4} type="video/webm" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Products;

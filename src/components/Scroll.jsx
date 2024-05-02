import React, { useRef } from "react";

import { motion, useScroll, useTransform } from "framer-motion";

const Scroll = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [
      "0%",
      "-50%",
      "-60%",
      "-70%",
      "-60%",
      "-60%",
      "-60%",
      "-60%",
      "-60%",
      "-100%",
    ]
  );
  return (
    <div ref={targetRef} className="w-full pt-[250px] overflow-x-hidden">
      <motion.div style={{ x }} className="flex gap-4">
        <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
        <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
        <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
        <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
        <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
        <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
      </motion.div>
    </div>
  );
};

export default Scroll;

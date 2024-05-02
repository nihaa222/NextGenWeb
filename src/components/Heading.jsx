import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: { rotate: 360 },
};

const Heading = () => {
  return (
    <div className="grid grid-cols-1 max-w-[600px]  md:grid-cols-grid1 md:max-w-[1200px] mx-auto px-10 ">
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
        whileHover="hover"
      >
        <img className="h-10  w-10" src="none.png"></img>
      </motion.div> */}
      <div className="mt-20 md:flex hidden flex-col gap-28 ">
        <div className="flex flex-col items-center gap-1 justify-center">
          <img className="h-6 w-8" src="eyes.png"></img>
          <p className="text-[12px]">UI design</p>
        </div>
        <div className=" flex flex-col mr-32 items-center justify-center">
          <img className="h-8 w-10" src="star.png"></img>
          <p className="text-[12px]">Branding</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="h-10 w-10" src="star.png"></img>
          <p className="text-[12px] -mt-[2px]">App design</p>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <div className="flex items-center justify-center mt-5 gap-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1 }}
            whileHover="hover"
            className="flex items-center   gap-2 justify-center"
          >
            <img className="h-8 w-8" src="none.png"></img>
          </motion.div>
          <p className="text-[20px]   font-medium">NextGenWeb</p>
        </div>
        <p className="text-center text-[35px] md:text-[50px]  mt-16 font-medium leading-[35px] md:leading-[50px] ">
          Guaranteed: Website. 6 Figures. 90 Days. Transform. Boost. Success.
        </p>
        <p className="text-center md:text-[16px] text-[12px] text-gray-600 max-w-[450px] mx-auto">
          Power your business with the 6 Figure Website that has helped 60 Home
          Services businesses sales to seven figures
        </p>
        <div className="flex gap-2 justify-center mt-5 items-center">
          <Button
            variant="contained"
            size="small"
            sx={{
              backgroundColor: "black",
              color: "white",
              font: "bold",
              borderRadius: "60px",
            }}
          >
            Book a call
          </Button>
          <Button
            variant="outlined"
            size="small"
            sx={{
              color: "black",
              font: "semi-bold",
              borderRadius: "60px",
              borderColor: "black",
            }}
          >
            Book a call
          </Button>
        </div>
      </div>
      <div className="md:flex flex-col gap-24 hidden ">
        <div className="flex flex-col items-center gap-1 mt-20 justify-center">
          <img className="h-6 w-8" src="orangearrow.png"></img>
          <p className="text-[12px]">UI design</p>
        </div>
        <div className=" flex flex-col ml-32 items-center justify-center">
          <img className="h-10 w-10" src="cube.png"></img>
          <p className="text-[12px]">Branding</p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img className="h-10 w-10" src="pen.png"></img>
          <p className="text-[12px] ">App design</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;

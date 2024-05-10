import React, { useEffect } from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { setModelState, setCrossState } from "../redux/modelSlice";
import { useSelector } from "react-redux";
import { GiCrossedBones } from "react-icons/gi";

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  hover: { rotate: 360 },
};

const Heading = () => {
  const { open } = useSelector((state) => state.model);
  const dispatch = useDispatch();

  useEffect(() => {
    // Prevent scrolling when the modal is open
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    // Cleanup the effect
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [open]);

  return (
    <>
      {open && (
        <div
          key="model"
          className="fixed inset-0 flex justify-center items-center z-50  "
        >
          {/* <div className="w-[80vw] sm:w-[60vw] md:w-[50vw] lg:w-[40vw] xl:w-[30vw] rounded-3xl h-[420px] bg-white -mt-64"> */}
          <div className="w-[350px] rounded-3xl sm:w-[450px] h-[420px] bg-white   -mt-64">
            <button onClick={() => dispatch(setCrossState())}>
              <GiCrossedBones
                color="orange"
                className="relative left-[180px] md:left-[440px] -top-6"
              />
            </button>
            <form className="flex w-full flex-col justify-center items-center mt-36">
              <p className="mb-4 -mt-10 font-bold">Book Now!</p>
              <label className="">
                <span className="">Name</span>
                <input
                  className="border-2 border-color-gray ml-4 mb-4 px-2"
                  placeholder="Name"
                ></input>
              </label>
              <label>
                <span>Email</span>
                <input
                  className="border-2 border-color-gray ml-4 px-2"
                  placeholder="email"
                ></input>
              </label>
              <Button
                onClick={() => dispatch(setCrossState())}
                variant="contained"
                sx={{
                  backgroundColor: "rgb(255, 153, 51)",
                  color: "white",
                  font: "bold",
                  borderRadius: "60px",
                  marginTop: "20px",
                }}
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      )}

      <div className="max-w-[1400px] mx-auto flex flex-col gap-[20px] justify-center items-center px-[40px] w-full relative overflow-hidden pt-[150px] pb-[200px]">
        <div className="flex absolute top-[32px] -mt-5 z-1 items-center justify-center overflow-hidden  gap-2">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={variants}
            transition={{ duration: 1, yoyo: Infinity }}
            whileInView="hover"
            className="grid grid-cols-1 "
          >
            <img
              className="h-[31px] w-[28.89px]"
              src="none.png"
              alt="Logo"
            ></img>
          </motion.div>
          <p className="text-[30px]  font-bold ">NextGenWeb</p>
        </div>
        <div className="hidden md:flex items-center flex-col flex-nowrap gap-[10px] absolute top-[80px] left-[120px] z-1 overflow-hidden min-h-min-content">
          <img className="h-[44px] w-[37px]" src="eyes.png" alt="Eyes"></img>
          <p className="">UI design</p>
        </div>
        <div className="hidden md:flex items-center flex-col flex-nowrap gap-[10px] absolute top-[280px] left-[40px] z-1 overflow-hidden min-h-min-content">
          <img className="h-[67.74px] w-[80.59px]" src="star.png"></img>
          <p className="">Branding</p>
        </div>
        <div className="hidden md:flex items-center flex-col flex-nowrap gap-[10px] absolute top-[540px] left-[120px] z-1 overflow-hidden min-h-min-content">
          <img className="h-[50px] w-[49px]" src="clock.jpeg"></img>
          <p className=" -mt-[2px]">App design</p>
        </div>
        <div className="hidden md:flex items-center flex-col flex-nowrap gap-[10px] absolute top-[101px] right-[140px] z-1 overflow-hidden min-h-min-content">
          <img className="h-[40px] w-[33px]" src="orangearrow.png"></img>
          <p className="">UI design</p>
        </div>
        <div className="hidden md:flex items-center flex-col flex-nowrap gap-[10px] absolute top-[301px] right-[60px] z-1 overflow-hidden min-h-min-content">
          <img className="h-[60px] w-[62px]" src="cube.png"></img>
          <p className="">Branding</p>
        </div>
        <div className="hidden md:flex items-center justify-center flex-col flex-nowrap gap-[10px] absolute top-[521px] right-[140px] z-1 overflow-hidden min-h-min-content">
          <img className="h-[50px] w-10" src="pen.png"></img>
          <p className="t ">App design</p>
        </div>

        <p className="text-center overflow text-[40px] mt-0 md:mt-20 md:text-[52px] md:max-w-[700px] xl:max-w-[700px] mx-auto font-bold leading-[40px] md:leading-[50px]">
          Power Your Business With A Six Figure Website
        </p>
        <p className="text-center md:text-[18px] mb-[20px] text-[16px] text-gray-600 max-w-[450px] mx-auto">
          These websites have helped businesses scale to six figures and more
        </p>
        <Button
          onClick={() => dispatch(setModelState())}
          variant="contained"
          size="large"
          sx={{
            backgroundColor: "rgb(255, 153, 51)",
            color: "white",
            font: "bold",
            borderRadius: "60px",
          }}
        >
          Book a call
        </Button>
      </div>
      <p className="flex justify-center gap-4 self-center items-center -mt-10 ">
        <img src="none.png" className="h-4 w-4" alt="Image"></img>
        <p className="whitespace-nowrap font-bold text-[20px]">
          A Glimpse Into Our Portfolio
        </p>
        <img src="none.png" className="h-4 w-4" alt="Image"></img>
      </p>
    </>
  );
};

export default Heading;

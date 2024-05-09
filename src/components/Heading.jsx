import React from "react";
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
      {/* <div className="grid grid-cols-1 max-w-[600px] mx-auto  md:grid-cols-grid1 md:max-w-[1400px] px-2 md:px-10 "> */}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1 }}
        whileHover="hover"
      >
        <img className="h-10  w-10" src="none.png"></img>
      </motion.div> */}
      {/* <div className="mt-20 md:flex hidden flex-col gap-28 ">
          <div className="flex flex-col items-center gap-1 justify-center">
            <img className="h-[44px] w-[37px]" src="eyes.png"></img>
            <p className="">UI design</p>
          </div>
          <div className=" flex flex-col mr-32 items-center justify-center">
            <img className="h-[67.74px] w-[80.59px]" src="star.png"></img>
            <p className="">Branding</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="h-[50px] w-[49px]" src="clock.jpeg"></img>
            <p className=" -mt-[2px]">App design</p>
          </div>
        </div>
        <div className=" flex flex-col gap-5">
          <div className="flex items-center justify-center mt-5 gap-2">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1, yoyo: Infinity }}
              whileInView="hover"
              className="grid grid-cols-1"
            >
              <img className="h-[31px] w-[28.89px]" src="none.png"></img>
            </motion.div>
            <p className="text-[30px] font-bold ">NextGenWeb</p>
          </div>
          <p className="text-center text-[40px] mt-32 md:text-[52px]   font-bold leading-[40px] ml-5 md:leading-[50px] ">
            Power Your Business With A Six Figure Website
          </p>
          <p className="text-center md:text-[18px] text-[16px] text-gray-600 max-w-[450px] mx-auto">
            These websites have helped Business scaled to six figures and more
          </p>
          <div className="flex gap-2 justify-center mt-5 items-center">
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
        </div>
        <div className="md:flex flex-col gap-24 hidden ">
          <div className="flex flex-col items-center gap-1 mt-20 justify-center">
            <img className="h-[40px] w-[33px]" src="orangearrow.png"></img>
            <p className="">UI design</p>
          </div>
          <div className=" flex flex-col ml-32 items-center justify-center">
            <img className="h-[60px] w-[62px]" src="cube.png"></img>
            <p className="">Branding</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <img className="h-[50px] w-10" src="pen.png"></img>
            <p className="t ">App design</p>
          </div>
        </div>
      </div> */}

      <div className="max-w-[1400px] mx-auto flex flex-col gap-[20px] justify-center items-center px-[40px] w-full relative overflow-hidden pt-[150px] pb-[200px]">
        <div className="flex absolute top-[32px] -mt-5 z-1 items-center justify-center  gap-2">
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

        <p className="text-center text-[40px] mt-0 md:mt-20 md:text-[52px] md:max-w-[700px] xl:max-w-[700px] mx-auto font-bold leading-[40px] md:leading-[50px]">
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

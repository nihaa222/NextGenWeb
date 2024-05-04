import React, { useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import Description from "./Description";

const text = [
  {
    id: 1,
    title: "Project 1",
    text1: "This is a beautiful and wonderful project.",
    text2: "Join us in creating something amazing!",
    text3: "Experience innovation like never before.",
  },
  {
    id: 2,
    title: "Project 2",
    text1: "This project aims to revolutionize the industry.",
    text2: "Explore new possibilities with our project.",
    text3: "Join us on the journey to success.",
  },
  {
    id: 3,
    title: "Project 3",
    text1: "Join us in creating something amazing!",
    text2: "Experience innovation like never before.",
    text3: "Transform your ideas into reality.",
  },
  {
    id: 4,
    title: "Project 4",
    text1: "Our project focuses on delivering excellence.",
    text2: "Innovation is at the core of everything we do.",
    text3: "Join us and be part of our success story.",
  },
  {
    id: 5,
    title: "Project 5",
    text1: "Embark on a journey of creativity and innovation.",
    text2: "We're committed to bringing your ideas to life.",
    text3: "Together, let's make a difference.",
  },
  {
    id: 6,
    title: "Project 6",
    text1: "Discover the power of collaboration.",
    text2: "We believe in pushing boundaries and breaking barriers.",
    text3: "Join us and let's create something extraordinary.",
  },
  {
    id: 7,
    title: "Project 7",
    text1: "Transforming challenges into opportunities.",
    text2: "Innovation knows no limits.",
    text3: "Join our journey and be part of something great.",
  },
  {
    id: 8,
    title: "Project 8",
    text1: "Unlock your potential with our project.",
    text2: "Together, we can achieve greatness.",
    text3: "Join us and let's create a brighter future.",
  },
];

const Projects = ({ id }) => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  const [isHovered5, setIsHovered5] = useState(false);
  const [isHovered6, setIsHovered6] = useState(false);
  const [isHovered7, setIsHovered7] = useState(false);
  const [isHovered8, setIsHovered8] = useState(false);

  return (
    <section id={id} className=" mt-[150px] w-full">
      <div>
        <div className="flex gap-3 mb-5 justify-center mt-[200px]">
          <img className="h-4 w-4" src="none.png"></img>
          <p>Projects</p>
        </div>
        <p className="md:text-[32px] text-center mb-4 text-[22px] ">
          Featured Projects
        </p>
        <p className="mb-24 text-center">Get a glimpse of out work</p>
      </div>
      <div className="flex-col flex md:flex-row max-w-[1000px] mx-auto  ">
        <div className="flex flex-col gap-20  ">
          <div
            className="relative rounded-3xl h-[500px] w-[400px] sm:w-[450px] self-center mx-[20px] bg-blue-100"
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
          >
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="1.png"
              alt="Description"
            />

            {isHovered1 && (
              <motion.div className="absolute inset-0 flex  justify-center  ">
                <div className="absolute inset-0 rounded-3xl bg-black opacity-70"></div>
                <motion.div
                  initial={{ y: -100 }}
                  animate={{ y: 0 }}
                  className=" bg-yellow-300 rounded-b-3xl bg-opacity-70 z-50 w-full mt-64"
                >
                  <Description
                    title={text[0].title}
                    text1={text[0].text1}
                    text2={text[0].text2}
                    text3={text[0].text3}
                  />
                </motion.div>
              </motion.div>
            )}
          </div>
          <div
            className=" relative rounded-3xl h-[500px] w-[400px] sm:w-[450px] self-center mx-[20px] bg-blue-100"
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
          >
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="2.png"
            ></img>

            {isHovered2 && (
              <>
                <div className="absolute inset-0 flex  justify-center z-100  ">
                  <div className="absolute  inset-0 rounded-3xl bg-black opacity-70"></div>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className=" bg-yellow-300 rounded-b-3xl bg-opacity-70 z-50 w-full mt-64"
                  >
                    <Description
                      title={text[1].title}
                      text1={text[1].text1}
                      text2={text[1].text2}
                      text3={text[1].text3}
                    />
                  </motion.div>
                </div>
              </>
            )}
          </div>
          <div
            className=" relative rounded-3xl h-[500px] w-[400px] sm:w-[450px] self-center mx-[20px] bg-blue-100"
            onMouseEnter={() => setIsHovered3(true)}
            onMouseLeave={() => setIsHovered3(false)}
          >
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="3.png"
            ></img>
            {isHovered3 && (
              <>
                <div className="absolute inset-0 flex  justify-center z-100  ">
                  <div className="absolute  inset-0 rounded-3xl bg-black opacity-70"></div>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className=" bg-yellow-300 rounded-b-3xl bg-opacity-70 z-50 w-full mt-64"
                  >
                    <Description
                      title={text[2].title}
                      text1={text[2].text1}
                      text2={text[2].text2}
                      text3={text[2].text3}
                    />
                  </motion.div>
                </div>
              </>
            )}
          </div>
          <div
            className=" relative rounded-3xl h-[500px] w-[400px] sm:w-[450px] self-center mx-[20px] bg-blue-100"
            onMouseEnter={() => setIsHovered4(true)}
            onMouseLeave={() => setIsHovered4(false)}
          >
            <img
              className="object-cover h-full w-full rounded-3xl"
              src="4.png"
            ></img>
            {isHovered4 && (
              <>
                <div className="absolute inset-0 flex  justify-center z-100  ">
                  <div className="absolute  inset-0 rounded-3xl bg-black opacity-70"></div>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className=" bg-yellow-300 rounded-b-3xl bg-opacity-70 z-50 w-full mt-64"
                  >
                    <Description
                      title={text[3].title}
                      text1={text[3].text1}
                      text2={text[3].text2}
                      text3={text[3].text3}
                    />
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex mt-3 flex-col gap-20">
          <div
            className=" relative rounded-3xl h-[500px] w-[400px]  sm:w-[450px]  md:w-[450px] self-center mx-[20px] bg-pink-100"
            onMouseEnter={() => setIsHovered5(true)}
            onMouseLeave={() => setIsHovered5(false)}
          >
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="5.png"
            ></img>
            {isHovered5 && (
              <>
                <div className="absolute inset-0 flex  justify-center z-100  ">
                  <div className="absolute  inset-0 rounded-3xl bg-black opacity-70"></div>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className=" bg-yellow-300 rounded-b-3xl bg-opacity-70 z-50 w-full mt-64"
                  >
                    <Description
                      title={text[4].title}
                      text1={text[4].text1}
                      text2={text[4].text2}
                      text3={text[4].text3}
                    />
                  </motion.div>
                </div>
              </>
            )}
          </div>
          <div
            className=" relative rounded-3xl h-[500px] w-[400px] sm:w-[450px] md:w-[450px] self-center mx-[20px] bg-pink-100"
            onMouseEnter={() => setIsHovered6(true)}
            onMouseLeave={() => setIsHovered6(false)}
          >
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="3.png"
            ></img>
            {isHovered6 && (
              <>
                <div className="absolute inset-0 flex  justify-center z-100  ">
                  <div className="absolute  inset-0 rounded-3xl bg-black opacity-70"></div>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className=" bg-yellow-300 rounded-b-3xl bg-opacity-70 z-50 w-full mt-64"
                  >
                    <Description
                      title={text[5].title}
                      text1={text[5].text1}
                      text2={text[5].text2}
                      text3={text[5].text3}
                    />
                  </motion.div>
                </div>
              </>
            )}
          </div>
          <div
            className=" relative rounded-3xl h-[500px] w-[400px] sm:w-[450px] md:w-[450px] self-center mx-[20px] bg-pink-100"
            onMouseEnter={() => setIsHovered7(true)}
            onMouseLeave={() => setIsHovered7(false)}
          >
            <img
              className="object-fill h-full w-full rounded-3xl"
              src="1.png"
            ></img>
            {isHovered7 && (
              <>
                <div className="absolute inset-0 flex  justify-center z-100  ">
                  <div className="absolute  inset-0  bg-black opacity-70"></div>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className=" bg-yellow-300  bg-opacity-70 z-50 w-full mt-64"
                  >
                    <Description
                      title={text[6].title}
                      text1={text[6].text1}
                      text2={text[6].text2}
                      text3={text[6].text3}
                    />
                  </motion.div>
                </div>
              </>
            )}
          </div>
          <div
            className=" relative rounded-3xl h-[500px] w-[400px] sm:w-[450px] md:w-[450px] self-center mx-[20px] bg-pink-100"
            onMouseEnter={() => setIsHovered8(true)}
            onMouseLeave={() => setIsHovered8(false)}
          >
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="5.png"
            ></img>
            {isHovered8 && (
              <>
                <div className="absolute inset-0 flex  justify-center z-100  ">
                  <div className="absolute rounded-b-3xl  inset-0  bg-black opacity-70"></div>
                  <motion.div
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    className=" bg-yellow-300 rounded-b-3xl    bg-opacity-70 z-50 w-full mt-64"
                  >
                    <Description
                      title={text[7].title}
                      text1={text[7].text1}
                      text2={text[7].text2}
                      text3={text[7].text3}
                    />
                  </motion.div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button className=" h-12 w-30 text-bold px-4 rounded-2xl text-white p-2 bg-black">
          View all projects
        </button>
      </div>
    </section>
  );
};

Projects.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Projects;

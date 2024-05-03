import React from "react";
import PropTypes from "prop-types";

const Projects = ({ id }) => {
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
          <div className="rounded-3xl h-[500px] w-[400px] sm:w-[450px] self-center mx-[20px] bg-blue-100">
            <img
              className="object-cover h-full w-full rounded-3xl"
              src="1.png"
            ></img>
          </div>
          <div className="rounded-3xl h-[500px] w-[400px] sm:w-[450px] self-center mx-[20px] bg-blue-100">
            <img
              className="object-cover h-full w-full rounded-3xl"
              src="2.png"
            ></img>
          </div>
          <div className="rounded-3xl h-[500px] w-[400px] sm:w-[450px] self-center mx-[20px] bg-blue-100">
            <img
              className="object-cover h-full w-full rounded-3xl"
              src="3.png"
            ></img>
          </div>
          <div className="rounded-3xl h-[500px] w-[400px] sm:w-[450px] self-center mx-[20px] bg-blue-100">
            <img
              className="object-cover h-full w-full rounded-3xl"
              src="4.png"
            ></img>
          </div>
        </div>
        <div className="flex mt-3 flex-col gap-20">
          <div className="rounded-3xl h-[500px] w-[400px]  sm:w-[450px]  md:w-[400px] self-center mx-[20px] bg-pink-100">
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="5.png"
            ></img>
          </div>
          <div className="rounded-3xl h-[500px] w-[400px] sm:w-[450px] md:w-[400px] self-center mx-[20px] bg-pink-100">
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="3.png"
            ></img>
          </div>
          <div className="rounded-3xl h-[500px] w-[400px] sm:w-[450px] md:w-[400px] self-center mx-[20px] bg-pink-100">
            <img
              className="object-fill h-full w-full rounded-3xl"
              src="1.png"
            ></img>
          </div>
          <div className="rounded-3xl h-[500px] w-[400px] sm:w-[450px] md:w-[400px] self-center mx-[20px] bg-pink-100">
            <img
              className="object-fit h-full w-full rounded-3xl"
              src="5.png"
            ></img>
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

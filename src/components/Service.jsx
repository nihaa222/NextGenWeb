import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

const Service = ({ id }) => {
  return (
    <section
      id={id}
      className="section text-center flex-col mt-[130px] flex gap-3"
    >
      <div className="flex gap-2 justify-center items-center mb-1">
        <img className="h-4 w-4" src="none.png" alt="Service" />
        <p className="text-center text-orange-500">Services</p>
      </div>

      <p className="text-[32px] leading-9">Apps, websites & branding</p>
      <p className="text-[12px] mb-1 md:mb-16">
        Get everything you need in one place
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ x: "-100px" }}
          whileInView={{ x: 0, transition: { delay: 0.2, duration: 0.5 } }}
          className="md:h-[400px] rounded-3xl h-[420px] w-[320px] sm:w-[400px] lg:w-[300px] bg-blue-200 pt-10 mx-auto"
        >
          <div className="w-[280px] sm:w-[350px] lg:w-[250px] h-[150px] mx-auto">
            <img
              className="h-full w-full object-fit"
              src="/phones.jpg"
              alt="phones"
            />
          </div>
          <div className="flex flex-col mx-[30px]">
            <p className="text-[32px] mt-8">Build</p>
            <p>
              Our expert team crafts custom apps, websites, and marketing
              solutions tailored to your business needs and goals.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: "100px" }}
          whileInView={{ y: 0, transition: { delay: 0.2, duration: 0.5 } }}
          className="md:h-[400px] xl:-mt-10 rounded-3xl h-[420px] w-[320px] sm:w-[400px] lg:w-[300px] bg-blue-200 pt-10 mx-auto"
        >
          <div className="w-[280px] sm:w-[350px] lg:w-[250px] h-[150px] mx-auto bg-white">
            <img
              className="h-full w-full object-fit"
              src="laptop.jpg"
              alt="laptop"
            />
          </div>
          <div className="flex flex-col mx-[30px]">
            <p className="text-[32px] mt-8">Deploy</p>
            <p>
              We seamlessly launch your products, ensuring smooth integration
              and optimal performance across all platforms.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: "100px" }}
          whileInView={{ x: 0, transition: { delay: 0.2, duration: 0.5 } }}
          className="md:h-[400px] rounded-3xl h-[420px] w-[320px] sm:w-[400px] lg:w-[300px] bg-blue-200 pt-10 mx-auto"
        >
          <div className="w-[280px] sm:w-[350px] lg:w-[250px] h-[150px] mx-auto">
            <img
              className="w-full h-full"
              src="promotion.avif"
              alt="promotion"
            />
          </div>
          <div className="flex flex-col mx-[30px]">
            <p className="text-[32px] mt-8">Promote</p>
            <p>
              Utilizing strategic marketing techniques, we drive traffic and
              engagement to your apps and websites, maximizing your online
              presence.
            </p>
          </div>
        </motion.div>
      </div>

      <button className="flex justify-center mt-5 text-white font-bold hover:bg-orange-300 rounded-3xl items-center w-[200px] h-[50px] mx-auto bg-orange-500">
        Book a 15-min call
      </button>
    </section>
  );
};

Service.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Service;

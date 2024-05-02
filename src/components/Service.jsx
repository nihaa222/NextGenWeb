import React from "react";
import PropTypes from "prop-types";

const Service = ({ id }) => {
  return (
    <section
      id={id}
      className="section text-center flex-col mt-[180px] flex gap-3"
    >
      <div className="flex  gap-2 justify-center items-center mb-1">
        <img className="h-4 w-4" src="none.png" alt="Service" />
        <p className="text-center text-orange-500">Services</p>
      </div>

      <p className="text-[32px] leading-9">Apps, websites & branding</p>
      <p className="text-[12px] mb-1 md:mb-16">
        Get everything you need in one place
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-36 max-w-[1400px] mx-auto">
        <div className="md:h-[400px] rounded-3xl h-[420px] w-[320px] md:w-[300px]  bg-blue-200 pt-10 mx-auto">
          <div className="w-[250px] h-[150px] mx-auto ">
            <img className="h-full w-full" src="/phones.jpg"></img>
          </div>
          <div className="flex flex-col mx-[30px]">
            <p className="text-[32px] mt-4">Build</p>
            <p>
              Our expert team crafts custom apps, websites, and marketing
              solutions tailored to your business needs and goals.
            </p>
          </div>
        </div>

        <div className="md:h-[400px] mt-0 md:-mt-10 rounded-3xl h-[420px] w-[320px] md:w-[300px]  bg-purple-100 pt-10 mx-auto">
          <div className="w-[250px] h-[150px] mx-auto bg-white">
            <img src="laptop.jpg"></img>
          </div>
          <div className="flex flex-col mx-[30px]">
            <p className="text-[32px] mt-4">Deploy</p>
            <p>
              We seamlessly launch your products, ensuring smooth integration
              and optimal performance across all platforms.
            </p>
          </div>
        </div>

        <div className="md:h-[400px] rounded-3xl h-[420px] w-[320px] md:w-[300px]  bg-yellow-100 pt-10 mx-auto">
          <div className="w-[250px] h-[150px] mx-auto">
            <img className="w-full h-full" src="promotion.avif"></img>
          </div>
          <div className="flex flex-col mx-[30px]">
            <p className="text-[32px] mt-4">Promote</p>
            <p>
              Utilizing strategic marketing techniques, we drive traffic and
              engagement to your apps and websites, maximizing your online
              presence.
            </p>
          </div>
        </div>
      </div>
      <button className="flex justify-center text-white font-bold hover:bg-orange-300 rounded-3xl items-center w-[200px] h-[50px] mx-auto bg-orange-500 ">
        Book a 15-min call
      </button>
    </section>
  );
};

Service.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Service;

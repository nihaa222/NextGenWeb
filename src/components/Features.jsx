import React from "react";

import PropTypes from "prop-types";
import { Fa0 } from "react-icons/fa6";
import { Fa1 } from "react-icons/fa6";
import { Fa2 } from "react-icons/fa6";
import { Fa3 } from "react-icons/fa6";
import { Fa4 } from "react-icons/fa6";
import { Fa5 } from "react-icons/fa6";
import { Fa6 } from "react-icons/fa6";
import { Fa7 } from "react-icons/fa6";
import { Fa8 } from "react-icons/fa6";
import { Fa9 } from "react-icons/fa6";

const Features = ({ id }) => {
  return (
    <section id={id} className=" mt-[150px] max-w-[1200px] mx-auto">
      <div className="flex gap-2 justify-center items-center mb-5">
        <img className="h-4 w-4" src="none.png"></img>
        <p className="text-orange-500">Features</p>
      </div>
      <p className="text-[32px] text-center mb-4  max-w-[600px] mx-auto ">
        Here is why you'll love working with us
      </p>
      <p className="text-center mb-20">Our process is as simple as possible</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 max-w-[1400px] mx-auto gap-x-8 gap-y-36   ">
        <div className="flex flex-col h-[100px] mx-auto w-[270px] gap-4 items-center">
          <div className="relative">
            <img className="h-20 w-20 mb-3" src="flower.png"></img>

            <div className="absolute top-[30px] left-[30px]  mx-auto">
              <Fa0 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">Tailored Templates</p>
            <p>
              Professional design enhances brand perception, attracting more
              high-paying clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100px] mx-auto w-[270px] gap-4 items-center">
          <div className="relative">
            <img className="h-20 w-20" src="hole.png"></img>

            <div className="absolute top-[30px] left-[30px]   mx-auto">
              <Fa1 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">Device-Friendly Design</p>
            <p>
              Accessibility drives increased traffic, leading to higher
              conversion rates and revenue.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] gap-4 w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20 mb-3" src="flower.png"></img>

            <div className="absolute top-[30px] left-[30px]   mx-auto">
              <Fa3 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">Search Visibility Boost</p>
            <p>
              {" "}
              Improved SEO brings in more qualified leads, translating into
              higher sales figures.
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100px] mx-auto w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20" src="hole.png"></img>

            <div className="absolute top-[30px] left-[30px]   mx-auto">
              <Fa4 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]  mt-2 whitespace-nowrap lg:whitespace-normal">
              Efficient CRM Integration*
            </p>
            <p>
              Streamlined processes lead to more conversions, contributing to
              revenue increase.
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[100px] mx-auto w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20 mb-3" src="flower.png"></img>

            <div className="absolute top-[30px] left-[30px]   mx-auto">
              <Fa5 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px] whitespace-nowrap lg:whitespace-normal">
              Compelling Visual Showcase
            </p>
            <p>
              Impressive portfolio builds trust, encouraging larger and repeat
              business.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20" src="hole.png"></img>

            <div className="absolute top-[30px] left-[30px]   mx-auto">
              <Fa6 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">
              Credibility Building Tools
            </p>
            <p>
              {" "}
              Positive testimonials attract more clients, increasing revenue
              potential.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20 mb-3" src="flower.png"></img>

            <div className="absolute top-[30px] left-[30px]   mx-auto">
              <Fa7 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">Data-Driven Insights*</p>
            <p>
              {" "}
              Informed decisions optimize marketing efforts, resulting in
              increased ROI.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20" src="hole.png"></img>

            <div className="absolute top-[30px] left-[30px]   mx-auto">
              <Fa8 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px] whitespace-nowrap lg:whitespace-normal ">
              Project Management System
            </p>
            <p>
              : Efficient project handling boosts productivity, allowing for
              higher project volumes.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20 mb-3" src="flower.png"></img>

            <div className="absolute top-[30px] left-[30px]   mx-auto">
              <Fa9 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px] whitespace-nowrap lg:whitespace-normal">
              Convenient Appointment Booking
            </p>
            <p></p>Easy scheduling maximizes client consultations, leading to
            more contracts.
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20" src="hole.png"></img>

            <div className="absolute top-[25px] left-[20px]  flex  mx-auto">
              <Fa1 color="white" size="20px" />
              <Fa0 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px] whitespace-nowrap lg:whitespace-normal">
              Inspiring Project Galleries
            </p>
            <p>
              Engaging showcases drive more inquiries and conversions,
              increasing revenue.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20 mb-3" src="flower.png"></img>

            <div className="absolute top-[25px] left-[20px]  flex  mx-auto">
              <Fa1 color="white" size="20px" />
              <Fa1 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px] whitespace-nowrap lg:whitespace-normal ">
              Transparent Customer Portal
            </p>
            <p>
              Enhanced communication fosters client loyalty, leading to repeat
              business and referrals.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20 mb-3" src="flower.png"></img>

            <div className="absolute top-[25px] left-[20px]  flex  mx-auto">
              <Fa1 color="white" size="20px" />
              <Fa2 color="white" size="20px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px] whitespace-nowrap lg:whitespace-normal ">
              Seamless Payment Process
            </p>
            <p>
              Smooth transactions lead to quicker payments, improving cash flow.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
Features.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Features;

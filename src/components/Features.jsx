import React from "react";

import PropTypes from "prop-types";

import { AiOutlineDingtalk } from "react-icons/ai";

const Features = ({ id }) => {
  return (
    <section id={id} className=" mt-[150px] ">
      <div className="flex gap-2 justify-center items-center mb-5">
        <img className="h-4 w-4" src="none.png"></img>
        <p>Features</p>
      </div>
      <p className="text-[32px] text-center mb-4  max-w-[600px] mx-auto ">
        Here is whu you'll love working with us
      </p>
      <p className="text-center mb-20">Our process is as simple as possible</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 max-w-[1400px] mx-auto gap-28  md:gap-40 ">
        <div className="flex flex-col h-[100px] mx-auto w-[270px] gap-4 items-center">
          <div className="relative">
            <img className="h-20 w-20" src="flower.png"></img>

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
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

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">Device-Friendly Design</p>
            <p>
              {" "}
              Accessibility drives increased traffic, leading to higher
              conversion rates and revenue.
            </p>
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] gap-4 w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20" src="flower.png"></img>

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
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

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">
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
            <img className="h-20 w-20" src="flower.png"></img>

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">
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

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
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
            <img className="h-20 w-20" src="flower.png"></img>

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
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

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">
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
            <img className="h-20 w-20" src="flower.png"></img>

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">
              Convenient Appointment Booking
            </p>
            <p></p>Easy scheduling maximizes client consultations, leading to
            more contracts.
          </div>
        </div>
        <div className="flex flex-col mx-auto h-[100px] w-[270px] items-center">
          <div className="relative">
            <img className="h-20 w-20" src="hole.png"></img>

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">
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
            <img className="h-20 w-20" src="flower.png"></img>

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">
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
            <img className="h-20 w-20" src="flower.png"></img>

            <div className="absolute top-[20px] left-[25px]   mx-auto">
              <AiOutlineDingtalk color="white" size="30px" />
            </div>
          </div>
          <div className="text-center">
            <p className="font-semibold text-[22px]">
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

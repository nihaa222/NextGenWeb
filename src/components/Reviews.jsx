// Reviews.js
import React from "react";
import PropTypes from "prop-types";
import Acco from "./Acco";
import { Button } from "@mui/material";

const Reviews = ({ id }) => {
  return (
    <section id={id} className="">
      <div className="mt-[100px]">
        <div className="flex mb-5 items-center justify-center gap-2">
          <img className="h-4 w-4" src="none.png" alt="none" />
          <p className="text-orange-500">FAQ</p>
        </div>
        <p className="text-[28px] md:text-[32px] mb-4 text-center">
          Frequently Asked Questions
        </p>
        <p className="mb-5 text-center">
          What our customers say about our work.
        </p>
        <Acco />
      </div>
      <div className="max-w-[1300px] text-white py-20 sm:mx-auto mx-[10px] md:mx-[30px] px-10 bg-[#150808d6] rounded-3xl">
        {/* do here */}
        <div className="  grid md:grid-cols-gridfot1">
          <div className="cols-span-3 md:col-span-0">
            <div className="flex items-center gap-3 ">
              <div className="w-10 h-10 bg-orange-500 mb-8 rounded-full"></div>
              <p className="font-bold text-[32px] mb-7">Twist</p>
            </div>
            <p className="text-white">
              Discover our seamless, powerful tools for effortless job searching
              and hiring success"
            </p>
            <p>
              Book a free consultation call today to learn more about our
              services
            </p>
            <div></div>

            <form className="mt-8">
              <div>
                <label>
                  NAME
                  <input
                    className="mb-4 ml-2 rounded-xl px-3 py-2"
                    placeholder="name"
                  />
                </label>
              </div>
              <div>
                <label>
                  EMAIL
                  <input
                    className="ml-2 rounded-xl px-3 py-2"
                    placeholder="email"
                  />
                </label>
                <Button
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    backgroundColor: "orange",
                    borderRadius: "12px",
                    marginTop: "20px",
                  }}
                  variant="contained"
                  type="submit"
                >
                  Submit
                </Button>
              </div>

              {/* Any other form fields you have */}
            </form>
          </div>
          <div className="grid grid-cols-3 mt-[50px]">
            <div className="flex flex-col">
              <a className="font-bold" href="#">
                Template
              </a>
              <a className="font-semibold" href="#">
                Features
              </a>
              <a className="font-semibold" href="#">
                Tutorials
              </a>
              <a className="font-semibold" href="#">
                Purchase
              </a>
              <a className="font-semibold" href="#">
                Showcase
              </a>
            </div>
            <div className="flex flex-col">
              <a className="font-bold" href="#">
                Connect
              </a>
              <a className="font-semibold" href="#">
                Instagram
              </a>
              <a className="font-semibold" href="#">
                Youtube
              </a>
              <a className="font-semibold" href="#">
                Facebook
              </a>
              <a className="font-semibold" href="#">
                Linkedin
              </a>
            </div>
            <div className="flex flex-col">
              <a className="font-bold" href="#">
                Links
              </a>
              <a className="font-semibold" href="#">
                Home
              </a>
              <a className="font-semibold" href="#">
                Privacy
              </a>
              <a className="font-semibold" href="#">
                Terms
              </a>
              <a className="font-semibold" href="#">
                404
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Reviews.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Reviews;

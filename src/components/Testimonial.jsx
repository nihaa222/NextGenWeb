import React, { useState } from "react";

import PropTypes from "prop-types";

import Slider from "react-slick";

const obj = [
  {
    talk: "Since partnering with [Your Website Design Business Name], our online presence has skyrocketed. Their expertly crafted website not only attracts more leads but converts them into paying clients effortlessly. Thanks to their tailored approach, we've experienced consistent six-figure months, a testament to their commitment to our business growth.",
    name: "John Smith",
    img: "1.jpg",
    position: "Owner of Apex Roofing Solutions",
  },
  {
    talk: "Choosing Next Gen Web Crafts was a game-changer for us. Their understanding of the roofing industry coupled with their sleek designs has transformed our business. We now enjoy a steady stream of high-quality leads, resulting in six-figure months like clockwork. Their website solutions are a cornerstone of our success. ",
    name: "Sarah Johnson",
    img: "2.jpg",
    position: "CEO of Plumbpro",
  },
  {
    talk: "I can't emphasize enough how vital Next Gen Web Crafts has been for our growth. Their websites are not just visually appealing but strategically designed to drive conversions. Thanks to their expertise, we've consistently achieved six-figure months, positioning us as leaders in the competitive roofing industry.",
    name: "Michael Thompson",
    img: "3.jpg",
    position: "Founder of GreenScape",
  },
  {
    talk: "Working with Next Gen Web Crafts has been a game-changer for our business. Their websites are tailor-made for roofing companies like ours, focusing on generating leads and driving revenue. Thanks to their innovative approach, we've seen unparalleled growth, with six-figure months becoming the norm.",
    name: "Emily Rodriguez",
    img: "4.jpg",
    position: "President of TerraWorks",
  },
  {
    talk: "Our decision to partner with Next Gen Web Crafts has paid off beyond measure. Their websites are not just aesthetically pleasing but strategically crafted to attract our target audience. The result? Consistent six-figure months that have propelled our business to new heights. They truly understand the language of business growth in the roofing industry.",
    name: "David Harris",
    img: "4.jpg",
    position: "Owner of Elite Roofing Solutions",
  },
  {
    talk: "Choosing Next Gen Web Crafts was the best investment we made for our business. Their expertise in designing websites for roofing companies is unparalleled. Thanks to their innovative solutions, we've experienced exponential growth, consistently achieving six-figure months. Their impact on our business cannot be overstated.",
    name: "Jessica Carter",
    img: "4.jpg",
    position: "CEO of AquaCare",
  },
];

const Testimonial = ({ id }) => {
  const [dotActive, setDotActive] = useState();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          marginTop: "30px",
          positon: "absolute",
          top: "90%",
        }}
      >
        {dots}
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                color: "#262626",
                borderTop: "3px #262626 solid",
                padding: "3px 0",
                cursor: "pointer",
              }
            : {
                color: "transparent",
                borderTop: "3px white solid",

                padding: "3px 0",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };
  return (
    <>
      <section id={id} className="bg-pink  mt-[100px] p-34">
        <div className="flex justify-center gap-2 items-center">
          <img className="h-4 w-4 " src="none.png"></img>
          <p className="text-orange-500">Testimonials</p>
        </div>
        <p className="text-[32px] text-center mb-4">
          Don't just take out word for it.Take theirs
        </p>
        <p className="text-center mb-20">
          What our customers say about our work
        </p>
        <div className="bg-yellow-100 max-w-[600px] md:max-w-[800px] rounded-3xl  text-black mx-[30px] sm:mx-auto px:12 md:px-20 pt-10 pb-20 ">
          <Slider {...settings}>
            {obj.map((item) => (
              <div key={item.img} className="">
                <div className="text-center mb-8 md:mb-4">"{item.talk}"</div>
                <div className="flex gap-4 justify-center mb-8">
                  <img className="w-20 h-20" src={item.img} alt={item.name} />
                  <div className="flex flex-col gap-3 justify-center">
                    <p>{item.name}</p>
                    <p>{item.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      )
    </>
  );
};

Testimonial.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Testimonial;

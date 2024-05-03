import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const text = [
  {
    id: 1,
    text: "Customized Design Templates",
    text2:
      " Professionally designed website templates tailored specifically for home service businesses, ensuring a visually stunning and industry-relevant online presence.",
  },
  {
    id: 2,
    text: "Responsive Design",
    text2:
      "Websites optimized for all devices, including desktops, tablets, and mobile phones, ensuring a seamless user experience regardless of the device used to access the site.",
  },
  {
    id: 3,
    text: "Lead Generation Forms",
    text2:
      "Strategically placed lead generation forms and calls-to-action designed to capture visitor information and convert them into qualified leads for the home service business.",
  },
  {
    id: 4,
    text: "SEO Optimization",
    text2:
      "Implementation of search engine optimization (SEO) best practices to improve the website's visibility in search engine results, increasing organic traffic and generating more leads",
  },
  {
    id: 5,
    text: "Integration with CRM Systems",
    text2:
      "Seamless integration with customer relationship management (CRM) systems to streamline lead management processes and improve overall efficiency in converting leads into customers.",
  },
  {
    id: 6,
    text: "Analytics and Reporting",
    text2:
      "Implementation of analytics tools to track website performance, monitor visitor behavior, and provide insightful reports on key metrics, enabling data-driven decisions to further optimize the website for better results.",
  },
  {
    id: 7,
    text: "Job Management System",
    text2:
      "A comprehensive job management system integrated into the website, allowing home service businesses to efficiently manage ongoing projects, track progress, allocate resources, and ensure timely completion of jobs.",
  },
  {
    img: "airbnb.png",
    id: 8,
    text: "Appointment Scheduling Tool",
    text2:
      " An intuitive appointment scheduling tool that enables customers to book appointments for consultations, inspections, or services directly through the website, reducing administrative overhead and improving customer convenience.",
  },
  {
    img: "airbnb.png",
    id: 9,
    text: "Customer Portal",
    text2:
      "A secure customer portal where clients can log in to view project details, access invoices, make payments, and communicate with the company's team, enhancing transparency and fostering stronger customer relationships.",
  },
];

const obj = [
  {
    id: 1,
    img: "/green.png",
  },
  {
    id: 2,
    img: "/mastercraft.jpeg",
  },
  {
    id: 3,
    img: "/aquaflow.jpeg",
  },
  {
    id: 4,
    img: "/aquacare.jpeg",
  },
  {
    id: 5,
    img: "/apex.jpeg",
  },
  {
    id: 6,
    img: "/th.jpeg",
  },
  {
    id: 7,
    img: "/summit.jpeg",
  },
];

const Continue = () => {
  const settings2 = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          infinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="  mb-[100px]">
      <p className="md:text-[30px] text-[20px] text-semibold text-center mb-[40px] ">
        Top companies trust us with their design
      </p>
      <div className="max-w-[1400px] mt-[10 mb-[100px] mx-auto border-2 border-black p-2">
        <Slider {...settings}>
          {obj.map((item) => (
            <div key={item.id} className="p-2">
              <div className="border-[2px] border-black">
                <img
                  style={{ width: item.width }}
                  className="h-12 min-w-36 mx-[8px] pb-[8px] pt-[-6px] object-cover rounded-full"
                  src={item.img}
                  alt={`Image ${item.id}`}
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className=" mb-36 border-yellow-50 leading-[26px]  md:leading-[35px] bg-yellow-50 text-center mt-20 border-2 rounded-md md:h-[350px] h-[500px] sm:h-[320px] max-w-[800px] mx-[20px] md:mx-auto px-10 md:px-16 pt-10 py-10">
        <p className="md:text-[26px] text-[20px]  ">
          NextGenWeb took my idea to the next level with that makes my other
          ventures stand out.
          <span className="bg-orange-500 text-white mx-2">
            Their design expertise, creating branding{""}
          </span>
          that makes my other ventures stand out.They're not just a design
          agency; they're your ticket to success.
        </p>
        <div className="flex mt-4 md:mt-10 items-center justify-center gap-4">
          <img
            className="h-12 w-12 sm:h-20 sm:w-20 object-cover rounded-full"
            src="testimonial.jpg"
          ></img>
          <div className="">
            <p className="font-semibold whitespace-nowrap ">Samantha Harper</p>
            <p className="text-[12px] whitespace-nowrap">
              Founder of LuxeLashes
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-2 items-center justify-center mt-20  ">
        <img className="h-4 w-4 " src="none.png"></img>
        <p className="text-orange-500 text-[16px]">Process</p>
      </div>
      <div className=" mx-auto ">
        <p className="text-center md:text-[36px]  mb-6 text-[24px]  mt-5 ">
          You request, we make it happen
        </p>
        <p className="text-center text-[16px] mb-16">
          Our process is as simple as possible
        </p>
        <div className=" max-w-[1220px] md:mx-auto mx-[1px] text-white">
          <Slider {...settings2}>
            {text.map((item) => (
              <div
                key={item.id}
                className="bg-black md:h-[300px] h-[360px] rounded-lg  p-8  w-full flex gap-10 "
              >
                <div className="">
                  <div className="w-10 h-10 mb-2 rounded-full bg-orange-500 "></div>
                  <div>
                    <p className="font-bold mb-4">{item.text}</p>
                    <p>{item.text2}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Continue;

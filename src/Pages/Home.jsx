import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-scroll";
import Slider from "react-slick";
import { FaLongArrowAltUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import Heading from "../components/Heading";
import Continue from "../components/Continue";
import Service from "../components/Service";
import Reviews from "../components/Reviews";
import Features from "../components/Features";
import Projects from "../components/Projects";
import Testimonial from "../components/Testimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ui = [
  { id: "1", img: "/1.png" },
  { id: "2", img: "/2.png" },
  { id: "3", img: "/3.png" },
  { id: "4", img: "/4.png" },
  { id: "5", img: "/5.png" },
  { id: "6", img: "/1.png" },
  { id: "7", img: "/2.png" },
  { id: "8", img: "/3.png" },
  { id: "9", img: "/4.png" },
];

const Home = () => {
  const { open } = useSelector((state) => state.model);
  const [navbarVisible, setNavbarVisible] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  const sections = useMemo(
    () => [
      { id: "service", title: "Service" },
      { id: "features", title: "Features" },
      { id: "projects", title: "Projects" },
      { id: "testimonial", title: "Testimonial" },
      { id: "reviews", title: "Reviews" },
    ],
    []
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const triggerPoint = 800; // Adjust based on your needs
      setNavbarVisible(scrollPosition > triggerPoint);

      const visibleSectionId = sections.find((section) => {
        const sectionElement = document.getElementById(section.id);
        if (!sectionElement) return false;
        const sectionTop = sectionElement.offsetTop;
        const sectionHeight = sectionElement.offsetHeight;
        return (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        );
      })?.id;

      setActiveSection(visibleSectionId);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call initially on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="h-screen w-full relative">
      <Heading />
      <div className="w-full pt-[100px] h-[500px] md:h-[700px] -mt-10  overflow-hidden border-black">
        <Slider {...settings}>
          {ui.map((item) => (
            <div key={item.id}>
              <img
                className="rounded-lg"
                src={item.img}
                alt={`Image ${item.id}`}
                style={{ border: "none" }} // Add style to remove border
              />
            </div>
          ))}
        </Slider>
      </div>

      <Continue id="continue" />
      <Service id="service" />
      <Features id="features" />
      <Projects id="projects" />
      <Testimonial id="testimonial" />
      <Reviews id="reviews" />

      {!open && navbarVisible && (
        <nav
          className="fixed bottom-0 left-0 right-0 mx-auto transform rounded-3xl -translate-x-1/2 max-w-[370px] text-[12px] bg-black p-4 text-white flex items-center justify-between"
          style={{ zIndex: 100 }}
        >
          <ul className="flex justify-between gap-4 flex-grow">
            {sections.map((section) => (
              <li key={section.id}>
                <Link
                  to={section.id}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  activeClass="active"
                  className={section.id === activeSection ? "active-link" : ""}
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
          <button onClick={handleScrollToTop} className="back-to-top ml-3 mr-4">
            <FaLongArrowAltUp size="20px" />
          </button>
        </nav>
      )}
    </div>
  );
};

export default Home;

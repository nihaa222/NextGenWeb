import React from "react";

import { useEffect, useState, useMemo, useRef } from "react";
import { Link } from "react-scroll";
import Heading from "../components/Heading";
// import { FaLongArrowAltUp } from "react-icons/fa";

import Continue from "../components/Continue";
import Service from "../components/Service";

import Reviews from "../components/Reviews";
import Features from "../components/Features";
import Projects from "../components/Projects";

import { useScroll, useTransform, motion } from "framer-motion";
import Testimonial from "../components/Testimonial";
import { FaLongArrowAltUp } from "react-icons/fa";

const Home = () => {
  const targetRef = useRef();
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
    [
      "-10%",
      "-30%",
      "-10%",
      "-20%",
      "-10%",
      "-10%",
      "-10%",
      "-10%",
      "-10%",
      "-100%",
    ]
  );
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

  return (
    <div className="h-screen w-full relative " ref={targetRef}>
      <Heading />
      <div className="w-full  pt-[250px] overflow-x-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
          <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
          <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
          <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
          <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
          <div className="h-[200px] md:h-[300px] min-w-[250px] md:min-w-[300px] bg-black"></div>
        </motion.div>
      </div>

      <Continue id="continue" />
      <Service id="service" />
      <Features id="features" />
      <Projects id="projects" />
      <Testimonial id="testimonial" />
      <Reviews id="reviews" />

      {navbarVisible && (
        <motion.nav
          animate={{ y: -80 }}
          transition={{ type: "spring", stiffness: 300, damping: 100 }}
          className="fixed bottom-0 left-0 right-0 mx-auto transform rounded-3xl -translate-x-1/2 max-w-[390px] text-[12px] bg-black p-4 text-white flex items-center justify-between"
        >
          <ul className="flex justify-between gap-6 flex-grow">
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
          <button
            onClick={() => handleScrollToTop()}
            className="back-to-top ml-3 mr-4 "
          >
            <FaLongArrowAltUp size="20px" />
          </button>
        </motion.nav>
      )}
    </div>
  );
};

export default Home;

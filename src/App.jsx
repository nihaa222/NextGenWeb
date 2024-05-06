import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(true);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const { open } = useSelector((state) => state.model);

  return (
    <>
      {loading ? (
        <>
          {open && (
            <div className="fixed inset-0 bg-black opacity-70 z-40"></div>
          )}
          <div>
            <Home className={`w-full ${open ? "pointer-events-none" : ""}`} />{" "}
            {/* Disable pointer events on Home component when modal is open */}
          </div>
        </>
      ) : (
        <div className="flex items-center bg-orange-300 justify-center h-screen w-full">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            <img
              className=" h-20 w-20 md:h-36 md:w-36"
              src="none.png"
              alt="None"
            />
          </motion.div>

          {/* <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-40 w-40 bg-green-200"
          ></motion.div> */}
        </div>
      )}
    </>
  );
}

export default App;

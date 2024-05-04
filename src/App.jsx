import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";

function App() {
  const { open } = useSelector((state) => state.model);

  return (
    <>
      {open && <div className="fixed inset-0 bg-black opacity-70 z-40"></div>}
      <div>
        <Home className={`w-full ${open ? "pointer-events-none" : ""}`} />{" "}
        {/* Disable pointer events on Home component when modal is open */}
      </div>
    </>
  );
}

export default App;

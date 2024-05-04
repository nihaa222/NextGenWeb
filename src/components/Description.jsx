import React from "react";

const Description = ({ title, text1, text2, text3 }) => {
  return (
    <div className="text-white px-8 mb-4 mt-4 ">
      <ul>
        <p className="text-center font-bold mb-4">{title}</p>
        <li>
          <p className="">{text1}</p>
        </li>
        <li>
          {" "}
          <p className="">{text2}</p>
        </li>
        <li>
          <p className="">{text3}</p>
        </li>
        <li>
          <p className="">{text1}</p>
        </li>
      </ul>
    </div>
  );
};

export default Description;

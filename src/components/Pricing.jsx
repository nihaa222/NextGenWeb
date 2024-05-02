import React from "react";
import PropTypes from "prop-types";

const Pricing = ({ id }) => {
  return (
    <section id={id} className=" bg-purple-500">
      Pricing
    </section>
  );
};

Pricing.propTypes = {
  id: PropTypes.string.isRequired,
};

export default Pricing;

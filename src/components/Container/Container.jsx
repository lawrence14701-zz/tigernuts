import React from "react";
import PropTypes from "prop-types";
import "./Container.css";

function Container({ id, children }) {
  return (
    <div className="screen" id={id}>
      {children}
    </div>
  );
}

Container.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.element,
};

export default Container;

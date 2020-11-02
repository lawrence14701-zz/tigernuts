import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ img }) {
  return (
    <div className="container">
      <div className="image-container">
        <img className="display-image" alt="hi" src={img} />
      </div>
      <div className="text-container">
        <h1>What are tiger nuts</h1>
        <p></p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
};

export default Card;

import React from "react";
import PropTypes from "prop-types";
import "./Card.css";

function Card({ img, title, body, orientation }) {
  return (
    <div className="container-card">
      {orientation === "left" ? (
        <>
          <div className="image-container">
            <img className="display-image" alt="hi" src={img} />
          </div>
          <div className="text-container">
            <h1>{title}</h1>
            <p className="body">{body}</p>
          </div>
        </>
      ) : (
        <>
          <div className="text-container">
            <h1>{title}</h1>
            <p className="body">{body}</p>
          </div>
          <div className="image-container">
            <img className="display-image" alt="hi" src={img} />
          </div>
        </>
      )}
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string,
  body: PropTypes.string,
  title: PropTypes.string,
  orientation: PropTypes.string,
};

export default Card;

import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import "./Header.css";

function Header(props) {
  const {} = props;

  return (
    <div className="container">
      <div className="div-one"></div>

      <div className="div-two"></div>

      <div className="overlay"></div>

      <div className="box">
        <h1>Biordi Tiger Nuts</h1>
        <br />
        <h2>From Ghana, Africa, The best nut free nut</h2>
        <br />
        <Button />
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;

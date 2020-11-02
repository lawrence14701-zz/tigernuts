import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import { Link } from "react-scroll";

function Header(props) {
  const {} = props;

  return (
    <div className="header-container">
      <div className="div-one"></div>

      <div className="div-two"></div>

      <div className="overlay"></div>

      <div className="box">
        <h1>Biordi Tiger Nuts</h1>
        <br />
        <h2>From Ghana, Africa, The best nut free nut</h2>
        <br />
        <div className="button">
          <Link
            activeClass="active"
            to="main"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={50}
            duration={500}
            delay={1000}
            isDynamic={true}
            // onSetActive={this.handleSetActive}
            // onSetInactive={this.handleSetInactive}
            ignoreCancelEvents={false}
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;

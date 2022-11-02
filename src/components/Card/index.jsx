import "./Card.css";
import React from "react";

import PropTypes from "prop-types";

/**
 * Renders a card with a description, a number, and an icon.
 * @param {*} img
 * @param {*} number
 * @param {*} measure
 * @param {*} type
 * @returns
 */
function Card({ img, number, measure, type }) {
  return (
    <div className="row-card ">
      <div className="column-card ">
        <img src={img} className="icon-card" alt="calories-icon" />
      </div>

      <div className="column-card">
        <h3>
          {number}
          {measure}
        </h3>
        <p>{type}</p>
      </div>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
  measure: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Card;

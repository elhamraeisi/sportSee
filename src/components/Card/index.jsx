
import './Card.css'
import React from 'react';


function Card({ img, number, measure, type }) {

  return (
    <div className="row">
      <div className="column">
        <img src={img} className="icon-card" alt="calories-icon" />
      </div>

      <div className="column">
        <h3>{number}{measure}</h3>
        <p>{type}</p>
      </div>
    </div>

  );
}


export default Card;

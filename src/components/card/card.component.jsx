import React from "react";

import "./card.styles.css";

const Card = props => {
  return (
    <div className="card-container">
      <img
        alt="monster"
        src={`https://www.robohash.org/${props.monster.id}set=set2&size=180*180`}
      />
      <h2>{props.monster.name}</h2>
      <h2>{props.monster.email}</h2>
    </div>
  );
};

export default Card;

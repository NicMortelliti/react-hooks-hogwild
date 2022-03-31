import React from "react";

function Card({ hog: { image, name, specialty, greased, weight }, medal }) {
  const cardData = (
    <div className="ui card">
      <div className="ui slide masked reveal image">
        <div className="visibile content">
          <div className="ui four column doubling stackable grid container">
            <img src={image} alt={name} className="ui fluid image" />
          </div>
        </div>
        <div className="ui card hidden content">
          <div className="content">
            <div className="description">
              <div>Specialty: {specialty}</div>
              <div>{greased ? "Greased" : null}</div>
              <div>Weight: {weight}</div>
              <div>Highest Medal: {medal}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <a href={name} className="header">
          {name}
        </a>
      </div>
    </div>
  );

  return <div>{cardData}</div>;
}

export default Card;

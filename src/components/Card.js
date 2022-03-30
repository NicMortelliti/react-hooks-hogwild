import React from "react";

function Card({ hog: { image, name, specialty, greased, weight }, medal }) {
  const cardData = (
    <div className="ui cards">
      <div className="ui slide masked reveal image">
        <div className="visibile content">
          <img src={image} alt={name} className="ui medium image" />
        </div>
        <div className="ui card hidden content">
          <div className="content ">
            <div className="description">
              <div>Specialty: {specialty}</div>
              <div>Greased: {greased ? "Yes" : "No"}</div>
              <div>Weight: {weight}</div>
              <div>Highest Medal: {medal}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <a href="header" className="header">
          {name}
        </a>
      </div>
    </div>
  );

  return <div>{cardData}</div>;
}

export default Card;

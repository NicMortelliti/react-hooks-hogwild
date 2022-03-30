import React from "react";
import Card from "./Card.js";

function CardStack({ hogArray }) {
  const cardsArray = hogArray.map(filteredHog => {
    return (
      <div key={filteredHog.name}>
        <Card
          hog={filteredHog}
          medal={filteredHog["highest medal achieved"]}
          filteredHog={filteredHog}
        />
      </div>
    );
  });

  return <div className="ui grid">{cardsArray}</div>;
}

export default CardStack;

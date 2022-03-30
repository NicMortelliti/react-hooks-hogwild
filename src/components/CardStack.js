import React, { useState } from "react";
import Card from "./Card.js";

function CardStack({ hogs, filterState }) {
  const [focusedCard, setFocusedCard] = useState(null);

  function handleFocusChange(name) {
    setFocusedCard(name);
  }

  const cardsArray = hogs.map(filteredHog => {
      return (
        <div key={filteredHog.name}>
          <Card hog={filteredHog}
            medal={filteredHog["highest medal achieved"]}
            focused={focusedCard}
            handleFocusChange={handleFocusChange}
          />
        </div>
      );
    });

  return <div className="ui grid container">{cardsArray}</div>;
}

export default CardStack;

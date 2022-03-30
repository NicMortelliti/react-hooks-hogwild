import React, { useState } from "react";
import Card from "./Card.js";

function CardStack({ hogs }) {
  const [focusedCard, setFocusedCard] = useState(null);

  function handleFocusChange(name) {
    setFocusedCard(name);
  }

  const cardsArray = hogs.map(hog => {
    return (
      <div key={hog.name}>
        <Card
          name={hog.name}
          specialty={hog.specialty}
          greased={hog.greased}
          weight={hog.weight}
          medal={hog["highest medal achieved"]}
          image={hog.image}
          focused={focusedCard}
          handleFocusChange={handleFocusChange}
        />
      </div>
    );
  });

  return <div className="ui grid container">{cardsArray}</div>;
}

export default CardStack;

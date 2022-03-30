import React, { useState } from "react";

function Card({
  name,
  specialty,
  greased,
  weight,
  medal,
  image,
  focused,
  handleFocusChange,
}) {
  function handleClick() {
    handleFocusChange(name);
  }

  const secondaryData = (
    <div>
      <div>Specialty: {specialty}</div>
      <div>Greased: {greased ? "Yes" : "No"}</div>
      <div>Weight: {weight}</div>
      <div>Highest Medal: {medal}</div>
    </div>
  );

  return (
    <div className="ui eight wide column" onClick={handleClick}>
      <h2>{name}</h2>
      <img height="150" width="150" src={image} alt={name} />
      {focused === name ? secondaryData : null}
    </div>
  );
}

export default Card;

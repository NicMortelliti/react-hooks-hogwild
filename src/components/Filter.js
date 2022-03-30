import React from "react";

function Filter({ updateCategory }) {
  const greasedArray = [
    <option key="all">All</option>,
    <option key="greased">Greased</option>,
    <option key="notGreased">Not Greased</option>,
  ];

  return (
    <select name="category" onChange={updateCategory}>
      {greasedArray}
    </select>
  );
}

export default Filter;

import React from "react";

function Filter({ filterState, handleFilterState }) {
  const greasedArray = [
    <option key="all">All</option>,
    <option key="greased">Greased</option>,
    <option key="notGreased">Not Greased</option>,
  ];

  return (
    <div>
      <select defaultValue={filterState} onChange={handleFilterState}>
        {greasedArray}
      </select>
    </div>
  );
}

export default Filter;

import React from "react";

function Sort({ sortState, handleSortChange }) {
  const sortArray = ["Name", "Weight"];

  const radioBtns = sortArray.map(option => {
    return (
      <div key={option} className="field">
        <div className="ui radio checkbox">
          <input
            type="radio"
            name={option}
            checked={sortState === option ? "checked" : ""}
            onChange={() => handleSortChange("sort", option)}
          />
          <label>{option}</label>
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="inline fields">
        <label>Sort hogs by: </label>
        {radioBtns}
      </div>
    </div>
  );
}

export default Sort;

import React, { useState } from "react";
import Nav from "./Nav";
import CardStack from "./CardStack.js";
import Filter from "./Filter.js";
import Sort from "./Sort.js";

import hogs from "../porkers_data";

function App() {
  // Store drop down filter state (All, Greased, Not Greased)
  const [filterState, setFilterState] = useState("All");

  // Store array of pigs that satisfy current drop down filterState
  const [hogArrayState, setHogArrayState] = useState(hogs);

  // Store sort state
  const [sortState, setSortState] = useState("Name");

  function handleFilterState(value) {
    setFilterState(value);
    if (value === "All") {
      setHogArrayState(hogs);
    } else if (value === "Greased") {
      setHogArrayState(hogs.filter(hog => hog.greased === true));
    } else if (value === "Not Greased") {
      setHogArrayState(hogs.filter(hog => hog.greased === false));
    }
  }

  function handleSortChange(name) {
    let newSortState = name;
    setSortState(newSortState);
    newSortState = newSortState.toLowerCase();

    // Sort by name
    if (newSortState === "name") {
      setHogArrayState(
        hogArrayState.sort(function (hogA, hogB) {
          const nameA = hogA.name.toUpperCase();
          const nameB = hogB.name.toUpperCase();
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }
          return 0;
        })
      );
    } else {
      // Sort by weight
      setHogArrayState(
        hogArrayState.sort(function (hogA, hogB) {
          return hogA[newSortState] - hogB[newSortState];
        })
      );
    }
  }

  return (
    <div className="App">
      <Nav />
      <div className="ui center aligned basic segment">
        <Filter
          filterState={filterState}
          handleFilterState={handleFilterState}
        />
        <Sort sortState={sortState} handleSortChange={handleSortChange} />
        <div className="ui horizontal divider"></div>

        <CardStack hogArray={hogArrayState} />
      </div>
    </div>
  );
}

export default App;

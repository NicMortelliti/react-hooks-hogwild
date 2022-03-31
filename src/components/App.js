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

  /***************************
   * Update array stack with sorting/filtering
   ***************************/
  function handleStackUpdate(component, value) {
    let localFilter = filterState;
    let localSort = sortState;
    let localHogs = [...hogs];

    // Update appropriate state
    if (component === "filter") {
      setFilterState(value);
      localFilter = value;
    } else {
      setSortState(value);
      localSort = value;
    }

    /***************************
     * Sort whole hog list first
     ***************************/
    localSort = localSort.toLowerCase();
    if (localSort === "name") {
      // Sort by name
      localHogs.sort(function (hogA, hogB) {
        const nameA = hogA.name.toLowerCase();
        const nameB = hogB.name.toLowerCase();

        // Nested if/else if/else statements
        return nameA < nameB ? -1 : nameA > nameB ? 1 : 0;
      });
    } else {
      // Sort by weight
      localHogs.sort((hogA, hogB) => hogA[localSort] - hogB[localSort]);
    }

    /***************************
     * Apply filtering to sorted array
     ***************************/
    if (localFilter === "All") {
      setHogArrayState(localHogs);
    } else if (localFilter === "Greased") {
      setHogArrayState(localHogs.filter(hog => hog.greased === true));
    } else if (localFilter === "Not Greased") {
      setHogArrayState(localHogs.filter(hog => hog.greased === false));
    }
  }

  return (
    <div className="App">
      <Nav />
      <div className="ui center aligned basic segment">
        <Filter
          filterState={filterState}
          handleFilterState={handleStackUpdate}
        />
        <Sort sortState={sortState} handleSortChange={handleStackUpdate} />
        <div className="ui horizontal divider"></div>

        <CardStack hogArray={hogArrayState} />
      </div>
    </div>
  );
}

export default App;

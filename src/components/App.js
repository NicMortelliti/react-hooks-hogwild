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

  function handleFilterState(event) {
    const newFilterState = event.target.value;
    setFilterState(newFilterState);
    if (newFilterState === "All") {
      // ALL
      setHogArrayState(hogs);
    } else if (newFilterState === "Greased") {
      // GREASED
      setHogArrayState(hogs.filter(hog => hog.greased === true));
      console.log("You chose to display greased hogs");
    } else if (newFilterState === "Not Greased") {
      // NOT GREASED
      setHogArrayState(hogs.filter(hog => hog.greased === false));
      console.log("You chose to display ungreased hogs");
    }
  }

  function handleSortChange(event) {
    let newSortState = event.target.name;
    setSortState(newSortState);
    newSortState = newSortState.toLowerCase();

    // Sort by name
    if (newSortState === "name") {
      setHogArrayState(
        hogs.sort(function (hogA, hogB) {
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
        hogs.sort(function (hogA, hogB) {
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

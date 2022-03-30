import React, { useState } from "react";
import Nav from "./Nav";
import CardStack from "./CardStack.js";
import Filter from "./Filter.js";

import hogs from "../porkers_data";

function App() {
  // Store drop down filter state (All, Greased, Not Greased)
  const [filterState, setFilterState] = useState("All");

  // Store array of pigs that satisfy current drop down filterState
  const [hogArrayState, setHogArrayState] = useState(hogs);

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

  return (
    <div className="App">
      <Nav />
      <Filter filterState={filterState} handleFilterState={handleFilterState} />
      <CardStack hogArray={hogArrayState} filterState={filterState} />
    </div>
  );
}

export default App;

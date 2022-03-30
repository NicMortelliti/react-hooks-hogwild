import React, { useState } from "react";
import Nav from "./Nav";
import CardStack from "./CardStack.js";
import Filter from "./Filter.js";

import hogs from "../porkers_data";

function App() {
  const [filterState, setFilterState] = useState("All");

  function updateCategory(event) {
    console.log(event.target.value);
    if (event.target.value === "Greased") {
      setFilterState(true);
    } else if (event.target.value === "Not Greased") {
      setFilterState(false);
    } else {
      setFilterState(event.target.value);
    }
    setFilterState(event.target.value);
  }

  return (
    <div className="App">
      <Nav />
      <Filter updateCategory={updateCategory} />
      <CardStack hogs={hogs} filterState={filterState} />
    </div>
  );
}

export default App;

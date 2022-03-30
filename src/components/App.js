import React from "react";
import Nav from "./Nav";
import CardStack from "./CardStack.js";
import Filter from "./Filter.js";

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <Filter />
      <CardStack hogs={hogs} />
    </div>
  );
}

export default App;

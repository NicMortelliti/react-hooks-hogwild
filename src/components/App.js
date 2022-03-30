import React from "react";
import Nav from "./Nav";
import CardStack from "./CardStack.js";

import hogs from "../porkers_data";

function App() {
  return (
    <div className="App">
      <Nav />
      <CardStack hogs={hogs} />
    </div>
  );
}

export default App;

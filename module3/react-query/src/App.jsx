import { useState, useEffect } from "react";
import "./App.css";
import BeforeReactQuery from "./components/before-react-query";
import AfterReactQuery from "./components/after-react-query";
import MutationExample from "./components/mutation-example";
function App() {
  return (
    <div>
      {/* <BeforeReactQuery /> */}
      {/* <AfterReactQuery /> */}
      <MutationExample />
    </div>
  );
}

export default App;

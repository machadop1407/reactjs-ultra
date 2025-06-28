import { lazy } from "react";
import { TransitionExample } from "./components/TransitionHookExample";
import "./App.css";
import { DeferredValueExample } from "./components/DeferredValueExample";
function App() {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <DeferredValueExample />
    </div>
  );
}

export default App;

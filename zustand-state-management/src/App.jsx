import React from "react";
import FullSubscriber from "./components/full-subscribed";
import CountSubscriber from "./components/count-subscriber";
import "./App.css";
import { useExampleStore } from "./store/useExampleStore";

function App() {
  const changeText = useExampleStore((state) => state.changeText);

  return (
    <div>
      <h1>Zustand Subscription Demo</h1>
      <FullSubscriber />
      <CountSubscriber />
      <hr />
      <button onClick={() => changeText("Updated from App")}>
        Change Text From App
      </button>
    </div>
  );
}

export default App;

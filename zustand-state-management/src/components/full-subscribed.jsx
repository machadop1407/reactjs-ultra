import React from "react";
import { useExampleStore } from "../store/useExampleStore";

function FullSubscriber() {
  const { count, text, incrementCount, changeText } = useExampleStore();
  console.log("FullSubscriber re-rendered");

  return (
    <div style={{ margin: "8px 0" }}>
      <h2>Full Subscriber</h2>
      <p>Count: {count}</p>
      <p>Text: {text}</p>
      <button onClick={incrementCount}>Increment Count</button>
      <button onClick={() => changeText("New Text")}>Change Text</button>
    </div>
  );
}

export default FullSubscriber;

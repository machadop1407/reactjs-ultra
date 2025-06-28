import React from "react";
import { useExampleStore } from "../store/useExampleStore";
import { useShallow } from "zustand/shallow";

function CountSubscriber() {
  const { count, incrementCount } = useExampleStore(
    useShallow((state) => ({
      count: state.count,
      incrementCount: state.incrementCount,
    }))
  );
  console.log("CountSubscriber re-rendered");

  return (
    <div>
      <h2>Count Subscriber</h2>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
}

export default CountSubscriber;

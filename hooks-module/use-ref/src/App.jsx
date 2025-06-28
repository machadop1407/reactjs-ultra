import { useState, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const renderCountRef = useRef(0);

  useEffect(() => {
    renderCountRef.current++;
  });

  return (
    <>
      <p>Count: {count}</p>
      <p>Renders: {renderCountRef.current}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </>
  );
}

export default App;

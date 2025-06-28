import React, { useState } from "react";

interface Props {
  initialValue: number;
}

const Counter = ({ initialValue }: Props) => {
  const [count, setCount] = useState(initialValue);
  return (
    <div>
      <p data-testid="countValue">{count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
};

export default Counter;

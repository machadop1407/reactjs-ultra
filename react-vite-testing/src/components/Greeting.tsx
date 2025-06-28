import React from "react";

interface GreetingProps {
  name: string;
  age: number;
}

const Greeting: React.FC<GreetingProps> = ({ name, age }) => (
  <div>
    <h1>
      Hello, {name}! He is {age} years old.
    </h1>
  </div>
);

export default Greeting;

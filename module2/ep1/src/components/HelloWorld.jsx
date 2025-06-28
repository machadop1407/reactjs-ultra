import { useEffect } from "react";

function HelloWorld() {
  useEffect(() => {
    console.log("Component Mounted");

    return () => {
      console.log("Component Unmounted");
    };
  }, []);
  return <h1> Hello World</h1>;
}

export default HelloWorld;

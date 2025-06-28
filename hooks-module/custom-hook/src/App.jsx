import { useState, useEffect } from "react";
import "./App.css";
import { useFetch } from "./hooks/use-fetch";

function App() {
  return (
    <div>
      <h1>Posts</h1>
      <button>Refetch Posts</button>

      <h1> Hello World</h1>
    </div>
  );
}

export default App;

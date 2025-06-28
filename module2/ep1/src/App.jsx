import "./App.css";
import { useEffect, useState } from "react";

// Mounting -> Updating -> Unmounting

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const responseData = await response.json();
    setData(responseData);
  }

  return (
    <>{data ? data.map((user) => <div> {user.name}</div>) : <p> No Users</p>}</>
  );
}

export default App;

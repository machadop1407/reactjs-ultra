import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Home() {
  const { user } = useContext(UserContext);
  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <h2>Home Component</h2>
      <p>Welcome back, {user.name}!</p>
      <p>Your email is: {user.email}</p>
    </div>
  );
}

export default Home;

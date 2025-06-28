import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function Signup() {
  const { user, setUser } = useContext(UserContext);

  const handleSignup = () => {
    setUser({
      name: "Alice Wonderland",
      email: "alice@wonderland.com",
    });
  };

  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <h2>Signup Component</h2>
      <p>Current Name: {user.name}</p>
      <p>Current Email: {user.email}</p>

      <button onClick={handleSignup}>Sign Up as Alice</button>
    </div>
  );
}

export default Signup;

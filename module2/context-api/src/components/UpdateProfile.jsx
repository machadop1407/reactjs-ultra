import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UpdateProfile() {
  const { user, setUser } = useContext(UserContext);

  const [nameInput, setNameInput] = useState(user.name);
  const [emailInput, setEmailInput] = useState(user.email);

  const handleUpdate = () => {
    setUser({
      ...user,
      name: nameInput,
      email: emailInput,
    });
  };

  return (
    <div style={{ border: "1px dashed #aaa", margin: "1rem", padding: "1rem" }}>
      <h3>UpdateProfile Component</h3>
      <label>
        Name:{" "}
        <input
          type="text"
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />
      </label>
      <br />
      <label>
        Email:{" "}
        <input
          type="text"
          value={emailInput}
          onChange={(e) => setEmailInput(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleUpdate}>Update User</button>
    </div>
  );
}

export default UpdateProfile;

import React, { useContext } from "react";
import UpdateProfile from "./UpdateProfile";
import { UserContext } from "../contexts/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  return (
    <div style={{ border: "1px solid #ccc", margin: "1rem", padding: "1rem" }}>
      <h2>Profile Component</h2>
      <p>Profile Name: {user.name}</p>
      <p>Profile Email: {user.email}</p>

      <UpdateProfile />
    </div>
  );
}

export default Profile;

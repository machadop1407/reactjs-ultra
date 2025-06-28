import { UserContext } from "../contexts/UserContext";
import { useState } from "react";

function UserContextProvider(props) {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@example.com",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;

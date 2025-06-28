import React, { useState } from "react";

// Child components
import Signup from "./components/Signup";
import Home from "./components/Home";
import Profile from "./components/Profile";
import UserContextProvider from "./providers/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1>Main App</h1>
        <Signup />
        <Home />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;

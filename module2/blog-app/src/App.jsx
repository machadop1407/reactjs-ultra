import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import EditPost from "./pages/EditPost";
import PostProvider from "./contexts/PostContext";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <PostProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/edit-post/:id" element={<EditPost />} />
        </Routes>
      </PostProvider>
    </div>
  );
}

export default App;

import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        width: "100vw",
        display: "flex",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <Link to="/"> Home</Link>
      <Link to="/create-post"> Create Post</Link>
      <Link to="/edit-post/1"> Edit Post</Link>
    </div>
  );
}

export default Navbar;

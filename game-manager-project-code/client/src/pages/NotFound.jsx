import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="page-container"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1> 404</h1>
      <p> Oops! The page you're looking for doesn't exist.</p>
      <Link to={"/"}>Go Back Home</Link>
    </div>
  );
}

export default NotFound;

import { PostContext } from "../contexts/PostContext";
import { useContext } from "react";
import Post from "../components/Post";

function Home() {
  const { posts } = useContext(PostContext);
  return (
    <div>
      <h3>Blog Posts</h3>
      <ul
        style={{
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {posts.map((post, key) => (
          <Post post={post} key={key} />
        ))}
      </ul>
    </div>
  );
}

export default Home;

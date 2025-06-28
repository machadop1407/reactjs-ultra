import { useNavigate } from "react-router-dom";

function Post(props) {
  const navigate = useNavigate();
  return (
    <div
      style={{ padding: 20, margin: 10, width: 300, border: "2px solid white" }}
      onClick={() => navigate(`/edit-post/${props.post.id}`)}
    >
      <h4> {props.post.title}</h4>
      <p> {props.post.content}</p>
    </div>
  );
}

export default Post;

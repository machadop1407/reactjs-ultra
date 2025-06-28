import { use } from "react";

async function fetchPost(postId) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return res.json();
}

export default function Post({ postId }) {
  const post = use(fetchPost(postId));

  return (
    <article>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </article>
  );
}

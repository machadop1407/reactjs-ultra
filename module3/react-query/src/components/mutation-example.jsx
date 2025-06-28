import React, { useState } from "react";
import { useMutation } from "@tanstack/react-query";

async function addNewPost(newPost) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(newPost),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });

  return response.json();
}

function MutationExample() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const { mutate, isPending, isError, error, data, isSuccess } = useMutation({
    mutationFn: addNewPost,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate({ title, body });
  };

  return (
    <div>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title: </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="body">Body: </label>
          <textarea
            id="body"
            rows="4"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isPending}>
          {isPending ? "Adding Post..." : "Add Post"}
        </button>
      </form>

      {isError && <p> Error: {error.message}</p>}

      {isSuccess && data && (
        <div>
          <h4> Post added successully!</h4>
          <p> Title: {data.title}</p>
          <p> Body: {data.body}</p>
        </div>
      )}
    </div>
  );
}

export default MutationExample;

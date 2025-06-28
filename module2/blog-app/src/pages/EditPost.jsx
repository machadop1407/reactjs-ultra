import { useForm } from "react-hook-form";
import { PostContext } from "../contexts/PostContext";
import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

function EditPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();

  const navigate = useNavigate();

  const { findPostById, updatePost } = useContext(PostContext);

  const post = findPostById(Number(id));

  useEffect(() => {
    if (post) {
      reset({ title: post.title, content: post.content });
    }
  }, [post]);

  function onSubmit(data) {
    updatePost({ ...data, id: Number(id) });
    navigate("/");
  }

  if (!post) return <p> Post Not Found</p>;

  return (
    <div>
      {" "}
      <h3> Edit a Post</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label style={{ marginRight: 10 }}> Title</label>
          <input
            type="text"
            placeholder="Post title..."
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
            })}
          />

          {errors.title && (
            <p style={{ color: "red" }}> {errors.title.message}</p>
          )}
        </div>

        <div style={{ marginTop: 10 }}>
          <label style={{ marginRight: 10 }}> Content</label>
          <input
            type="text"
            placeholder="Post content..."
            {...register("content", {
              required: "Content is required",
              minLength: {
                value: 10,
                message: "Content must be at least 10 characters",
              },
            })}
          />
          {errors.content && (
            <p style={{ color: "red" }}> {errors.content.message}</p>
          )}
        </div>

        <button type="submit" style={{ marginTop: 10 }}>
          {" "}
          Update Post
        </button>
      </form>
    </div>
  );
}

export default EditPost;

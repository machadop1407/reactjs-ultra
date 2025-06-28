import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

function UpdateGame() {
  const { id } = useParams();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  async function fetchGame() {
    const response = await fetch(`http://localhost:3000/api/games/${id}`);
    return response.json();
  }

  async function editGame(updatedGame) {
    const response = await fetch(`http://localhost:3000/api/games/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGame),
    });
    return response.json();
  }

  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["game", id],
    queryFn: fetchGame,
  });

  const { mutate } = useMutation({
    mutationFn: editGame,
    onSuccess: () => {
      queryClient.invalidateQueries(["games"]);
      queryClient.invalidateQueries(["game", id]);
      navigate("/");
    },
  });

  useEffect(() => {
    if (data) {
      reset({ name: data.name, platform: data.platform, genre: data.genre });
    }
  }, [data, reset]);

  const onSubmit = (formData) => {
    mutate({
      name: formData.name,
      platform: formData.platform,
      genre: formData.genre,
    });
  };

  if (isLoading) return <p className="page-container"> Loading game...</p>;
  if (isError)
    return <p className="page-container"> Error: {error.message} </p>;

  return (
    <div className="page-container">
      <h2> Update Game (ID: {id})</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="form-container bg-card"
        style={{ padding: "1rem" }}
      >
        <label> Game Name </label>
        <input
          placeholder="E.g. Super Mario"
          {...register("name", { required: "Name is required." })}
        />

        {errors.name && <p style={{ color: "red" }}> {errors.name.message}</p>}

        <label> Platform </label>
        <input
          placeholder="E.g. Switch, PC"
          {...register("platform", { required: "Platform is required." })}
        />
        {errors.platform && (
          <p style={{ color: "red" }}> {errors.platform.message}</p>
        )}

        <label> Genre </label>
        <input
          placeholder="E.g. RPG, Action, Puzzle"
          {...register("genre", { required: "Genre is required." })}
        />
        {errors.genre && (
          <p style={{ color: "red" }}> {errors.genre.message}</p>
        )}

        <button type="submit"> Update</button>
      </form>
    </div>
  );
}

export default UpdateGame;

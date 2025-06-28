import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function createGame(newGame) {
  const response = await fetch("http://localhost:3000/api/games", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newGame),
  });

  return response.json();
}

function CreateGame() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: createGame,
    onSuccess: () => {
      queryClient.invalidateQueries(["games"]);
      navigate("/");
    },
  });

  const onSubmit = (formData) => {
    console.log(formData);
    mutate({
      name: formData.name,
      platform: formData.platform,
      genre: formData.genre,
    });
  };

  return (
    <div className="page-container">
      <h2>Add A New Game</h2>
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

        <button type="submit"> Create</button>
      </form>
    </div>
  );
}

export default CreateGame;

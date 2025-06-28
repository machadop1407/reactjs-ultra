import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";

async function deleteGame(id) {
  const response = await fetch(`http://localhost:3000/api/games/${id}`, {
    method: "DELETE",
  });
  return response.json();
}

function GameList(props) {
  const games = props.games;
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteGame,
    onSuccess: () => {
      queryClient.invalidateQueries(["games"]);
    },
  });

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this game?")) {
      mutate(id);
    }
  };

  return (
    <div className="games-grid">
      {games.map((game, key) => (
        <div key={key} className="game-card">
          <h3>{game.name}</h3>
          <p>{game.platform}</p>
          <p>{game.genre}</p>

          <div>
            <Link to={`/update/${game.id}`}> Edit</Link>
            <button onClick={() => handleDelete(game.id)}> Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default GameList;

import express from "express";
import cors from "cors";
import { games } from "./fakeDB.js";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/api/games", (req, res) => {
  res.json(games);
});

app.get("/api/games/:id", (req, res) => {
  const { id } = req.params;
  const game = games.find((g) => g.id === Number(id));

  if (!game) {
    return res.status(404).json({ error: "Game not found." });
  }

  res.json(game);
});

app.post("/api/games", (req, res) => {
  const newGame = req.body;
  games.push({ ...newGame, id: games.length + 1 });
  res.status(201).json(newGame);
});

app.put("/api/games/:id", (req, res) => {
  const { id } = req.params;
  const newUpdatedGame = req.body;

  const index = games.findIndex((g) => g.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ error: "Game not found." });
  }

  games[index] = {
    ...games[index],
    name: newUpdatedGame.name,
    platform: newUpdatedGame.platform,
    genre: newUpdatedGame.genre,
  };

  res.json(games[index]);
});

app.delete("/api/games/:id", (req, res) => {
  const { id } = req.params;

  const index = games.findIndex((g) => g.id === Number(id));
  if (index === -1) {
    return res.status(404).json({ error: "Game not found." });
  }

  const deletedGame = games.splice(index, 1)[0];

  res.json(deletedGame);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

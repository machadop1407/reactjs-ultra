import { create } from "zustand";

export const useScoreboardStore = create((set) => ({
  players: [
    { id: 1, name: "Alice", score: 3 },
    { id: 2, name: "Bob", score: 7 },
  ],

  addPlayer: (name) =>
    set((state) => {
      const newPlayer = {
        id: state.players[state.players.length - 1].id + 1,
        name,
        score: 0,
      };

      return { players: [...state.players, newPlayer] };
    }),

  incrementScore: (id) =>
    set((state) => ({
      players: state.players.map((player) =>
        player.id === id ? { ...player, score: player.score + 1 } : player
      ),
    })),

  decrementScore: (id) =>
    set((state) => ({
      players: state.players.map((player) =>
        player.id === id
          ? { ...player, score: Math.max(player.score - 1, 0) }
          : player
      ),
    })),

  removePlayer: (id) =>
    set((state) => ({
      players: state.players.filter((player) => player.id !== id),
    })),
}));

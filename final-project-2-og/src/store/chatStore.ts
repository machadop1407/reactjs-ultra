// src/store/chatStore.ts
import { create } from "zustand";

export interface Room {
  id: number;
  name: string;
}

interface ChatStore {
  currentRoom: Room | null;
  setCurrentRoom: (room: Room) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  // Assumes a room with id=1 (General) already exists.
  currentRoom: { id: 1, name: "General" },
  setCurrentRoom: (room: Room) => set({ currentRoom: room }),
}));

export default useChatStore;

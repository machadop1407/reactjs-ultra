import { create } from "zustand";

export const useExampleStore = create((set) => ({
  count: 0,
  text: "Hello World",
  incrementCount: () => set((state) => ({ count: state.count + 1 })),
  changeText: (newText) => set(() => ({ text: newText })),
}));

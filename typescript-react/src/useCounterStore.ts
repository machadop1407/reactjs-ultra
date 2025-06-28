import { create } from "zustand";

interface CounterStore {
  count: number;
  increase: () => void;
  decrease: () => void;
}

export const useCounterStore = create<CounterStore>((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  decrease: () => set((state) => ({ count: state.count - 1 })),
}));

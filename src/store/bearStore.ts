import { create } from "zustand";

type BearsState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBeards: () => void;
};

export const useBearStore = create<BearsState>()((set) => ({
  bears: 0,
  increasePopulation: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),
  removeAllBeards: () => set({ bears: 0 }),
}));

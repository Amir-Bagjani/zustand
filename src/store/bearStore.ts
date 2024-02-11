import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type BearsState = {
  bears: number;
  bear1: number;
  bear2: number;
  increasePopulation: () => void;
  removeAllBeards: () => void;
};

export const useBearStore = create<BearsState>()(
  persist(
    (set) => ({
      bears: 0,
      bear2: 0,
      bear1: 0,
      increasePopulation: () =>
        set((state) => ({
          bears: state.bears + 1,
        })),
      removeAllBeards: () => set({ bears: 0 }),
    }),
    {
      name: "bear-store",
      storage: createJSONStorage(() => localStorage),
      // partialize: (state) => ({ bears: state.bears, bear2: state.bear2 }),
      partialize: state => Object.fromEntries(
        Object.entries(state).filter(([key]) => !["bear2", "bear1"].includes(key))
      )
    }
  )
);

import { create } from "zustand";
import { devtools } from "zustand/middleware";

type BearsState = {
  bears: number;
  increasePopulation: () => void;
  removeAllBeards: () => void;
};

export const useBearStore = create<BearsState>()(
  devtools(
    (set) => ({
      bears: 0,
      increasePopulation: () =>
        set((state) => ({
          bears: state.bears + 1,
        })),
      removeAllBeards: () => set({ bears: 0 }),
    }),
    { enabled: false , name: "useBearStore"}
  )
);

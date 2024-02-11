import { create } from "zustand";
import { persist, subscribeWithSelector } from "zustand/middleware";

export type FoodStore = {
  fish: number;
  addOneFish: () => void;
  removeOneFish: () => void;
  removeAllFish: () => void;
};

export const useFoodStore = create<FoodStore>()(
  subscribeWithSelector((set) => ({
    fish: 0,
    addOneFish: () => set((state) => ({ fish: state.fish + 1 })),
    removeOneFish: () => set((state) => ({ fish: state.fish - 1 })),
    removeAllFish: () => set(() => ({ fish: 0 })),
  }))
);


/**
 * Order of middlewares
 * 1 - createSelectors
 * 2 - create
 * 3 - immer
 * 4 - devtool
 * 5 - subscribeWithSelector
 * 6 - persist
 */


// export const useFoodStore = create<FoodStore>()(
//   persist(
//     (set) => ({
//       fish: 0,
//       addOneFish: () => set((state) => ({ fish: state.fish + 1 })),
//       removeOneFish: () => set((state) => ({ fish: state.fish - 1 })),
//       removeAllFish: () => set(() => ({ fish: 0 })),
//     }),
//     { name: "food-store" }
//   )
// );

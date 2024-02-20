import { create } from "zustand";
import { devtools, persist, subscribeWithSelector } from "zustand/middleware";

const initialValue = { fish: 0 };

export const useFoodStore = create<typeof initialValue>()(
  devtools(
    subscribeWithSelector(persist(() => initialValue, { name: "food-store" })),
    { name: "food-store" }
  )
);

export const addOneFish = () =>
  useFoodStore.setState((state) => ({
    fish: state.fish + 1,
  }));
export const addFiveFish = () =>
  useFoodStore.setState((state) => ({
    fish: state.fish + 5,
  }));
export const removeOneFish = () =>
  useFoodStore.setState((state) => ({
    fish: state.fish - 1,
  }));
export const removeAllFish = () => useFoodStore.setState(() => ({ fish: 0 }));

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

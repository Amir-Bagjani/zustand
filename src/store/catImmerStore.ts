import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";

type CatImmerState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
};

export const useCatImmerStore = create<CatImmerState>()(
  immer(
    // it is important that devtools should comes after immer
    devtools(
      (set) => ({
        cats: {
          bigCats: 0,
          smallCats: 0,
        },
        increaseBigCats: () =>
          //no need to return state
          set((state) => {
            state.cats.bigCats++;
          }),
        increaseSmallCats: () =>
          set((state) => {
            state.cats.smallCats++;
          }),
      }),
      { enabled: true , name: "useCatImmerStore"}
    )
  )
);

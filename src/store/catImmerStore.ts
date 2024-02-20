import { StateCreator, create } from "zustand";
import { immer } from "zustand/middleware/immer";

type CatImmerState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
};

const createCatSlice: StateCreator<
  CatImmerState,
  [["zustand/immer", never]]
> = (set) => ({
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
});
export const useCatImmerStore = create<CatImmerState>()(immer(createCatSlice));

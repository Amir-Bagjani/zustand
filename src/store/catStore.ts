import { create } from "zustand";

type CatState = {
  cats: {
    bigCats: number;
    smallCats: number;
  };
  increaseBigCats: () => void;
  increaseSmallCats: () => void;
};

export const useCatStore = create<CatState>()((set) => ({
  cats: {
    bigCats: 0,
    smallCats: 0,
  },
  increaseBigCats: () =>
    set((state) => ({
      cats: {
        ...state.cats,
        bigCats: state.cats.bigCats + 1,
      },
    })),
  increaseSmallCats: () =>
    set((state) => ({
      cats: {
        ...state.cats,
        smallCats: state.cats.smallCats + 1,
      },
    })),
}));

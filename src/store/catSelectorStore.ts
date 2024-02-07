import { createSelectors } from "../utils/createSelectors";
import { useCatGetStore } from "./catGetStore";

export const useCatSelectorStore = createSelectors(useCatGetStore);

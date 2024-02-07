import { shallow } from "zustand/shallow";
import { useCatGetStore } from "../store/catGetStore";

let renderCount = 0;
export const CatBox6 = () => {
  renderCount++;

  const { increaseBigCats, increaseSmallCats } = useCatGetStore(
    (state) => ({
      increaseBigCats: state.increaseBigCats,
      increaseSmallCats: state.increaseSmallCats,
    }),
    shallow
  );

  return (
    <div className="box">
      <h2>cat multi states and shallow -- render count : {renderCount}</h2>

      <div>
        <button onClick={increaseBigCats}>add big cat</button>
        <button onClick={increaseSmallCats}>rdd small cat</button>
      </div>
    </div>
  );
};

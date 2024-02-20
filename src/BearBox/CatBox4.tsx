import { useCatSelectorStore } from "../store/catSelectorStore";

let renderCount = 0;

export const CatBox4 = () => {
  renderCount++;

  const bigCats = useCatSelectorStore((state) => state.cats.bigCats);

  const increaseBigCats = useCatSelectorStore.use.increaseBigCats();
  const increaseSmallCats = useCatSelectorStore.use.increaseSmallCats();

  return (
    <div className="box">
      <h2>cat selector store -- render count : {renderCount}</h2>
      <h3>bigCats - {bigCats}</h3>

      <div>
        <button onClick={increaseBigCats}>add big cat</button>
        <button onClick={increaseSmallCats}>rdd small cat</button>
      </div>
    </div>
  );
};

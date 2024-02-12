import { useCatImmerStore } from "../store/catImmerStore";
import { useCatStore } from "../store/catStore";

let renderCount = 0;

export const CatBox = () => {
  renderCount++;

  // const bigCats = useCatStore((state) => state.cats.bigCats);
  // const smallCats = useCatStore((state) => state.cats.smallCats);
  // const increaseBigCats = useCatStore((state) => state.increaseBigCats);
  // const increaseSmallCats = useCatStore((state) => state.increaseSmallCats);

  const bigCats = useCatImmerStore((state) => state.cats.bigCats);
  const smallCats = useCatImmerStore((state) => state.cats.smallCats);
  const increaseBigCats = useCatImmerStore((state) => state.increaseBigCats);
  const increaseSmallCats = useCatImmerStore(
    (state) => state.increaseSmallCats
  );

  return (
    <div className="box">
      <h2>cat store -- render count : {renderCount}</h2>

      <p>big cas: {bigCats}</p>
      <p>small cas: {smallCats}</p>

      <div>
        <button onClick={increaseBigCats}>add big cat</button>
        <button onClick={increaseSmallCats}>rdd small cat</button>
      </div>
    </div>
  );
};

import { useEffect, useState } from "react";
import { useCatGetStore } from "../store/catGetStore";
import { useCatImmerStore } from "../store/catImmerStore";
import { useCatStore } from "../store/catStore";

let renderCount = 0;

export const CatBox = () => {
  renderCount++;
  const [total, setTotal] = useState("total");

  const bigCats = useCatGetStore((state) => state.cats.bigCats);
  const smallCats = useCatGetStore((state) => state.cats.smallCats);
  const increaseBigCats = useCatGetStore((state) => state.increaseBigCats);
  const increaseSmallCats = useCatGetStore((state) => state.increaseSmallCats);
  const summary = useCatGetStore((state) => state.summary);

  // const bigCats = useCatImmerStore((state) => state.cats.bigCats);
  // const smallCats = useCatImmerStore((state) => state.cats.smallCats);
  // const increaseBigCats = useCatImmerStore((state) => state.increaseBigCats);
  // const increaseSmallCats = useCatImmerStore(
  //   (state) => state.increaseSmallCats
  // );

  //   const bigCats = useCatStore((state) => state.cats.bigCats);
  //   const smallCats = useCatStore((state) => state.cats.smallCats);
  //   const increaseBigCats = useCatStore((state) => state.increaseBigCats);
  //   const increaseSmallCats = useCatStore((state) => state.increaseSmallCats);

  useEffect(() => {
    setTotal(summary());
  }, [summary, bigCats, smallCats]);


  return (
    <div className="box">
      <h2>cat store -- render count : {renderCount}</h2>

      <p>big cas: {bigCats}</p>
      <p>small cas: {smallCats}</p>
      <p>{total}</p>

      <div>
        <button onClick={increaseBigCats}>add big cat</button>
        <button onClick={increaseSmallCats}>rdd small cat</button>
      </div>
    </div>
  );
};

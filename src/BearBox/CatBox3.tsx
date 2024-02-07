import { useCatGetStore } from "../store/catGetStore";

let renderCount = 0;
export const CatBox3 = () => {
  renderCount++;

  const bigCats = useCatGetStore((state) => state.cats.bigCats);

  return (
    <div className="box">
      <h2>cat store -- render count : {renderCount}</h2>

      <p>big cas: {bigCats}</p>
    </div>
  );
};

import { useBearStore } from "../store/bearStore";

export const BearBox = () => {
  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBeards = useBearStore((state) => state.removeAllBeards);
  return (
    <div className="box">
      <h2>simple store</h2>

      <p>Bears: {bears}</p>

      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBeards}>remove all bears</button>
      </div>
    </div>
  );
};

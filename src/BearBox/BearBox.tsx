import { useEffect, useState } from "react";
import { useBearStore } from "../store/bearStore";
import { useFoodStore } from "../store/foodStore";
import { shallow } from "zustand/shallow";

let renderCount = 0;

export const BearBox = () => {
  renderCount++;

  const bears = useBearStore((state) => state.bears);
  const increasePopulation = useBearStore((state) => state.increasePopulation);
  const removeAllBeards = useBearStore((state) => state.removeAllBeards);

  const [backgroundColor, setBackgroundColor] = useState("lightcoral");

  useEffect(() => {
    const unsub = useFoodStore.subscribe(
      (state) => state.fish,
      (fish, _prevFish) => {
        setBackgroundColor(fish >= 5 ? "lightgreen" : "lightcoral");
      },
      {
        equalityFn: shallow,
        fireImmediately: true,
      }
    );

    return unsub;
  }, []);
  // useEffect(() => {
  //   const unsub = useFoodStore.subscribe((state, _prevState) => {
  //     setBackgroundColor(state.fish >= 5 ? "lightgreen" : "lightcoral");
  //   });

  //   return unsub;
  // }, []);

  return (
    <div className="box" style={{ backgroundColor }}>
      <h2>simple store</h2>
      <h2>Bears store -- render count : {renderCount}</h2>

      <p>Bears: {bears}</p>

      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBeards}>remove all bears</button>
        <button onClick={useBearStore.persist.clearStorage}>
          clear storage but not store
        </button>
      </div>
    </div>
  );
};

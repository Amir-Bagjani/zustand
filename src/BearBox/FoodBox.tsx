import {
  addFiveFish,
  addOneFish,
  removeAllFish,
  removeOneFish,
  useFoodStore,
} from "../store/foodStore";

let renderCount = 0;

export const FoodBox = () => {
  renderCount++;

  // const fish = useFoodStore((s) => s.fish); //reactive state
  const fish = useFoodStore.getState().fish; //non-reactive state

  return (
    <div className="box">
      <h2>food box</h2>
      <h2>food store -- render count : {renderCount}</h2>

      <p>fish: {fish}</p>

      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={addFiveFish}>add 5 fish</button>
        <button onClick={removeAllFish}>remove all fishes</button>
      </div>
    </div>
  );
};

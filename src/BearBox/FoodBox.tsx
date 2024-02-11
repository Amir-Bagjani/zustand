import { useFoodStore } from "../store/foodStore";

let renderCount = 0;

export const FoodBox = () => {
  renderCount++;

  const { fish, addOneFish, removeAllFish, removeOneFish } = useFoodStore();

  return (
    <div className="box">
      <h2>food box</h2>
      <h2>food store -- render count : {renderCount}</h2>

      <p>fish: {fish}</p>

      <div>
        <button onClick={addOneFish}>add one fish</button>
        <button onClick={removeOneFish}>remove one fish</button>
        <button onClick={removeAllFish}>remove all fishes</button>
      </div>
    </div>
  );
};

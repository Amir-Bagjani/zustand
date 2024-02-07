import "./App.css";
import { CatBox } from "./BearBox/CatBox";
import { CatBox2 } from "./BearBox/CatBox2";
import { CatBox3 } from "./BearBox/CatBox3";
import { CatBox4 } from "./BearBox/CatBox4";

function App() {
  return (
    <>
      <h1>Zustand</h1>
      <CatBox />
      <CatBox2 />
      <CatBox3 />
      <CatBox4 />
    </>
  );
}

export default App;

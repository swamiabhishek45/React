import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 5;
  const addValue = () => {
    // console.log("Clickd", counter);
    // counter = counter + 1;
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React with vite</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Increase Value</button>
      <button onClick={removeValue}>Decrease Value</button>
    </>
  );
}

export default App;

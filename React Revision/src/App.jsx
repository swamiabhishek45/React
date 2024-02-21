import React, { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const onIncrease = () => {
    setCounter(counter + 1);
  };
  const onDecrease = () => {
    setCounter(counter - 1);
  };

  return (
    <div className="border-2 mx-auto  w-3/12 p-6 h-44 rounded-3xl">
      <div className="text-6xl font-bold text-center">{counter}</div>
      <div className="flex justify-between">
        <div className="border-2 w-10 h-10 items-center flex justify-center mt-6 rounded-full">
          <button onClick={onDecrease} className="text-4xl">
            -
          </button>
        </div>
        <div className="border-2 w-10 h-10 items-center flex justify-center mt-6 rounded-full">
          <button onClick={onIncrease} className="text-4xl">
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

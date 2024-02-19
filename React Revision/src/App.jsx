import React, { useCallback, useState } from "react";
// import AddTodo from './components/addTodo'
// import Todo from './components/Todo'
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [counter, setCounter] = useState(0);
  const [adjective, setAdjective] = useState("Bad");


  // useCallback freeze this function
  const getAdjective = useCallback(() => {
    setAdjective("Bad");
    return counter
  }, [counter]);

  const handleCLick = () => {
    setCounter(counter + 1);
  };

  return (
    <div className="text-white text-2xl">
      <Navbar adjective={"Good"} getAdjective={getAdjective} />

      <button
        className="bg-gray-800 p-2 px-4 rounded-full mt-4"
        onClick={handleCLick}
      >
        Counter: {counter}
      </button>
    </div>
  );
}

export default App;

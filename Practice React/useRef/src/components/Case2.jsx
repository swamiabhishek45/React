import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../App.css";
import { useEffect } from "react";
import { useRef } from "react";

function Case2() {
  const [count, setCount] = useState(0);
  let ref = useRef();

  useEffect(() => {
    console.log(`rendering....`);
    ref.current.style.background = "blue";
  });

  return (
    <div>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref={ref} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button
        ref={ref}
        onClick={() => {
          ref.current.style.display = "none";
        }}
      >
        Hide Me
      </button>
    </div>
  );
}

export default Case2;

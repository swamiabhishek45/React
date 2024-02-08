import React from "react";
import { useState } from "react";

function Practice() {
  const [color, setColor] = useState("Black");

  return (
    <>
      <div className="h-screen" style={{ backgroundColor: color }}>
        <button
          onClick={() => {
            setColor("red");
          }}
          className="text-white bg-red-600 absolute bottom-0"
        >
          Red
        </button>
        <button
          onClick={() => {
            setColor("blue");
          }}
          className="text-white bg-blue-600"
        >
          Blue
        </button>
        <button
          onClick={() => {
            setColor("green");
          }}
          className="text-white bg-green-600"
        >
          Green
        </button>
      </div>
    </>
  );
}

export default Practice;

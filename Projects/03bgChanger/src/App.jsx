import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black");


  return (
    <div>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      ></div>

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className={`py-2 px-3 text-xs font-bold leading-none  text-white border border-gray rounded-full
          hover:text-black focus:ring-2 ring-black transition ease-in-out duration-150`}
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setColor("Blue")}
            className={`py-2 px-3 text-xs font-bold leading-none  text-white border border-gray rounded-full 
          hover:text-black focus:ring-2 ring-black transition ease-in-out duration-150`}
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>

          <button
            onClick={() => setColor("yellow")}
            className={`py-2 px-3 text-xs font-bold leading-none  text-grey border border-gray rounded-full 
          hover:text-black focus:ring-2 ring-black transition ease-in-out duration-150`}
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>

          <button
            onClick={() => setColor("green")}
            className={`py-2 px-3 text-xs font-bold leading-none  text-white border border-gray rounded-full 
          hover:text-black focus:ring-2 ring-black transition ease-in-out duration-150`}
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>

          <button
            onClick={() => setColor("purple")}
            className={`py-2 px-3 text-xs font-bold leading-none  text-white border border-gray rounded-full 
          hover:text-black focus:ring-2 ring-black transition ease-in-out duration-150`}
            style={{ backgroundColor: "purple" }}
          >
            Purple
          </button>
        </div>
      </div>
    </div>
  );
}

export default App

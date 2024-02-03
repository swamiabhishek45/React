import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const [button, setButton] = useState({
    backgroundColor: "#1d4ed8",
    textContent: "Copy",
  });

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "0123456789";
    if (charAllow) str += "~`!@#$%^&*()_+-={}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 2);
      pass += str.charAt(char);

      setPassword(pass);
    }
  }, [length, numAllow, charAllow, setPassword]);

  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 8);

    setButton({ backgroundColor: "green", textContent: "Copied!" });

    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
    setButton({ backgroundColor: "#1d4ed8", textContent: "Copy" });
  }, [length, numAllow, charAllow, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-xl mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800">
        <h1 className=" text-white text-4xl text-center mb-5">
          Password Generator
        </h1>

        <div className=" flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-2 px-3"
            placeholder="Your Password"
            readOnly
            ref={passwordRef}
          />

          <button
            style={{ backgroundColor: button.backgroundColor }}
            onClick={copyPassToClip}
            className="text-white px-3 py-0.5 shrink-0"
          >
            {button.textContent}
          </button>
        </div>

        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />

            <label>Length : {length}</label>
          </div>
          <div className="">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              onChange={() => {
                setNumAllow((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput" className="m-2">
              Numbers
            </label>
          </div>
          <div className="">
            <input
              type="checkbox"
              defaultChecked={charAllow}
              id="charInput"
              onChange={() => {
                setCharAllow((prev) => !prev);
              }}
            />
            <label htmlFor="charInput" className="m-2">
              Characters
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

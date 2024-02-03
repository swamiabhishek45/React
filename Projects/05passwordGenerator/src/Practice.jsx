import React, { useCallback, useEffect, useState } from "react";

function Practice() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "~`!@#$%^&*()_+-={}[]";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);

      setPassword(pass);
    }
  }, [length, numAllow, charAllow, setPassword]);
useEffect(() => {
  passwordGenerator();;
}, [length, numAllow, charAllow, passwordGenerator]);
  return (
    <>
      <div className="w-full max-w-lg mx-auto px-4 py-6 bg-gray-700 rounded-lg text-orange-500">
        <h1 className="text-4xl text-white">Password Generator</h1>
        <div className="flex rounded-lg overflow-hidden my-3">
          <input
            type="text"
            className="outline-none p-2 px-4 w-full"
            placeholder="Password"
            readOnly
            value={password}
          />

          <button
            //   style={bg}
            className="bg-blue-700 text-white p-2 shrink-0"
          >
            Copy
          </button>
        </div>

        <div className="flex gap-x-4">
          <div className="flex">
            <input
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              type="range"
              className="mr-3"
              min={6}
              max={20}
            />
            <label htmlFor="">Length : {length}</label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              defaultChecked={numAllow}
              id="numberInput"
              className="mr-3"
              onChange={(prev) => !prev}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex">
            <input
              type="checkbox"
              onChange={(prev) => !prev}
              className="mr-3"
            />
            <label htmlFor="">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Practice;

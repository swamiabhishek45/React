import React, { useCallback, useEffect, useRef, useState } from "react";

function Practice() {
  const [length, setLength] = useState(8);
  const [numAllow, setNumAllow] = useState(true);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if (numAllow) str += "1234567890";
    if (charAllow) str += "~!@#$%^&*()_+`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numAllow, charAllow, setPassword]);

  const copyPassToClip = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0,20);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllow, charAllow, passwordGenerator]);
  return (
    <div className="bg-gray-700 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500">
      <h1 className="text-white text-3xl my-4 text-center">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Your Password"
          readOnly
          ref={passRef}
        />
        <button
          onClick={copyPassToClip}
          className="bg-blue-700 outline-none shrink-0 p-2 text-white"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer "
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="">Length : {length}</label>
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
          <label htmlFor="">Numbers</label>
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
          <label htmlFor="">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default Practice;

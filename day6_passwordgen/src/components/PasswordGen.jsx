// import React from "react";
import { useCallback, useEffect, useState, useRef } from "react";

function PasswordGen() {
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const passRef = useRef(null);

  const passwordGen = useCallback(() => {
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numbers == true) {
      str += "0123456789";
    }
    if (symbols == true) {
      str += "0~!@#$%^&*()_+?";
    }
    let pass = "";
    for (let i = 1; i <= length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
      // console.log(str.charAt(Math.floor(Math.random() * str.length + 1)));
    }
    setPassword(pass);
  }, [length, symbols, numbers]);

  useEffect(() => {
    passwordGen();
  }, [numbers, length, symbols, passwordGen]);

  const copyPwd = () => {
    window.navigator.clipboard.writeText(password);
    passRef.current.select();
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-slate-800 w-2/4 m-auto mt-4 rounded-md">
        <div className="mt-7 mb-5">
          <input
            className="bg-gray-50 text-cyan-800 p-2 rounded-md mx-2 w-80"
            type="text"
            name="password"
            id="password"
            readOnly
            value={password}
            ref={passRef}
          />
          <button className="bg-blue-500 p-2 rounded-md" onClick={copyPwd}>
            Copy
          </button>
        </div>

        <div className="mb-4 flex gap-3">
          <input
            type="range"
            name="range"
            id="range"
            min={6}
            max={24}
            value={length}
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label htmlFor="range"> Password Length : {length} </label>
          <input
            type="checkbox"
            name="number"
            id="number"
            defaultChecked={numbers}
            onChange={() => {
              setNumbers((prev) => !prev);
            }}
          />
          <label htmlFor="number"> Include Numbers</label>
          <input
            type="checkbox"
            name="symbol"
            id="symbol"
            defaultChecked={symbols}
            onChange={() => {
              setSymbols((prev) => !prev);
            }}
          />
          <label htmlFor="symbol"> Include Symbols</label>
        </div>
      </div>
    </>
  );
}

export default PasswordGen;

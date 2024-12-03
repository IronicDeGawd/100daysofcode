import { useState } from "react";
import ArrayStorage from "./components/ArrayStorage";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((prev) => prev + 1);
  }
  function handleDecrement() {
    setCount((prev) => prev - 1);
  }

  function storeInStorage() {
    localStorage.setItem("value", count);
    setCount(0);
  }

  function getStorage() {
    let storedValue = localStorage.getItem("value");
    if (storedValue) setCount(JSON.parse(storedValue));
    else alert("No value stored");
    localStorage.removeItem("value");
  }

  return (
    <>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <p>{count}</p>
      <button onClick={storeInStorage}>Store value in local</button>
      <button onClick={getStorage}>Get stored value from local</button>
      <br></br>
      <ArrayStorage></ArrayStorage>
    </>
  );
}

export default App;

import "./App.css";
import Cards from "./components/Cards";
import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  function handleClick() {
    let random = Math.floor(Math.random() * 1000000);
    let randomColor = "#" + random;
    console.log(typeof randomColor);
    setColor(randomColor);
  }
  return (
    <>
      <div
        style={{ backgroundColor: color }}
        className="h-screen w-full flex flex-col justify-center align-middle gap-3"
      >
        <Cards fullName="Aditya Srivastava" post="Intern, Delhi NCR" />
        <Cards fullName="Vasundhara Pandey" post="Intern, Delhi NCR" />
        <button
          onClick={() => handleClick()}
          className="bg-blue-500 max-w-sm mx-auto hover:bg-blue-700 text-white font-bold py-4 px-4 border border-blue-700 rounded"
        >
          Change Background Color
        </button>
      </div>
    </>
  );
}

export default App;

import { useState, useEffect } from "react";
import "./App.css";
import InputBox from "./components/index";

function App() {
  const [currency, setCurrency] = useState(0);

  return (
    <div>
      <InputBox />
    </div>
  );
}

export default App;

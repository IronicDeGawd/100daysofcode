import "./App.css";
import CounterButton from "./Components/CounterButton";
import CounterRenderer from "./Components/CounterRenderer";
import { CounterContextProvider } from "./context/CounterContext";

function App() {
  return (
    <CounterContextProvider>
      <CounterRenderer></CounterRenderer>
      <CounterButton></CounterButton>
    </CounterContextProvider>
  );
}

export default App;

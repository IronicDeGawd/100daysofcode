import { useCounter } from "../context/CounterContext";

function CounterButton() {
  const { setCounter } = useCounter();

  function handleIncrement() {
    setCounter((prev) => prev + 1);
  }
  function handleDecrement() {
    setCounter((prev) => prev - 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Increase</button>
      <button onClick={handleDecrement}>Decrease</button>
    </div>
  );
}

export default CounterButton;

import { useCounter } from "../context/CounterContext";

function CounterRenderer() {
  const { counter } = useCounter();
  return <div>{counter}</div>;
}

export default CounterRenderer;

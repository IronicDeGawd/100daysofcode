import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../slice/CounterSlice";

function Counter() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  return (
    <>
      {counter}
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default Counter;

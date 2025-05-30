import { useState } from "react";

function Counter() {
  let [count, setCount] = useState(0);

  let [incrementValue, setIncrementValue] = useState(1);

  function increment() {
    setCount(count + incrementValue);
  }

  function decrement() {
    setCount(count - incrementValue);
  }

  function incrementBy() {
    setIncrementValue(incrementValue + 1);
  }

  function decrementBy() {
    setIncrementValue(incrementValue - 1);
  }

  return (
    <>
      <h1>The Count is: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button> <br />
      <br />
      <h1>Increment/Decrement Value by: {incrementValue}</h1>
      <button onClick={incrementBy}>Increment By</button>
      <button onClick={decrementBy}>Decrement By</button>
    </>
  );
}

export default Counter;

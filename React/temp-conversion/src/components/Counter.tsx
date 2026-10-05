import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function increase() {
    setCount((prevCount) => prevCount + 1);
  }

  function decrease() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <div>
      <h2>Counter</h2>

      <button onClick={decrease}>-</button>

      <span> {count} </span>

      <button onClick={increase}>+</button>
    </div>
  );
}

export default Counter;
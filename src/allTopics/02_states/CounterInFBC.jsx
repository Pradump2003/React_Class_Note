import React from "react";
import { useState } from "react";

function CounterInFBC() {
  let [count, setCount] = useState(0);
  let Increment = () => setCount(count + 1);
  let Decrement = () => {
    if (count>0) {
        setCount(count-1)
    }
  };
  let Reset = () => setCount((count = 0));

  return (
    <div>
      <h1>Counter in Function Based Components</h1>
      <h2>Counter : {count}</h2>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
}

export default CounterInFBC;

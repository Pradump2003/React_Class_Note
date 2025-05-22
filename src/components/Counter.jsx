import React from "react";
import IncrementBtn from "./IncrementBtn";
import DecrementBtn from "./DecrementBtn";
import DisplayCount from "./DisplayCount";

// Display a simple counter value
export default function Counter() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      {/* <div>Counter: {count}</div> */}
      <IncrementBtn setCount={setCount} />
      <DecrementBtn setCount={setCount} count={count} />
      {/* <h1>Display Counter: {count}</h1> */}
      <DisplayCount count={count} />
    </>
  );
}

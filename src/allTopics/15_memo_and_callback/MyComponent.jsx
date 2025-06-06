import React, { useCallback, useMemo, useState } from "react";
import ChildX from "./ChildX";

const MyComponent = () => {
  const [add, setAdd] = useState(0);
  const [minus, setMinus] = useState(100);

  function multiply() {
    console.log("multiply");
    return add * 5;
  }

  //! IT RETURN MEMORIZED VALUE
  let memorizedValue = useMemo(() => {
    // return add * 5;
    return multiply();
  }, [add]);

  //   function display() {
  //     console.log("Hello World");
  //   }

  //! IT RETURNS MEMORIZED FUNCTION
  let display = useCallback(() => {
    console.log("Hello World");
  }, []);

  return (
    <div>
      <h1>MyComponent </h1>
      <h1>Add {add}</h1>
      <button
        className="border-black rounded-md px-3 py-2 bg-red-500"
        onClick={() => setAdd(add + 1)}
      >
        Add
      </button>
      <h1>Minus {minus}</h1>
      <button
        className="border-black rounded-md px-3 py-2 bg-red-500"
        onClick={() => setMinus(minus - 1)}
      >
        Minus
      </button>
      <h2>Multiply {memorizedValue}</h2>
      <ChildX display={display} />
    </div>
  );
};

export default MyComponent;

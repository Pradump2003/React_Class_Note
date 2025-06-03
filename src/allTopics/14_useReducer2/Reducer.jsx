import React, { useReducer } from "react";

let initialState = 0;
function reducerfunc(prevState, action) {
  switch (action) {
    case "increment":
      return prevState + 1;

    case "decrement":
      if (prevState > 0) {
        return prevState - 1;
      }
      break;

    default:
      return prevState;
  }
}

const UseReducer1 = () => {
  const [state, dispatch] = useReducer(reducerfunc, initialState);
  console.log(state);

  return (
    <div>
      <h1>Reducer {state}</h1>
      <button onClick={() => dispatch("increment")}>increment</button>
      <button onClick={() => dispatch("decrement")}>decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReducer1;
